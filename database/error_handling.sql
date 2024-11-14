-- Ví dụ sử dụng TRY...CATCH trong MySQL (MySQL 5.5+ không hỗ trợ trực tiếp TRY...CATCH, nên có thể dùng cách khác)
DELIMITER $$

CREATE PROCEDURE SafeInsert(IN userId INT, IN action VARCHAR(255))
BEGIN
    DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
        -- Xử lý lỗi, chẳng hạn ghi vào bảng logs
        INSERT INTO Error_Logs (user_id, error_message)
        VALUES (userId, 'An error occurred during insert operation');
    END;

    -- Chèn dữ liệu vào bảng Activity_Logs
    INSERT INTO Activity_Logs (user_id, action)
    VALUES (userId, action);
END $$

DELIMITER ;
