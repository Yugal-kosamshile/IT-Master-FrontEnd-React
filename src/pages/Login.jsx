import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 // In your Login.js
const handleSubmit = async (e) => {
  e.preventDefault();

  const adminUsername = "admin";
  const adminPassword = "admin123";

  if (form.username === adminUsername && form.password === adminPassword) {
    localStorage.setItem("isAdmin", "true");
    localStorage.setItem("username", adminUsername);
    setMessage("✅ Admin logged in successfully!");
    navigate("/home"); // navigate to homepage
  } else {
    try {
      const res = await axios.post("http://localhost:8082/api/login", form);
      localStorage.setItem("username", form.username);
      localStorage.removeItem("isAdmin");
      setMessage(res.data);
      navigate("/home"); // navigate to homepage
    } catch (err) {
      setMessage(err.response?.data || "Login failed");
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("username");
    }
  }
};




  return (
    <div className="container mt-5">
      <h2 className="mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded bg-light shadow-sm">
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Enter username"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>

      {message && (
        <div className="alert alert-info mt-3" role="alert">
          {message}
        </div>
      )}
    </div>
  );
}

export default Login;
