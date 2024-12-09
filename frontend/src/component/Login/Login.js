import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import './Login.css';

function Login() {
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [role, setRole] = useState('Student'); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();  

    if (username && password && role) {
      try {
        const response = await axios.post('http://localhost:5000/login', {
          username,
          password,
          role
        });

        if (response.status === 200) {
          const data = response.data;
          localStorage.setItem('token', data.token);
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
