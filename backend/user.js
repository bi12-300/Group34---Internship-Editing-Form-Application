const db = require("./db");

class User {
  // Tìm người dùng theo username
  static async findByUsername(username) {
    const [rows] = await db.query("SELECT * FROM users WHERE username = ?", [username]);
    return rows[0];
  }

  // Tìm người dùng theo ID
  static async findById(userId) {
    const [rows] = await db.query("SELECT * FROM users WHERE user_id = ?", [userId]);
    return rows[0];
  }

  // Tạo người dùng mới
  static async create({ username, password, role }) {
    const [result] = await db.query(
      "INSERT INTO users (username, password, role) VALUES (?, ?, ?)",
      [username, password, role]
    );
    return result.insertId;
  }

  // Cập nhật thông tin người dùng
  static async update(userId, { name, email, internshipTopic }) {
    const [result] = await db.query(
      "UPDATE users SET name = ?, email = ?, internshipTopic = ? WHERE user_id = ?",
      [name, email, internshipTopic, userId]
    );
    return result.affectedRows > 0;
  }
}

module.exports = User;
