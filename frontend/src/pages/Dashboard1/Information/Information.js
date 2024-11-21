import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Information.css';

function Information() {
  const [info] = useState({
    student: {
      name: "Nguyễn Văn A",
      internshipTopic: "Phát triển ứng dụng web",
      university: "Đại học Công Nghệ",
      email: "nguyenvana@example.com"
    },
    internalSupervisor: {
      name: "ThS. Nguyễn Văn B",
      department: "Khoa Công nghệ thông tin",
      email: "nguyenvanb@example.com",
      phone: "0123456789"
    },
    externalSupervisor: {
      name: "Ông John Doe",
      company: "Công ty XYZ",
      email: "johndoe@company.com",
      position: "Giám đốc"
    },
    company: {
      name: "Công ty ABC",
      address: "123 Đường ABC, Quận 1, TP.HCM",
      email: "contact@abc.com",
      phone: "0987654321"
    }
  });

  const navigate = useNavigate();

  // Hàm chuyển hướng khi click vào "View More"
  const handleViewMore = (section) => {
    navigate(`/dashboard/${section}-detail`);
  };
  
  

  const sections = [
    { title: "Thông tin sinh viên", data: info.student, section: "student" },
    { title: "Thông tin giám sát viên nội bộ", data: info.internalSupervisor, section: "internal" },
    { title: "Thông tin giám sát viên ngoại bộ", data: info.externalSupervisor, section: "external" },
    { title: "Thông tin công ty", data: info.company, section: "company" }
  ];

  return (
    <div className="information-container">
      <h2>Thông tin thực tập</h2>

      {sections.map(({ title, data, section }) => (
        <div key={section} className="info-section">
          <h3>{title}</h3>
          {Object.entries(data).map(([key, value]) => (
            <p key={key}><strong>{key.replace(/([A-Z])/g, ' $1')}:</strong> {value}</p>
          ))}
          <button onClick={() => handleViewMore(section)}>View More</button>
        </div>
      ))}
    </div>
  );
}

export default Information;
