import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_q28t8d9';
    const templateID = 'template_ixlbeyd';
    const userID = 'DKHk1eACS7Up_cZgy';

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus('Failed to send message, please try again.');
      });
  };

  return (
  <div className="container d-flex justify-content-center my-5">
    <div className="row shadow rounded overflow-hidden contact-wrapper" style={{ maxWidth: '900px', width: '100%' }}>
      {/* Left: Image */}
      <div className="col-md-6 p-0">
        <img
          src="https://i.pinimg.com/736x/1c/91/3b/1c913bec30da32ac131339c88658592d.jpg"
          alt="Contact"
          className="img-fluid object-fit-cover contact-image"
        />
      </div>

      {/* Right: Form */}
      <div className="col-md-6 bg-white p-4">
        <h2 className="text-center text-success mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea
              className="form-control"
              name="message"
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-success">Send Message</button>
          </div>
        </form>
        {status && (
          <div className={`alert mt-4 ${status.includes('successfully') ? 'alert-success' : 'alert-danger'}`} role="alert">
            {status}
          </div>
        )}
      </div>
    </div>
  </div>
);

};

export default ContactUs;
