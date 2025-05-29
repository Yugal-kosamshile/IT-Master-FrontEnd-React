import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../store";

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

  console.log("Sending login data:", form); // ✅ Check input

  try {
    const res = await axios.post("http://localhost:8082/api/login", form, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    const user = { username: form.username };
    dispatch(loginSuccess(user)); // ✅ Only runs if login is successful

    localStorage.setItem("username", form.username);
    localStorage.removeItem("isAdmin");
    setMessage(res.data);
    navigate("/home");
  } catch (err) {
    console.error("Login error:", err.response?.data || err.message); // ✅ Log exact error
    setMessage(err.response?.data || "Login failed");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("username");
  }
};


  return (
    <div className="login-page d-flex align-items-center justify-content-center">
      <div className="login-form card p-4 shadow-lg bg-white rounded" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 className="text-center mb-4 text-primary">Login</h2>
        <form onSubmit={handleSubmit}>
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

        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-decoration-none text-success fw-bold">Register Here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
