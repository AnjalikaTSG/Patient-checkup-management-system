import React from 'react';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Left Sidebar */}
      <div className="left-side">
        <h1>Patient Management</h1>
        <ul>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#patient-registration">Patient Registration</a></li>
          <li><a href="#appointments">Appointments</a></li>
          <li><a href="#reports">Reports</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="right-side">
        <h2>Welcome to the Dashboard</h2>
        <p>Select an option from the navigation menu on the left.</p>
      </div>
    </div>
  );
}
