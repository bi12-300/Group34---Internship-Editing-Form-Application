const jwt = require('jsonwebtoken');
const db = require('./db');
const User = require("../backend/user");

let refreshTokens = [];

const login = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await User.findByUsername(username);
      if (!user) return res.status(401).json({ error: "Invalid username or password" });
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) return res.status(401).json({ error: "Invalid username or password" });
  
      const token = jwt.sign({ username: user.username, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
  
      res.json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Database error" });
    }
  };
  
  module.exports = { login };

const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' });
};

const tokenController = (req, res) => {
    const refreshToken = req.body.token;

    if (!refreshToken) return res.sendStatus(401); // Thiếu Refresh Token
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403); // Token không hợp lệ

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // Token hết hạn hoặc không hợp lệ

        // Tạo lại Access Token
        const accessToken = generateAccessToken({ userId: user.userId, username: user.username, role: user.role });
        res.json({ accessToken });
    });
};

const logoutController = (req, res) => {
    const refreshToken = req.body.token;

    if (!refreshToken) {
        return res.status(400).json({ message: 'Thiếu Refresh Token' });
    }

    // Loại bỏ token khỏi danh sách
    refreshTokens = refreshTokens.filter(token => token !== refreshToken);

    res.sendStatus(204); // Thành công, không có nội dung trả về
};

const loginController = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Truy vấn thông tin người dùng từ database
        const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username]);

        // Kiểm tra nếu không tìm thấy người dùng
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Tên đăng nhập không tồn tại' });
        }

        const user = rows[0];

        // Kiểm tra mật khẩu
        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) {
            return res.status(401).json({ message: 'Mật khẩu không chính xác' });
        }

        // Tạo Access Token và Refresh Token
        const accessToken = generateAccessToken({ userId: user.user_id, username: user.username, role: user.role });
        const refreshToken = jwt.sign({ userId: user.user_id, username: user.username, role: user.role }, process.env.REFRESH_TOKEN_SECRET);

        // Lưu Refresh Token vào danh sách hoặc cơ sở dữ liệu (nếu cần)
        refreshTokens.push(refreshToken);

        // Trả về token cho client
        res.json({ accessToken, refreshToken });
    } catch (error) {
        console.error('Lỗi khi xử lý đăng nhập:', error);
        res.status(500).json({ message: 'Lỗi máy chủ' });
    }
};

module.exports = {
    tokenController,
    logoutController,
    loginController
};
