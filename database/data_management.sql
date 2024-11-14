-- Backup database (bằng lệnh mysqldump, phải chạy từ dòng lệnh hoặc script)
-- Sử dụng mysqldump từ dòng lệnh để sao lưu cơ sở dữ liệu vào file SQL.
-- Lệnh này sẽ được thực thi bên ngoài SQL file và không nằm trong file này:
-- mysqldump -u root -p internship_register > backup.sql;

-- Dọn dẹp dữ liệu cũ (ví dụ: xóa các bản ghi cũ hơn 1 năm)
DELETE FROM Users WHERE created_at < NOW() - INTERVAL 1 YEAR;
DELETE FROM Student_Registrations WHERE created_at < NOW() - INTERVAL 1 YEAR;

-- Xóa các file không còn sử dụng
DELETE FROM Files WHERE file_status = 'invalid';
