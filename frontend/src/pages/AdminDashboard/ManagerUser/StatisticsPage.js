import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";
import "./StatisticsPage.css";

const StatisticsPage = () => {
  
  const facultyData = {
    labels: ["ICT", "DS", "CS"],
    datasets: [
      {
        label: "Number of Students",
        data: [120, 80, 100], 
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const locationData = {
    labels: ["Domestic", "Abroad"],
    datasets: [
      {
        data: [250, 50],
        backgroundColor: ["#4BC0C0", "#FF9F40"],
      },
    ],
  };

  const internshipData = {
    labels: ["Company", "Laboratory"],
    datasets: [
      {
        data: [200, 100], 
        backgroundColor: ["#9966FF", "#FF6384"],
      },
    ],
  };

  const waveData = {
    labels: ["Wave 1", "Wave 2"],
    datasets: [
      {
        data: [700, 500], 
        backgroundColor: ["#FF8C00", "#FF6347"],
      },
    ],
  };

  const validationData = {
    labels: ["Valid", "Invalid"],
    datasets: [
      {
        data: [900, 300], 
        backgroundColor: ["#36A2EB", "#FF9F40"],
      },
    ],
  };

  return (
    <div className="statistics-page">
      <header className="statistic-header">
        <h1>Internship Statistics</h1>
        <p>Overview of student internship distribution</p>
      </header>

      
      <div className="statistic-table">
        <h2>Students by Faculty</h2>
        <div className="chart-container horizontal-bar">
          <Bar
            data={facultyData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              indexAxis: "y", 
            }}
          />
        </div>
        <div className="table-footer">
          <p>Total Students: 300</p>
        </div>
        <p className="table-note">Data includes ICT, DS, and CS faculties.</p>
      </div>

      
      <div className="statistic-charts">
        
        <div className="chart-container">
          <div className="chart-title">Internship Waves</div>
          <Pie
            data={waveData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
          <div className="chart-note">Number of students in Wave 1 vs Wave 2</div>
        </div>

        
        <div className="chart-container">
          <div className="chart-title">Validation Status</div>
          <Pie
            data={validationData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
          <div className="chart-note">Valid vs Invalid students</div>
        </div>

        
        <div className="chart-container">
          <div className="chart-title">Students by Location</div>
          <Pie
            data={locationData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
          <div className="chart-note">Domestic vs Abroad internships</div>
        </div>

        
        <div className="chart-container">
          <div className="chart-title">Internship Type</div>
          <Pie
            data={internshipData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
          <div className="chart-note">Company vs Laboratory internships</div>
        </div>
      </div>

      
      <div className="button-container">
        <button className="back-button" onClick={() => window.history.back()}>
          Back
        </button>
      </div>
    </div>
  );
};

export default StatisticsPage;
