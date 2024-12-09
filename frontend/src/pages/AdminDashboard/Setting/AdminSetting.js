import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminSetting.css";

function Setting() {
  const navigate = useNavigate();

  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [isHelpOpen, setHelpOpen] = useState(false);
  const [isScreenOpen, setScreenOpen] = useState(false);

  const toggleSettings = () => setSettingsOpen(!isSettingsOpen);
  const toggleHelp = () => setHelpOpen(!isHelpOpen);
  const toggleScreen = () => setScreenOpen(!isScreenOpen);

  return (
    <div className="setting-container">
      <h1>Cài đặt</h1>

      <div className="system-settings">
        <div className="setting-item">
          <button onClick={toggleSettings}>Cài đặt</button>
          {isSettingsOpen && (
            <div className="dropdown">
              <p>Ngôn ngữ:</p>
              <select>
                <option value="en">Tiếng Anh</option>
                <option value="vi">Tiếng Việt</option>
              </select>
              
              <div className="settings-section">
                <h3>Cài đặt Thông báo</h3>
                <label htmlFor="emailNotif">Thông báo Email:</label>
                <input type="checkbox" id="emailNotif" defaultChecked />
                <label htmlFor="smsNotif">Thông báo SMS:</label>
                <input type="checkbox" id="smsNotif" />
              </div>
              
              <div className="settings-section">
                <h3>Bảo trì Hệ thống</h3>
                <button>Sao lưu Dữ liệu</button>
                <button>Phục hồi Dữ liệu</button>
              </div>
            </div>
          )}
        </div>

        <div className="setting-item">
          <button onClick={toggleHelp}>Trợ giúp</button>
          {isHelpOpen && (
            <div className="dropdown">
              <p>Trung tâm Trợ giúp</p>
              <p>Báo cáo</p>
            </div>
          )}
        </div>

        <div className="setting-item">
          <button onClick={toggleScreen}>Màn hình</button>
          {isScreenOpen && (
            <div className="dropdown">
              <p>Chế độ Tối</p>
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
