import React from 'react';
import { Link } from 'react-router-dom';
import './TopNavStudent.css';
import logos from './assets/logos.png';
import avatar from './assets/avatar.png';

const studentLinks = [
  { path: '/student-dashboard/home', label: 'Home' },
  { path: '/student-dashboard/document', label: 'Document' },
  { path: '/student-dashboard/information', label: 'Information' },
  { path: '/student-dashboard/setting', label: 'Setting' },
];

function TopNavStudent() {
  return (
    <div className="topnav">
      <div className="logo">
        <img src={logos} alt="Logo" className="logo-img" />
      </div>
      <div className="topnav-menu">
        {studentLinks.map((link, index) => (
          <Link key={index} to={link.path}>{link.label}</Link>
        ))}
      </div>
      <div className="avatar">
        <img src={avatar} alt="User Avatar" />
      </div>
    </div>
  );
}

export default TopNavStudent;
