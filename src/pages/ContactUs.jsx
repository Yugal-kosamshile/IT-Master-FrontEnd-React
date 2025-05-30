// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [status, setStatus] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const serviceID = 'service_q28t8d9';
//     const templateID = 'template_ixlbeyd';
//     const userID = 'DKHk1eACS7Up_cZgy';

//     emailjs
//       .send(serviceID, templateID, formData, userID)
//       .then(() => {
//         setStatus('Message sent successfully!');
//         setFormData({ name: '', email: '', message: '' });
//       })
//       .catch(() => {
//         setStatus('Failed to send message, please try again.');
//       });
//   };

//   return (
//   <div className="container d-flex justify-content-center my-5">
//     <div className="row shadow rounded overflow-hidden contact-wrapper" style={{ maxWidth: '900px', width: '100%' }}>
//       {/* Left: Image */}
//       <div className="col-md-6 p-0">
//         <img
//           src="https://i.pinimg.com/736x/1c/91/3b/1c913bec30da32ac131339c88658592d.jpg"
//           alt="Contact"
//           className="img-fluid object-fit-cover contact-image"
//         />
//       </div>

//       {/* Right: Form */}
//       <div className="col-md-6 bg-white p-4">
//         <h2 className="text-center text-success mb-4">Contact Us</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">Your Name</label>
//             <input
//               type="text"
//               className="form-control"
//               name="name"
//               id="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               placeholder="John Doe"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">Your Email</label>
//             <input
//               type="email"
//               className="form-control"
//               name="email"
//               id="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               placeholder="john@example.com"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="message" className="form-label">Your Message</label>
//             <textarea
//               className="form-control"
//               name="message"
//               id="message"
//               rows="5"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               placeholder="Type your message here..."
//             ></textarea>
//           </div>
//           <div className="d-grid">
//             <button type="submit" className="btn btn-success">Send Message</button>
//           </div>
//         </form>
//         {status && (
//           <div className={`alert mt-4 ${status.includes('successfully') ? 'alert-success' : 'alert-danger'}`} role="alert">
//             {status}
//           </div>
//         )}
//       </div>
//     </div>
//   </div>
// );

// };

// export default ContactUs;

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
    <div className="contact-container">
      <div className="contact-box">
        <div className="left-panel">
          <h2>Contact us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet diam in est pharetra porttitor libero netus nulla tempor cont.</p>

          <div className="links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> Contribute on GitHub
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-discord"></i> Join our community
            </a>
          </div>

          <div className="socials">
            <p>Follow us</p>
            <div className="icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin-in"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-whatsapp"></i>
            </div>
          </div>
        </div>

        <form className="right-panel" onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text"  className="rounded-pill" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="email"  className="rounded-pill" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <input type="text"  className="rounded-pill" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
            <input type="text"  className="rounded-pill" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
          </div>
          <textarea name="message" placeholder="Type your message here..." value={formData.message} onChange={handleChange} required />
         <br />
          <button type="submit" className="rounded-pill">Send message</button>
          {status && <p className="status">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
