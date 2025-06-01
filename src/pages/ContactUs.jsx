import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "../styles/ContactUs.css"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      })
      .catch(() => {
        setStatus('Failed to send message, please try again.');
      });
  };

  return (
    <div className="contact-body">
    <div className="contact-container">
      <div className="contact-box">
        <div className="left-panel">
          <h2>Contact us</h2>
          <p className="contact-para">We'd love to hear from you! 
            <br />Feel free to contact us with any questions or feedback.</p>

          <div className="contact-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> Contribute on GitHub
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-discord"></i> Join our community
            </a>
          </div>

          <div className="contact-socials">
            <p>Follow us</p>
            <div className="contact-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin-in"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-whatsapp"></i>
            </div>
          </div>
        </div>

        <form className="contact-right-panel" onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text"  className=" contact-input rounded-pill" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="email"  className="rounded-pill" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <input type="text"  className="rounded-pill" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
            <input type="text"  className="rounded-pill" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
          </div>
          <textarea name="message" placeholder="Type your message here..." value={formData.message} onChange={handleChange} required />
         <br />
          <button type="submit" className=" rounded-pill">Send message</button>
          {status && <p className="status">{status}</p>}
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
