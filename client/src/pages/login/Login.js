import "./Login.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";
import { useContext, useRef, useState } from "react";
import { Spinner } from "../../components/loader/Spinner";
export const Login = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
      setLoading(false);
      window.location.replace("/");
    } catch (err) {
      setError(true);
      setLoading(false);
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  if (loading) {
    return <Spinner />;
  }
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
