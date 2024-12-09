import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserManager.css";

function UserManager() {
  const navigate = useNavigate();

  return (
    <div className="user-manager-root">
      <div className="card-container">
        <div className="card" onClick={() => navigate("/admin-dashboard/user-manager-student")}>
          <h2>Student</h2>
          <p>Manage students, view statistics, and preview their information.</p>
        </div>
        <div className="card" onClick={() => navigate("/admin-dashboard/user-manager-supervisor")}>
          <h2>Supervisor</h2>
          <p>Manage supervisors, view their details, and assigned students.</p>
        </div>
      </div>
    </div>
  );
}

export default UserManager;
