import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";

function Register() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    const requestData = {
      username: form.name,
      mobile: form.mobile,
      email: form.email,
      password: form.password
    };

    try {
      const res = await axios.post("http://localhost:8082/api/register", requestData, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      setMessage(res.data.message || "Registration successful");
      setForm({
        name: "",
        mobile: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
      navigate("/login");

    } catch (error) {
      if (error.response?.status === 409) {
        setMessage("Username already exists. Please choose a different one.");
      } else {
        setMessage(error.response?.data?.message || "Registration failed.");
      }
    }
  };

  return (
    <div className="container-fluid  register-wrapper d-flex align-items-center justify-content-center min-vh-100">
      <div className="row my-5 register-box shadow-lg">

        {/* Left - Form Section */}
        <div className="col-md-6 form-section p-5">
          <h3 className="mb-4">Create your account</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
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
                placeholder="Password"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="form-check mb-4">
              <input className="form-check-input" type="checkbox" required />
              <label className="form-check-label ms-2">
                I accept all terms & conditions
              </label>
            </div>
            <button type="submit" className="btn register-btn w-100">
              Register Now
            </button>
          </form>
          <p className="mt-3 text-center">
            Already have an account?{" "}
            <a href="/login" className="text-success fw-bold text-decoration-none">
              Login now
            </a>
          </p>
          {message && (
            <div className="alert mt-3 text-center" role="alert">
              {message}
            </div>
          )}
        </div>

        {/* Right - Quote Section */}
        <div className="col-md-6 slogan-section">
          <h1 className="slogan-text">
            “An investment in knowledge pays the best interest.”<br />– Benjamin Franklin
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Register;
