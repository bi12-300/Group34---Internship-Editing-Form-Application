import React from 'react';
import './ExternalSupervisorDetail.css';

function ExternalSupervisorDetail() {
  const handlePreview = (fileType) => {
    // Điều hướng đến trang preview của tài liệu
    window.location.href = `/preview/${fileType}`;
  };

  return (
    <div className="external--detail">
      <h2>Chi tiết thông tin giám sát viên ngoại bộ</h2>
      <p><strong>Tên:</strong> Ông John Doe</p>
      <p><strong>Đơn vị công tác:</strong> Công ty XYZ</p>
      <p><strong>Email:</strong> johndoe@company.com</p>
      <p><strong>Chức vụ:</strong> Giám đốc</p>
      <p><strong>Số điện thoại:</strong> 0987654321</p>

      <h3>Giấy tờ liên quan</h3>
      <div className="document-container">
        <div className="document" onClick={() => handlePreview('document1')}>
          <img src="https://via.placeholder.com/250x170?text=Document1" alt="Giấy tờ 1" />
          
        </div>
        <div className="document" onClick={() => handlePreview('document2')}>
          <img src="https://via.placeholder.com/250x170?text=Document2" alt="Giấy tờ 2" />
          
        </div>
      </div>
    </div>
  );
}

export default ExternalSupervisorDetail;
