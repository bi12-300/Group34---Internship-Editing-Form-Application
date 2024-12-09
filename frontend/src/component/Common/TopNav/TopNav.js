import React from 'react';
import { Link } from 'react-router-dom';
import './TopNav.css';
import logos from './assets/logos.png';
import avatar from './assets/avatar.png';

function TopNav() {
  return (
    <div className="topnav">
      <div className="logo">
        <img src={logos} alt="Logo" className="logo-img" />
      </div>
      <div className="topnav-menu">
        <Link to="/dashboard/home">Home</Link>
        <Link to="/dashboard/document">Document</Link>
        <Link to="/dashboard/information">Information</Link>
        <Link to="/dashboard/setting">Setting</Link>
        <li><Link to="/dashboard/statistics">Statistics</Link></li> {/* Add Statistics link */}
      </div>
      <div className="avatar">
        <img src={avatar} alt="User Avatar" />
      </div>
    </div>
  );
}

export default TopNav;
