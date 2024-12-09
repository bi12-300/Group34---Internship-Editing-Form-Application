import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavAdmin from '../component/Common/TopNav/TopNavAdmin';
import TopNavStudent from '../component/Common/TopNav/TopNavStudent';
import SideBarAdmin from '../component/Common/Sidebar/SideBarAdmin';
import SideBarStudent from '../component/Common/Sidebar/SideBarStudent';
import "./MainLayout.css"

function MainLayout({ role }) {
  

  if (!role) {
    return <div className="unauthorized">Unauthorized: Role not specified.</div>;
  }

  const isAdmin = role === 'Admin';

  return (
    <div className="main-layout">
      {isAdmin ? <TopNavAdmin /> : <TopNavStudent />}
      <div className={`main-content ${isAdmin ? 'admin' : 'student'}`}>
        <div className="sidebar-content-wrapper">
          {isAdmin ? <SideBarAdmin /> : <SideBarStudent />}
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;