-- Bắt đầu giao dịch
START TRANSACTION;

-- Thực hiện các câu lệnh SQL
INSERT INTO Student_Registrations (student_id, procedure_id, status)
VALUES (1, 2, 'Pending');

-- Nếu mọi thứ đều ổn, commit giao dịch
COMMIT;

-- Nếu có lỗi, rollback giao dịch
ROLLBACK;
