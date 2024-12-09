import React from 'react';
import { Link } from 'react-router-dom';
import './TopNavAdmin.css';

const adminLinks = [
  { path: '/admin-dashboard/home', label: 'Home' },
  { path: '/admin-dashboard/form-manager', label: 'Form Manager' },
  { path: '/admin-dashboard/manager-user', label: 'User Manager' },
  { path: '/admin-dashboard/statistic', label: 'Statistic' },
];

function TopNavAdmin() {
  return (
    <div className="topnav-admin">
      <div className="logo">
        <Link to="/admin-dashboard">Admin Dashboard</Link>
      </div>
      <div className="topnav-menu">
        {adminLinks.map((link, index) => (
          <Link key={index} to={link.path}>{link.label}</Link>
        ))}
      </div>
    </div>
  );
}

export default TopNavAdmin;
