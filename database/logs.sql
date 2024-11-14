-- Tạo bảng logs để theo dõi hoạt động
CREATE TABLE Activity_Logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    action VARCHAR(255),
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

-- Chèn log vào bảng Activity_Logs
INSERT INTO Activity_Logs (user_id, action)
VALUES (1, 'Registered for internship');
