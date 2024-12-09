import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchInformation, updateInformation } from './api';  // Import hàm fetch và update từ api.js
import './Information.css';

function Information() {
  const [info, setInfo] = useState(null);  // State lưu thông tin người dùng
  const [loading, setLoading] = useState(true);  // State kiểm tra quá trình tải
  const [error, setError] = useState(null);  // State lưu lỗi nếu có
  const [editing, setEditing] = useState(false);  // State kiểm tra trạng thái chỉnh sửa
  const [updatedInfo, setUpdatedInfo] = useState({});  // State lưu thông tin được cập nhật
  const navigate = useNavigate();

  useEffect(() => {
    const loadInformation = async () => {
      try {
        const data = await fetchInformation();  // Lấy thông tin người dùng từ API
        setInfo(data);
      } catch (err) {
        setError('Failed to load user information');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadInformation();
  }, []);

  const handleViewMore = (section) => {
    navigate(`/student-dashboard/${section}-detail`);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      await updateInformation(info.student.userId, updatedInfo);  // Gửi yêu cầu cập nhật thông tin
      setInfo({ ...info, student: { ...info.student, ...updatedInfo } });  // Cập nhật lại state với thông tin mới
      setEditing(false);
    } catch (err) {
      setError('Failed to update information');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedInfo({
      ...updatedInfo,
      [name]: value
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="information-container">
      <h2>Thông tin thực tập</h2>

      {info && (
        <>
          <div className="info-section">
            <h3>Thông tin sinh viên</h3>
            {editing ? (
              <div>
                <input
                  type="text"
                  name="name"
                  value={updatedInfo.name || info.student.name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="email"
                  value={updatedInfo.email || info.student.email}
                  onChange={handleChange}
                />
                {/* Add more fields as needed */}
                <button onClick={handleSaveClick}>Save</button>
              </div>
            ) : (
              <div>
                <p><strong>Name:</strong> {info.student.name}</p>
                <p><strong>Email:</strong> {info.student.email}</p>
                {/* Display other fields */}
                <button onClick={handleEditClick}>Edit</button>
              </div>
            )}
          </div>

          {info.internalSupervisor && (
            <div className="info-section">
              <h3>Thông tin giám sát viên nội bộ</h3>
              <p><strong>Name:</strong> {info.internalSupervisor.name}</p>
              <p><strong>Email:</strong> {info.internalSupervisor.email}</p>
              <button onClick={() => handleViewMore('internal')}>View More</button>
            </div>
          )}

          {info.externalSupervisor && (
            <div className="info-section">
              <h3>Thông tin giám sát viên ngoại bộ</h3>
              <p><strong>Name:</strong> {info.externalSupervisor.name}</p>
              <p><strong>Email:</strong> {info.externalSupervisor.email}</p>
              <button onClick={() => handleViewMore('external')}>View More</button>
            </div>
          )}

          {info.company && (
            <div className="info-section">
              <h3>Thông tin công ty</h3>
              <p><strong>Name:</strong> {info.company.name}</p>
              <p><strong>Email:</strong> {info.company.email}</p>
              <button onClick={() => handleViewMore('company')}>View More</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Information;
