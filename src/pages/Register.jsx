import "./Register.css";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-box">

        {/* ซ้าย — แบบฟอร์ม */}
        <div className="auth-side form-side">
          <h1>Sign up</h1>

          <input type="text" placeholder="ชื่อ" />
          <input type="text" placeholder="นามสกุล" />
          <input type="text" placeholder="เบอร์โทรศัพท์" />
          <input type="email" placeholder="อีเมล" />

          <button className="login-btn">ต่อไป</button>

          <div className="social">
            <div className="icons">
              <span className="facebook">f</span>
              <span className="google">G</span>
            </div>
          </div>
        </div>

        {/* ขวา — Welcome */}
        <div className="auth-side blue-side">
          <h2>Hello, Welcome!</h2>
          <p>เข้าสู่ระบบ</p>
          <button className="switch-btn" onClick={() => navigate('/')}>Log in</button>
        </div>

      </div>
    </div>
  );
}

export default Register;
