import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserManagerStudent.css";

function UserManagerStudent() {
  const navigate = useNavigate();

  
  const dummyData = [
    { id: 1, name: "Nguyen A", dob: "2000-01-01", major: "Computer Science", unit: "Company", year: "2020", location: "Hanoi", phone: "0123456789", topic: "AI" },
    { id: 2, name: "Tran B", dob: "1999-02-02", major: "Mechanical Engineering", unit: "Lab", year: "2021", location: "HCM", phone: "0987654321", topic: "Robotics" },
    { id: 3, name: "Le C", dob: "1998-03-03", major: "Electrical Engineering", unit: "Company", year: "2020", location: "Hanoi", phone: "0112233445", topic: "Power Systems" },
    
  ];

  
  const [filters, setFilters] = useState({
    name: "",
    major: "",
    unit: "",
    year: "",
    location: "",
    phone: "",
    topic: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  
  const filteredData = dummyData.filter((student) => {
    return (
      student.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      student.major.toLowerCase().includes(filters.major.toLowerCase()) &&
      student.unit.toLowerCase().includes(filters.unit.toLowerCase()) &&
      student.year.toLowerCase().includes(filters.year.toLowerCase()) &&
      student.location.toLowerCase().includes(filters.location.toLowerCase()) &&
      student.phone.toLowerCase().includes(filters.phone.toLowerCase()) &&
      student.topic.toLowerCase().includes(filters.topic.toLowerCase())
    );
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleEditClick = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
    setCurrentPage(1); 
  };


  const handleNavigateToPreview = () => {
    navigate("/admin-dashboard/preview-page");
  };

  const handleNavigateToStatistics = () => {
    navigate("/admin-dashboard/statistics-page");
  };

  return (
    <div className="user-manager-student">
      <div className="top-actions">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by name"
            value={filters.name}
            onChange={handleFilterChange}
            name="name"
          />
          <input
            type="text"
            placeholder="Search by phone"
            value={filters.phone}
            onChange={handleFilterChange}
            name="phone"
          />
        </div>
        <div className="filter-actions">
          <input
            type="text"
            placeholder="Major"
            value={filters.major}
            onChange={handleFilterChange}
            name="major"
          />
          <input
            type="text"
            placeholder="Unit (Company or Lab)"
            value={filters.unit}
            onChange={handleFilterChange}
            name="unit"
          />
          <input
            type="text"
            placeholder="Year"
            value={filters.year}
            onChange={handleFilterChange}
            name="year"
          />
          <input
            type="text"
            placeholder="Location"
            value={filters.location}
            onChange={handleFilterChange}
            name="location"
          />
          <input
            type="text"
            placeholder="Topic"
            value={filters.topic}
            onChange={handleFilterChange}
            name="topic"
          />
        </div>
      </div>

      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Major</th>
            <th>Unit</th>
            <th>Year</th>
            <th>Location</th>
            <th>Phone</th>
            <th>Topic</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.dob}</td>
              <td>{student.major}</td>
              <td>{student.unit}</td>
              <td>{student.year}</td>
              <td>{student.location}</td>
              <td>{student.phone}</td>
              <td>{student.topic}</td>
              <td>
                <button onClick={() => handleEditClick(student.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? "active" : ""}
            onClick={() => handlePageClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>

      
      <div className="navigation-buttons">
        <button onClick={handleNavigateToPreview}>Preview</button>
        <button onClick={handleNavigateToStatistics}>Statistics</button>
      </div>
    </div>
  );
}

export default UserManagerStudent;
