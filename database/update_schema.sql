-- Thêm cột `phone_number` vào bảng `Users`
ALTER TABLE Users
ADD COLUMN phone_number VARCHAR(15) AFTER email;

-- Thêm bảng mới để lưu lịch sử hoạt động
CREATE TABLE Activity_Log (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    action VARCHAR(255),
    timestamp DATETIME,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

-- Thêm cột `start_date` và `end_date` vào bảng `Student_Registrations`
ALTER TABLE Student_Registrations
ADD COLUMN start_date DATE,
ADD COLUMN end_date DATE;
