import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8082/api/register", form);
      setMessage(res.data);
    } catch (err) {
      setMessage(err.response.data);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" value={form.username} onChange={handleChange} placeholder="Username" required />
        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Register;
