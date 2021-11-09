import "./Login.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";
import { useContext, useRef, useState } from "react";
export const Login = () => {
  const [error, setError] = useState(false);

  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "https://omi-gratitude-journal.herokuapp.com/api/auth/login",
        {
          username: userRef.current.value,
          password: passwordRef.current.value,
        }
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      window.location.replace("/");
    } catch (err) {
      setError(true);
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          className="loginInput"
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="loginInput"
          ref={passwordRef}
        />
        <button className="logButton" type="submit" disabled={isFetching}>
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
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Wrong Username or Email
        </span>
      )}
    </div>
  );
};
