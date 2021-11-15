import "./Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Spinner } from "../../components/loader/Spinner";
export const Register = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3)
      .max(15)
      .required("Username should be between 3 and 15 characters"),
    email: Yup.string().email().required("Valid email is required"),
    password: Yup.string()
      .min(4)
      .max(20)
      .required("Password should be between 4 to 20 characters long"),
  });
  if (loading) {
    return <Spinner />;
  }
  const handleSubmit = async (data) => {
    try {
      setLoading(true);

      const res = await axios.post(
        "https://omi-gratitude-journal.herokuapp.com/api/auth/register",
        data
      );
      setLoading(false);

      window.location.replace("/login");
    } catch (err) {
      setError(true);
      setLoading(false);
      window.location.replace("/register");
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <Formik
        initialValues={initialValues || ""}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className="registerForm">
          <label>Username</label>
          <ErrorMessage
            name="username"
            component="span"
            style={{ color: "#1E1E01", paddingBottom: "10px" }}
          />

          <Field
            autoComplete="off"
            className="registerInput"
            name="username"
            placeholder="John123..."
          />
          <label>Email</label>
          <ErrorMessage
            name="email"
            component="span"
            style={{ color: "#1E1E01", paddingBottom: "10px" }}
          />
          <Field
            autoComplete="off"
            className="registerInput"
            name="email"
            placeholder="john@gmail.com..."
          />

          <label>Password</label>
          <ErrorMessage
            name="password"
            component="span"
            style={{ color: "#1E1E01", paddingBottom: "10px" }}
          />
          <Field
            autoComplete="off"
            className="registerInput"
            name="password"
            placeholder="Your password..."
          />
          <button className="regButton" type="submit" disabled={loading}>
            <Link className="link" to="/register">
              Register
            </Link>
          </button>
        </Form>
      </Formik>

      <button className="loginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Username or Email already exists
        </span>
      )}
    </div>
  );
};
