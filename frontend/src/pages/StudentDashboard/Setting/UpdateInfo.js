import React, { useState } from "react";
import "./UpdateInfo.css";

function UpdateInfo() {
  const [formData, setFormData] = useState({
    name: "John Doe", 
    dob: "",
    studentId: "",
    department: "",
    course: "",
    email: "example@example.com",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Thông tin cập nhật:", formData);
    alert("Cập nhật thành công!");
  };

  return (
    <div className="update-info-container">
      <h1>Cập nhật thông tin</h1>
      <form onSubmit={handleSubmit}>
        <label>Họ và Tên</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        
        <label>Ngày sinh</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
        
        <label>Mã sinh viên</label>
        <input
          type="text"
          name="studentId"
          value={formData.studentId}
          onChange={handleChange}
        />
        
        <label>Khoa</label>
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
        />
        
        <label>Khóa học</label>
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
        />
        
        <label>Email (không thay đổi)</label>
        <input type="email" name="email" value={formData.email} readOnly />
        
        <label>Số điện thoại</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <button type="submit">Lưu thông tin</button>
      </form>
    </div>
  );
}

export default UpdateInfo;
