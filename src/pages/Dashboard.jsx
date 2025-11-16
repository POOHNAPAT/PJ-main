import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="dashboard-page">
      {/* Header */}
      <header className="header">
        <div className="logo">EV Charger</div>
        <nav className="nav">
          <a href="/">หน้าแรก</a>
          <a href="/map">แผนที่</a>
          <a href="/reviews">รีวิว</a>
          <a href="#search">ค้นหาสถานีชาร์จทั้งหมดในปัจจุบัน</a>
          <a href="#contact">ติดต่อเรา</a>
          <span className="flag">🇹🇭</span>
          <a href="/dashboard" className="profile-icon">👤</a>
        </nav>
      </header>

      <h1>Profile</h1>
      <div className="user-info">
        <h2>ข้อมูลผู้ใช้</h2>
        <p>นาย xxxx xxxxx</p>
      </div>

      <div className="applications">
        <h2>Applications</h2>
        <div className="app-links">
          <a href="#history">ประวัติการใช้งาน</a>
          <a href="#payment">วิธีการชำระเงิน</a>
        </div>
      </div>

      <div className="actions">
        <button className="add-vehicle">เพิ่มพาหนะ</button>
        <button className="logout" onClick={handleLogout}>Log out</button>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2023 EV Charger. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;
