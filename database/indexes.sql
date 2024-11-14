-- Tạo chỉ mục cho bảng Users (dùng thường xuyên cho các thao tác tìm kiếm theo email)
CREATE INDEX idx_users_email ON Users(email);

-- Tạo chỉ mục cho bảng Student_Registrations (dùng cho tìm kiếm theo trạng thái)
CREATE INDEX idx_student_registrations_status ON Student_Registrations(status);

-- Tạo chỉ mục cho bảng Files (dùng cho tìm kiếm theo file_id)
CREATE INDEX idx_files_file_id ON Files(file_id);
