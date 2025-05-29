import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
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

  const { username, password } = form;

  // Hardcoded admin check
  if (username === "yugal" && password === "yugal@123") {
    const user = { username: "yugal", isAdmin: true };
    dispatch(loginSuccess(user));

    localStorage.setItem("username", "yugal");
    localStorage.setItem("isAdmin", "true");
    setMessage("Admin login successful");
    navigate("/home");
    return;
  }

  // Normal login flow for other users
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
    <div className="container-fluid login-wrapper d-flex align-items-center justify-content-center min-vh-80 py-5">
      <div className="row login-box shadow">
        {/* Left - Image */}
        <div className="col-md-6 login-image d-none d-md-block"></div>

        {/* Right - Login Form */}
        <div className="col-md-6 form-section p-5 bg-white">
          <h2 className="mb-3 text-success fw-bold ">Welcome back</h2>
          <p className="mb-4 text-muted">Please log in and connect with us</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
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
            <button type="submit" className="btn btn-success w-100 login-btn">
              Login
            </button>
          </form>

          {message && (
            <div className="alert alert-info mt-3 text-center" role="alert">
              {message}
            </div>
          )}

          <p className="mt-4 text-center">
            Don’t have an account?{" "}
            <Link to="/register" className="text-success fw-bold text-decoration-none">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
