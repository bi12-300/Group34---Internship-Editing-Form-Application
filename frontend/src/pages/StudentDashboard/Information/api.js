import axios from 'axios';

// Hàm để lấy thông tin người dùng từ API
export const fetchInformation = async () => {
  try {
    const response = await axios.get('/api/user/123');  // Giả sử 123 là ID người dùng
    return response.data;
  } catch (error) {
    console.error('Error fetching user information:', error);
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm này
  }
};

// Hàm để cập nhật thông tin người dùng
export const updateInformation = async (userId, updatedInfo) => {
  try {
    const response = await axios.put(`/api/user/${userId}`, updatedInfo);
    return response.data;  // Trả về thông tin đã được cập nhật
  } catch (error) {
    console.error('Error updating user information:', error);
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm này
  }
};
