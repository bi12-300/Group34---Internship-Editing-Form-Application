import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SideBarStudent.css';

function SideBarStudent() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(null);


  const studentSections = {
    dashboard: {
      label: 'Dashboard',
      links: [
        { path: '/student-dashboard/home', label: 'Home' },
        { path: '/student-dashboard/document-edit/1', label: 'Document Edit' },
      ],
    },
    documents: {
      label: 'Documents',
      links: [
        { path: '/student-dashboard/document', label: 'Document Manager' },
      ],
    },
    profile: {
      label: 'Information',
      links: [
        { path: '/student-dashboard/information', label: 'Personal Information' },
        { path: '/student-dashboard/student-detail', label: 'Student Detail' },
        { path: '/student-dashboard/internal-detail', label: 'Internal Supervisor Detail' },
        { path: '/student-dashboard/external-detail', label: 'External Supervisor Detail' },
        { path: '/student-dashboard/company-detail', label: 'Company Detail' },
      ],
    },
    setting: {
      label: 'Settings',
      links: [
        { path: '/student-dashboard/personal-info', label: 'Personal Info' },
        { path: '/student-dashboard/setting/update-info', label: 'Update Info' },
      ],
    },
  };

 
  useEffect(() => {
    const currentPath = location.pathname;
    let active = null;

    Object.keys(studentSections).forEach((section) => {
      const sectionLinks = studentSections[section].links;
      sectionLinks.forEach((link) => {
        if (currentPath.startsWith(link.path)) {
          active = section;
        }
      });
    });

    setActiveSection(active);
  }, [location.pathname]);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="sidebar-student">
      {Object.keys(studentSections).map((section) => (
        <div key={section}>
          <div
            className={`sidebar-item ${activeSection === section ? 'active' : ''}`}
            onClick={() => toggleSection(section)}
          >
            <span>{studentSections[section].label}</span>
          </div>
          {activeSection === section && (
            <div className="submenu">
              {studentSections[section].links.map((link) => (
                <Link
                  to={link.path}
                  key={link.label}
                  className={location.pathname === link.path ? 'active-link' : ''}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default SideBarStudent;
