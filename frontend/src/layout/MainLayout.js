import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../component/Common/Sidebar/SideBar';
import TopNavbar from '../component/Common/TopNav/TopNav';
import './MainLayout.css'; 

function MainLayout() {
    return (
      <div className="main-layout">
        <TopNavbar /> 
        <div className="layout-content">
          <Sidebar /> 
          <div className="content">
            <Outlet /> 
          </div>
        </div>
      </div>
    );
  }

export default MainLayout;
