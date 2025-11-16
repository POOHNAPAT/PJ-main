import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Welcome to the EV Charger App Dashboard</h1>
      <p>You are now logged in!</p>
      <div className="dashboard-content">
        <div className="card">
          <h2>Find Chargers</h2>
          <p>Locate nearby EV charging stations.</p>
        </div>
        <div className="card">
          <h2>My Bookings</h2>
          <p>View and manage your charging reservations.</p>
        </div>
        <div className="card">
          <h2>Account Settings</h2>
          <p>Update your profile and preferences.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
