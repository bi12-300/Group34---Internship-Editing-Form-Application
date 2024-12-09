import React from 'react';
import './InternalSupervisorDetail.css';

function InternalSupervisorDetail() {
  const handlePreview = (fileType) => {
    // Điều hướng đến trang preview của tài liệu
    window.location.href = `/preview/${fileType}`;
  };

  return (
    <div className="internal-detail">
      <h2>Chi tiết thông tin giám sát viên nội bộ</h2>
      <p><strong>Tên:</strong> ThS. Nguyễn Văn B</p>
      <p><strong>Đơn vị công tác:</strong> Khoa Công nghệ thông tin</p>
      <p><strong>Email:</strong> nguyenvanb@example.com</p>
      <p><strong>Điện thoại:</strong> 0123456789</p>

      <h3>Giấy tờ liên quan</h3>
      <div className="document-container">
        <div className="document" onClick={() => handlePreview('document1')}>
          <img src="https://via.placeholder.com/250x170?text=Document1" alt="Giấy tờ 1" />
          <p>Giấy tờ 1</p>
        </div>
        <div className="document" onClick={() => handlePreview('document2')}>
          <img src="https://via.placeholder.com/250x170?text=Document2" alt="Giấy tờ 2" />
          <p>Giấy tờ 2</p>
        </div>
      </div>
    </div>
  );
}

export default InternalSupervisorDetail;
