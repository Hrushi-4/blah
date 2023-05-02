import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = ({ currentUser }) => {
  const [activeTab, setActiveTab] = useState("calendar");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Welcome, {currentUser.name}!</h2>
        <p>Your unique ID: {currentUser.id}</p>
        <button className="logout-button">Logout</button>
      </div>
      <div className="dashboard-tabs">
        <div
          className={`dashboard-tab ${
            activeTab === "calendar" ? "active" : ""
          }`}
          onClick={() => handleTabChange("calendar")}
        >
          Calendar
        </div>
        <div
          className={`dashboard-tab ${
            activeTab === "schedule" ? "active" : ""
          }`}
          onClick={() => handleTabChange("schedule")}
        >
          Schedule
        </div>
      </div>
      <div className="dashboard-content">
        {activeTab === "calendar" && (
          <div className="calendar-preview">
            <h3>Calendar Preview</h3>
            {/* Render the calendar preview here */}
          </div>
        )}
        {activeTab === "schedule" && (
          <div className="schedule-preview">
            <h3>Schedule Preview</h3>
            {/* Render the schedule preview here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
