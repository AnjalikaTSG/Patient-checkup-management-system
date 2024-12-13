import React from 'react';
import './Dashboard.css';
import DahCard from './DahCard';

export default function Dashboard() {
  const cardData = [
    { icon: <FaUserMd />, count: 54, title: 'Doctor' },
    { icon: <FaUserNurse />, count: 152, title: 'Nurse' },
    { icon: <FaCapsules />, count: 50, title: 'Pharmacist' },
    { icon: <FaUser />, count: 2542, title: 'Patient' },
    { icon: <FaFlask />, count: 42, title: 'Laboratorist' },
  ];
  
  return (
    <div className="dashboard-container">
      {/* Left Sidebar */}
      <div className="left-side">
        <h1>Base Hospital - Awissawella</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#patient-registration">Patient Registration</a></li>
          <li><a href="#book-issurance">Book Issurance</a></li>
          <li><a href="#patient-records">Patient Records</a></li>
          <li><a href="#reports-&-alerts">Reports & Alerts</a></li>
          <li><a href="#departments">Departments/Clinics</a></li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="right-side">
        <h2>Welcome to the Patient checkup management system</h2>
        <p>Select an option from the navigation menu on the left.</p>
      </div>
    </div>
  );
}
