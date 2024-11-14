-- Cấp quyền cho người dùng quản trị
GRANT ALL PRIVILEGES ON internship_register.* TO 'admin_user'@'localhost' IDENTIFIED BY 'admin_password';

-- Cấp quyền cho người dùng sinh viên (chỉ có quyền SELECT và INSERT)
GRANT SELECT, INSERT ON internship_register.Student_Registrations TO 'student_user'@'localhost' IDENTIFIED BY 'student_password';

-- Cấp quyền cho người dùng giám sát viên (có quyền SELECT và UPDATE)
GRANT SELECT, UPDATE ON internship_register.Student_Registrations TO 'supervisor_user'@'localhost' IDENTIFIED BY 'supervisor_password';

-- Cấp quyền cho người dùng chỉ xem dữ liệu
GRANT SELECT ON internship_register.* TO 'read_only_user'@'localhost' IDENTIFIED BY 'read_password';
