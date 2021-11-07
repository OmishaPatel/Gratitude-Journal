import "./Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const Register = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [registering, setRegistering] = useState(false);

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
  const handleSubmit = async (data) => {
    try {
      setRegistering(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        data
      );
      setRegistering(false);
      setError(false);
      window.location.replace("/login");
    } catch (err) {
      setError(true);
      window.location.replace("/register");
    }
    // e.preventDefault();
    // let formData = {
    //   username: username,
    //   email: email,
    //   password: password,
    // };
    // const isValid = await validationSchema.isValid(formData);
    // if (isValid) {
    //   setError(false);
    //   try {
    //     const res = await axios.post(
    //       "http://localhost:5000/api/auth/register",
    //       {
    //         username,
    //         email,
    //         password,
    //       }
    //     );
    //     res.data && window.location.replace("/login");
    //   } catch {
    //     setError(true);
    //   }
    // } else {
    //   setError(true);
    // }
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
          {/* <input
          type="text"
          placeholder="Enter your username"
          className="registerInput"
          onChange={(e) => setUsername(e.target.value)}
        /> */}
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
          {/* <input
          type="email"
          placeholder="Enter your email"
          className="registerInput"
          onChange={(e) => setEmail(e.target.value)}
        /> */}
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
          {/* <input
          type="password"
          placeholder="Enter your password"
          className="registerInput"
          onChange={(e) => setPassword(e.target.value)}
        /> */}
          <button className="regButton" type="submit" disabled={registering}>
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
