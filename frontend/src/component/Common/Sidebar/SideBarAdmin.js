import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SideBarAdmin.css';

function SideBarAdmin() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(null);
  const [activeSubSection, setActiveSubSection] = useState(null);

  
  const adminSections = {
    userManager: {
      label: 'User Management',
      links: [
        {
          path: '/admin-dashboard/user-manager-supervisor',
          label: 'Supervisors',
          children: [
            { path: '/admin-dashboard/statistics-page', label: 'Statistics' },
            { path: '/admin-dashboard/preview-page', label: 'Preview' },
          ],
        },
        {
          path: '/admin-dashboard/user-manager-student',
          label: 'Students',
          children: [
            { path: '/admin-dashboard/statistics-page', label: 'Statistics' },
            { path: '/admin-dashboard/preview-page', label: 'Preview' },
          ],
        },
      ],
    },
    formManager: {
      label: 'Form Management',
      links: [
        { path: '/admin-dashboard/form-manager', label: 'Form Manager' },
      ],
    },
    settings: {
      label: 'Settings',
      links: [
        { path: '/admin-dashboard/settings', label: 'Admin Settings' },
      ],
    },
  };


  useEffect(() => {
    const currentPath = location.pathname;
    let active = null;
    let subActive = null;

    Object.keys(adminSections).forEach((section) => {
      const sectionLinks = adminSections[section].links;
      sectionLinks.forEach((link) => {
        if (currentPath.startsWith(link.path)) {
          active = section;
        }

       
        if (link.children) {
          link.children.forEach((child) => {
            if (currentPath.startsWith(child.path)) {
              active = section;
              subActive = link.label; 
            }
          });
        }
      });
    });

    setActiveSection(active);
    setActiveSubSection(subActive); 
  }, [location.pathname]);

 
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
    setActiveSubSection(null); 
  };

  const toggleSubSection = (subSection) => {
    setActiveSubSection(activeSubSection === subSection ? null : subSection);
  };

  return (
    <div className="sidebar-admin">
      {Object.keys(adminSections).map((section) => (
        <div key={section}>
          <div
            className={`sidebar-item ${activeSection === section ? 'active' : ''}`}
            onClick={() => toggleSection(section)}
          >
            <span>{adminSections[section].label}</span>
          </div>
          {activeSection === section && (
            <div className="submenu">
              {adminSections[section].links.map((link) => (
                <div key={link.label}>
                  <Link
                    to={link.path}
                    className={location.pathname === link.path ? 'active-link' : ''}
                  >
                    {link.label}
                  </Link>

                  
                  {link.children && (
                    <div className="submenu-children">
                      <div
                        className={`submenu-item ${activeSubSection === link.label ? 'active' : ''}`}
                        onClick={() => toggleSubSection(link.label)}
                      >
                        {link.label}
                      </div>
                      {activeSubSection === link.label && (
                        <div className="submenu-subchildren">
                          {link.children.map((child) => (
                            <Link
                              to={child.path}
                              key={child.label}
                              className={location.pathname === child.path ? 'active-link' : ''}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default SideBarAdmin;
