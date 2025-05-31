import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store";
import "../styles/Login.css"; // Make sure this file contains the styles below

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = form;

    if (username === "Yugalk" && password === "Yugalk#123") {
      const user = { username: "Yugalk", isAdmin: true };
      dispatch(loginSuccess(user));
      localStorage.setItem("username", "Yugalk");
      localStorage.setItem("isAdmin", "true");
      setMessage("Admin login successful");
      navigate("/home");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8082/api/login", form, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const user = { username };
      dispatch(loginSuccess(user));
      localStorage.setItem("username", username);
      localStorage.removeItem("isAdmin");
      setMessage(res.data);
      navigate("/home");
    } catch (err) {
      setMessage(err.response?.data || "Login failed");
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("username");
    }
  };

  return (
  <div className="login-body">
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Sign in</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username" className="login-label">User Name</label>
          <input
            type="text"
            id="username"
            className="login-input"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />

          <label htmlFor="password" className="login-label">Password</label>
          <input
            type="password"
            id="password"
            className="login-input"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="login-button">
            Submit
          </button>
        </form>

        {message && <div className="login-message">{message}</div>}

        <div className="login-footer">
          <span>Don't have an account?</span>{" "}
          <Link to="/register" className="login-link">Register</Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
