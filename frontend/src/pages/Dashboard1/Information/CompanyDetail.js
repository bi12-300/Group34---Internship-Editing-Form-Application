import React from 'react';
import { Link } from 'react-router-dom';

function CompanyDetail() {
  return (
    <div className="company-detail">
      <h2>Chi tiết thông tin công ty</h2>
      <p><strong>Tên công ty:</strong> Công ty ABC</p>
      <p><strong>Địa chỉ:</strong> 123 Đường ABC, Quận 1, TP.HCM</p>
      <p><strong>Email:</strong> contact@abc.com</p>
      <p><strong>Số điện thoại:</strong> 0987654321</p>

      <h3>Giấy tờ liên quan</h3>
      <div className="document-container">
        <div className="document">
          {/* Đảm bảo đường dẫn đúng với route con dưới /dashboard */}
          <Link to="/dashboard/previewdocument/document1">
            <img src="https://via.placeholder.com/250x170?text=Document1" alt="Giấy tờ 1" />
            <p>Giấy tờ 1</p>
          </Link>
        </div>
        <div className="document">
          <Link to="/dashboard/previewdocument/document2">
            <img src="https://via.placeholder.com/250x170?text=Document2" alt="Giấy tờ 2" />
            <p>Giấy tờ 2</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompanyDetail;
