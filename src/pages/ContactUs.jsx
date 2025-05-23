import React, { useState } from "react";

const ContactUs = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Here you can handle form submission (e.g., send to API)
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "600px" }}>
            <h2 className="mb-4 text-center">Contact Us</h2>
            {submitted ? (
                <div className="alert alert-success" role="alert">
                    Thank you for contacting us! We will get back to you soon.
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="border p-4 rounded bg-light shadow-sm">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">
                            Message
                        </label>
                        <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            rows="4"
                            value={form.message}
                            onChange={handleChange}
                            required
                            placeholder="Type your message"
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Send Message
                    </button>
                </form>
            )}
        </div>
    );
};

export default ContactUs;