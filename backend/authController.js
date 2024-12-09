const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('./db');
const User = require("../backend/user");

let refreshTokens = [];

// Login function
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

// Middleware để kiểm tra quyền truy cập của người dùng (xác thực token)
const authMiddleware = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;  // Lưu thông tin người dùng vào req.user
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

// Generate Access Token
const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' });
};

// Token Refresh Function (làm mới token)
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

// Logout Function
const logoutController = (req, res) => {
    const refreshToken = req.body.token;

    if (!refreshToken) {
        return res.status(400).json({ message: 'Thiếu Refresh Token' });
    }

    // Loại bỏ token khỏi danh sách
    refreshTokens = refreshTokens.filter(token => token !== refreshToken);

    res.sendStatus(204); // Thành công, không có nội dung trả về
};

// Controller để cập nhật thông tin người dùng (PUT)
const updateUserController = async (req, res) => {
    const { name, email, internshipTopic } = req.body;
    const userId = req.user.userId;  // Lấy ID người dùng từ JWT token

    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ msg: 'User not found' });

        // Cập nhật thông tin người dùng
        user.name = name || user.name;
        user.email = email || user.email;
        user.internshipTopic = internshipTopic || user.internshipTopic;

        await user.save(); // Lưu thay đổi vào database

        res.json(user);  // Trả về thông tin người dùng đã cập nhật
    } catch (err) {
        console.error('Error updating user:', err);
        res.status(500).json({ msg: 'Server error' });
    }
};

module.exports = { login, authMiddleware, tokenController, logoutController, updateUserController };
