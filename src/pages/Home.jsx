import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Header */}
      <header className="header">
        <div className="logo">EV Charger</div>
        <nav className="nav">
          <a href="#home">หน้าแรก</a>
          <Link to="/map">แผนที่</Link>
          <Link to="/reviews">รีวิว</Link>
          <a href="#search">ค้นหาสถานีชาร์จทั้งหมดในปัจจุบัน</a>
          <a href="#contact">ติดต่อเรา</a>
          <span className="flag">🇹🇭</span>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>จองจุดชาร์จรถไฟฟ้า</h1>
        <h2>Ev Charger</h2>
        <div className="search-bar">
          <input type="text" placeholder="ค้นหาสถานีชาร์จทั้งหมดในปัจจุบัน" />
          <button>จองจุดชาร์จ</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>ทำไมต้องจองกับเรา</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>จองล่วงหน้า</h3>
            <p>จองได้ 24 ชั่วโมง ไม่ต้องกังวลเรื่องที่ว่าง</p>
          </div>
          <div className="card">
            <h3>รายงานการใช้งาน</h3>
            <p>ดูสถิติการชาร์จ ค่าใช้จ่าย และข้อมูลสถานีชาร์จได้</p>
          </div>
          <div className="card">
            <h3>รองรับทุกรุ่นรถ</h3>
            <p>รองรับปลั๊กชาร์จทุกมาตรฐาน<br />CCS2, CHAdeMO, Type 2 และ Tesla</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
