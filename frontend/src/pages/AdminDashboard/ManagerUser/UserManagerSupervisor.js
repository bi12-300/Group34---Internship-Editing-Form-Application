import React from "react";
import "./UserManagerSupervisor.css";

function UserManagerSupervisor() {
  const supervisors = [
    {
      id: 1,
      name: "Pham Minh Tuan",
      unit: "USTH",
      email: "tuan.pham@usth.edu.vn",
      phone: "0123456789",
      students: [
        { name: "Nguyen Thi Mai", studentId: "2021001", major: "ICT", topic: "AI Research" },
        { name: "Le Hoang Nam", studentId: "2021002", major: "DS", topic: "Data Analysis" },
      ],
    },
    {
      id: 2,
      name: "Nguyen Thi Lan",
      unit: "Company",
      email: "lan.nguyen@company.com",
      phone: "0987654321",
      students: [
        { name: "Tran Thi Lan", studentId: "2021003", major: "CS", topic: "Web Development" },
      ],
    },
  ];

  return (
    <div className="user-manager-supervisor">
      {supervisors.map((supervisor) => (
        <div key={supervisor.id} className="supervisor-card">
          <div className="supervisor-details">
            <img
              src={`https://via.placeholder.com/150?text=${supervisor.name.split(" ")[0]}`}
              alt={supervisor.name}
              className="supervisor-photo"
            />
            <div className="supervisor-info">
              <h3>{supervisor.name}</h3>
              <p>Unit: {supervisor.unit}</p>
              <p>Email: {supervisor.email}</p>
              <p>Phone: {supervisor.phone}</p>
            </div>
          </div>
          <div className="students-list">
            <h4>Students:</h4>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>ID</th>
                  <th>Major</th>
                  <th>Topic</th>
                </tr>
              </thead>
              <tbody>
                {supervisor.students.map((student, index) => (
                  <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.studentId}</td>
                    <td>{student.major}</td>
                    <td>{student.topic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserManagerSupervisor;
