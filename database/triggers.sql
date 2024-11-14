-- Tạo Trigger: Cập nhật trường `updated_at` khi cập nhật thông tin sinh viên
CREATE TRIGGER before_student_update
BEFORE UPDATE ON Users
FOR EACH ROW
BEGIN
    SET NEW.updated_at = NOW();
END $$

-- Tạo Trigger: Cập nhật trường `updated_at` khi cập nhật trạng thái trong bảng Student_Registrations
CREATE TRIGGER before_registration_update
BEFORE UPDATE ON Student_Registrations
FOR EACH ROW
BEGIN
    SET NEW.updated_at = NOW();
END $$

-- Tạo Trigger: Ghi nhận các bản ghi khi một sinh viên đăng ký thực tập mới
CREATE TRIGGER after_student_registration
AFTER INSERT ON Student_Registrations
FOR EACH ROW
BEGIN
    INSERT INTO Activity_Log (user_id, action, timestamp) 
    VALUES (NEW.student_id, 'Registered for internship', NOW());
END $$

DELIMITER ;
