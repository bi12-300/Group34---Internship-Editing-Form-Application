import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const [activeYear, setActiveYear] = useState(null);

  const documents = {
    active: {
      "2019": ["Proposal", "Giấy xác nhận thực tập", "Hợp đồng với supervisor", "Hợp đồng với công ty"],
      "2020": ["Proposal", "Giấy xác nhận thực tập", "Hợp đồng với supervisor", "Hợp đồng với công ty"],
      "2021": ["Proposal", "Giấy xác nhận thực tập", "Hợp đồng với supervisor", "Hợp đồng với công ty"],
      "2022": ["Proposal", "Giấy xác nhận thực tập", "Hợp đồng với supervisor", "Hợp đồng với công ty"],
      "2023": ["Proposal", "Giấy xác nhận thực tập", "Hợp đồng với supervisor", "Hợp đồng với công ty"],
      "2024": ["Proposal", "Giấy xác nhận thực tập", "Hợp đồng với supervisor", "Hợp đồng với công ty"]
    },
    other: {
      "2019": ["Other document 1", "Other document 2"],
      "2020": ["Other document 1", "Other document 2"],
      "2021": ["Other document 1", "Other document 2"],
      "2022": ["Other document 1", "Other document 2"],
      "2023": ["Other document 1", "Other document 2"],
      "2024": ["Other document 1", "Other document 2"]
    }
  };

  const toggleYear = (year) => {
    setActiveYear(activeYear === year ? null : year);
  };

  return (
    <div className="sidebar">
      
      <div className="section">
        <h3>Giấy tờ đang hoạt động</h3>
        {Object.keys(documents.active).map((year) => (
          <div key={year}>
            <div
              className={`sidebar-item ${activeYear === year ? 'active' : ''}`}
              onClick={() => toggleYear(year)}
            >
              <span>{year}</span>
            </div>
            {activeYear === year && (
              <div className="submenu">
                {documents.active[year].map((doc) => (
                  <Link to={`/documents/${year}/${doc}`} key={doc}>{doc}</Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Section for other documents */}
      <div className="section">
        <h3>Giấy tờ khác</h3>
        {Object.keys(documents.other).map((year) => (
          <div key={year}>
            <div
              className={`sidebar-item ${activeYear === year ? 'active' : ''}`}
              onClick={() => toggleYear(year)}
            >
              <span>{year}</span>
            </div>
            {activeYear === year && (
              <div className="submenu">
                {documents.other[year].map((doc) => (
                  <Link to={`/documents/${year}/${doc}`} key={doc}>{doc}</Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
