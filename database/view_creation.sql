-- Tạo view cho báo cáo sinh viên đã đăng ký internship
CREATE VIEW Student_Internship_Report AS
SELECT s.student_name, p.procedure_name, r.status
FROM Student_Registrations r
JOIN Students s ON r.student_id = s.id
JOIN Internship_Procedures p ON r.procedure_id = p.id;
