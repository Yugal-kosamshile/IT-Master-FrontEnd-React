import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8082/api/login", form);
      setMessage(res.data);
    } catch (err) {
      setMessage(err.response.data || "Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" value={form.username} onChange={handleChange} placeholder="Username" required />
        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Login;
