// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ isLoggedIn }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-links">
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
