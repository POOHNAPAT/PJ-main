import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/');
  };

  return (
    <div className="auth-container">
      <div className="auth-box">

        {/* ซ้าย — Welcome */}
        <div className="auth-side blue-side">
          <h2>Hello, Welcome!</h2>
          <p>เข้าสู่ระบบ</p>
          <Link to="/register">
            <button className="switch-btn">Sign up</button>
          </Link>
        </div>

        {/* ขวา — Login form */}
        <div className="auth-side form-side">
          <h1>Log in</h1>

          <input type="text" placeholder="User / Email" />
          <input type="password" placeholder="Password" />

          <button className="login-btn" onClick={handleLogin}>Log in</button>

          <p className="forgot">Forgot Password?</p>

          <div className="social">
            <div className="icons">
              <span className="facebook">f</span>
              <span className="google">G</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
