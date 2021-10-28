import "./Register.css";
import { Link } from "react-router-dom";
export const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          className="registerInput"
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="registerInput"
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="registerInput"
        />
        <button className="regButton">
          <Link className="link" to="/register">
            Register
          </Link>
        </button>
        <button className="loginButton">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
      </form>
    </div>
  );
};
