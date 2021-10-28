import "./Login.css";
import { Link } from "react-router-dom";
export const Login = () => {
  // if(Response.data.error) alert(response.data.error) else
  // sessionStorage.setItem("accessToken", response.token.data)
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="loginInput"
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="loginInput"
        />
        <button className="logButton">
          <Link to="/login" className="link">
            Login
          </Link>
        </button>
        <button className="registerButton">
          <Link to="/register" className="link">
            Register
          </Link>
        </button>
      </form>
    </div>
  );
};
