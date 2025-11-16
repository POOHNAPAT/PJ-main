import React from 'react';
import './Map.css';

function Map() {
  return (
    <div className="map-page">
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

      <div className="map-container">
        {/* Placeholder for map */}
        <div className="map-placeholder">
          <p>แผนที่จะแสดงที่นี่</p>
          <p>ใช้ Google Maps API หรือ Leaflet เพื่อแสดงสถานีชาร์จ</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <button className="charger-type">AC Charger</button>
          <button className="charger-type">DC Fast Charger</button>
        </div>
      </footer>
    </div>
  );
}

export default Map;
