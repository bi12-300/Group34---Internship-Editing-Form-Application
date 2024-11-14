-- Thêm dữ liệu mẫu cho bảng Users
INSERT INTO Users (name, email, role, created_at, updated_at)
VALUES
    ('Nguyen Van A', 'nva@example.com', 'student', NOW(), NOW()),
    ('Nguyen Thi B', 'ntb@example.com', 'admin', NOW(), NOW());

-- Thêm dữ liệu mẫu cho bảng Internship_Procedures
INSERT INTO Internship_Procedures (title, description, active, created_at, updated_at)
VALUES
    ('Software Engineering Internship', 'A 3-month internship for software engineers', TRUE, NOW(), NOW()),
    ('Marketing Internship', 'A 6-month internship for marketing students', TRUE, NOW(), NOW());

-- Thêm dữ liệu mẫu cho bảng Student_Registrations
INSERT INTO Student_Registrations (student_id, procedure_id, status, created_at, updated_at)
VALUES
    (1, 1, 'Pending', NOW(), NOW()),
    (2, 2, 'Approved', NOW(), NOW());
