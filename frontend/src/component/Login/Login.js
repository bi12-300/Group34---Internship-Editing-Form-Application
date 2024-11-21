import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Thư viện dùng để gửi yêu cầu HTTP
import './Login.css';

function Login() {
  const [username, setUsername] = useState(''); // Lưu giá trị nhập vào username
  const [password, setPassword] = useState(''); // Lưu giá trị nhập vào password
  const [role, setRole] = useState('Student'); // Lưu giá trị nhập vào role
  const navigate = useNavigate(); // Dùng để chuyển hướng sang trang khác sau khi đăng nhập thành công

  const handleSubmit = async (e) => {
    e.preventDefault();  // Ngừng hành động mặc định của form (không reload trang)

    if (username && password && role) {
      try {
        // Gửi yêu cầu đăng nhập tới backend
        const response = await axios.post('http://localhost:3000/login', {
          username,
          password,
          role
        });

        if (response.status === 200) {
          const data = response.data;
          // Lưu token vào localStorage
          localStorage.setItem('token', data.token);
          // Chuyển hướng đến Dashboard
          navigate('/dashboard');
        }
      } catch (error) {
        console.error('Login error:', error);
        alert('Invalid credentials');
      }
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label htmlFor="role">Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="Supervisor">Supervisor</option>
              <option value="Student">Student</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <button onClick={() => navigate('/signup')} className="signup-button">Sign Up</button>
      </div>
    </div>
  );
}

export default Login;
