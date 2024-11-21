import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Setting.css";

function Setting() {
  const navigate = useNavigate();

  // Thông tin người dùng cập nhật
  const userInfo = {
    name: "Phan Đăng Nhân",
    dob: "19/08/2003",
    studentId: "BI12-336",
    department: "Công nghệ thông tin",
    course: "Công nghệ thông tin và truyền thông",
    email: "nhandangphan1908@gmail.com",
    phone: "0353473186",
    avatar: "https://via.placeholder.com/150", 
  };

  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [isHelpOpen, setHelpOpen] = useState(false);
  const [isScreenOpen, setScreenOpen] = useState(false);

  const toggleSettings = () => setSettingsOpen(!isSettingsOpen);
  const toggleHelp = () => setHelpOpen(!isHelpOpen);
  const toggleScreen = () => setScreenOpen(!isScreenOpen);

  return (
    <div className="setting-container">
      <h1>Cài đặt</h1>

      {/* Thông tin người dùng */}
      <div className="user-info">
        <div className="avatar-container">
          <img src={userInfo.avatar} alt="Avatar" className="avatar" />
        </div>
        <div className="info">
          <h2>{userInfo.name}</h2>
          <p><strong>Ngày sinh:</strong> {userInfo.dob}</p>
          <p><strong>Mã sinh viên:</strong> {userInfo.studentId}</p>
          <p><strong>Khoa:</strong> {userInfo.department}</p>
          <p><strong>Ngành:</strong> {userInfo.course}</p>
          <p><strong>Email:</strong> {userInfo.email}</p>
          <p><strong>Số điện thoại:</strong> {userInfo.phone}</p>
          <button onClick={() => navigate("/dashboard/setting/update-info")}>
            Cập nhật thông tin
          </button>
        </div>
      </div>

      {/* Cài đặt hệ thống */}
      <div className="system-settings">
        <div className="setting-item">
          <button onClick={toggleSettings}>Cài đặt</button>
          {isSettingsOpen && (
            <div className="dropdown">
              <p>Cài đặt hệ thống</p>
              <p>Ngôn ngữ</p>
            </div>
          )}
        </div>

        <div className="setting-item">
          <button onClick={toggleHelp}>Trợ giúp</button>
          {isHelpOpen && (
            <div className="dropdown">
              <p>Trung tâm trợ giúp</p>
              <p>Báo cáo</p>
            </div>
          )}
        </div>

        <div className="setting-item">
          <button onClick={toggleScreen}>Màn hình</button>
          {isScreenOpen && (
            <div className="dropdown">
              <p>Chế độ tối</p>
              <p>Bàn phím</p>
            </div>
          )}
        </div>

        <div className="setting-item">
          <button onClick={() => navigate("/")}>Đăng xuất</button>
        </div>
      </div>
    </div>
  );
}

export default Setting;
