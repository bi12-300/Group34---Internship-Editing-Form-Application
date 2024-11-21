const db = require("./db");

class User {
  // Tìm người dùng theo username
  static async findByUsername(username) {
    const [rows] = await db.query("SELECT * FROM users WHERE username = ?", [username]);
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
}

module.exports = User;