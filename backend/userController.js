const db = require("./db");

// Lấy thông tin người dùng
const getUserController = async (req, res) => {
  const userId = req.params.id;

  try {
    const [rows] = await db.query('SELECT * FROM users WHERE user_id = ?', [userId]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching user information' });
  }
};

// Cập nhật thông tin người dùng
const updateUserController = async (req, res) => {
  const userId = req.params.id;
  const { username, password, role } = req.body;

  try {
    // Kiểm tra nếu có thông tin cần cập nhật
    const [result] = await db.query(
      'UPDATE users SET username = ?, password = ?, role = ? WHERE user_id = ?',
      [username, password, role, userId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found or no changes' });
    }

    res.json({ message: 'User updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating user information' });
  }
};

module.exports = { getUserController, updateUserController };
