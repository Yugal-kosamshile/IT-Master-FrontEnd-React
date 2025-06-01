import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Enrollment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    course: '',
    consent: false
  });

  const serviceID = 'service_q28t8d9';
  const templateID = 'template_wavp705';
  const userID = 'DKHk1eACS7Up_cZgy';

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.consent) {
      alert('You must authorize IT-Master to contact you.');
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      course: formData.course,
      authorization: formData.consent ? 'Yes' : 'No'
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Enrollment submitted successfully!');
        setFormData({
          name: '',
          email: '',
          mobile: '',
          course: '',
          consent: false
        });
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send enrollment. Please try again.');
      });
  };

  return (
    <div className="enrollment my-5 p-4">
      <div className="row align-items-center">
        {/* Heading Section */}
        <div className="col-12 col-lg-6">
          <div className="text-lg-start text-center mb-4 mb-lg-0">
            <h2 className="enrollment-heading">
              <b>Interested to join</b> <br />
              <i>our courses?</i>
            </h2>
            <p className="text-muted mt-2">
              Share your details and we'll get back to you.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="col-12 col-lg-6 bg-light rounded shadow p-4">
          <div className="enrollment-form">
            <form onSubmit={handleSubmit} className="row g-3">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control input-field"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control input-field"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="mobile" className="form-label">Mobile Number</label>
                <input
                  type="tel"
                  className="form-control input-field"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="course" className="form-label">Select Course</label>
                <select
                  id="course"
                  name="course"
                  className="form-select input-field"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select a course</option>
                  <option value="Frontend Development">Frontend Development</option>
                  <option value="Backend Development">Backend Development</option>
                  <option value="Full Stack">Full Stack</option>
                  <option value="Data Science">Data Science</option>
                </select>
              </div>

              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input input-field"
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="consent">
                    I authorize <strong>IT-Master</strong> and its associates to contact me with updates & notifications via email, SMS, WhatsApp, and voice call.
                  </label>
                </div>
              </div>

              <div className="col-12 text-center">
                <button type="submit" className="btn btn-dark px-5 mt-3 fw-bold mb-0">
                  Enroll Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enrollment;
