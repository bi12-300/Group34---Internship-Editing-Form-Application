require('dotenv').config();
const mysql = require('mysql2');

// Cấu hình kết nối
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

// Tạo kết nối promise
const db = pool.promise();

// Kiểm tra kết nối
async function testConnection() {
    try {
        // Thực hiện một truy vấn đơn giản
        const [rows] = await db.query('SELECT 1');
        console.log('Kết nối database thành công!');
        
        // Log thông tin kết nối
        console.log('Thông tin kết nối:');
        console.log(`- Database: ${process.env.DB_NAME}`);
        console.log(`- Host: ${process.env.DB_HOST}`);
        console.log(`- Port: ${process.env.DB_PORT}`);
    } catch (error) {
        console.error('Lỗi kết nối database:', error.message);
    }
}

// Chạy kiểm tra
testConnection();

module.exports = db;