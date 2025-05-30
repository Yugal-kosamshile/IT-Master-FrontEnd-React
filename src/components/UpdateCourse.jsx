import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateCourse = () => {
  const { id } = useParams(); // extract course ID from URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    short_description: '',
    created_by: '',
    language: '',
    rating: '',
    students: '',
    start_date: '',
    end_date: ''
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch existing course details by ID
    axios.get(`http://localhost:8082/api/get-course/${id}`)
      .then(res => {
        setFormData(res.data);
      })
      .catch(err => {
        console.error(err);
        setMessage('❌ Error fetching course data');
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8082/api/update/${id}`, formData, {
        headers: { 'Content-Type': 'application/json' }
      });
      setMessage('✅ Course updated successfully!');
      setTimeout(() => navigate('/home'), 1000); 
    } catch (error) {
      console.error(error);
      setMessage('❌ Error updating course: ' + error.message);
    }
  };

  return (
    <div className="update-course-container">
      <div className="custom-container my-5">
        <div className="card course-card shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-center mb-4 text-primary">✏️ Update Course</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Course Title</label>
                <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} required />
              </div>

              <div className="mb-3">
                <label className="form-label">Subtitle</label>
                <input type="text" className="form-control" name="subtitle" value={formData.subtitle} onChange={handleChange} required />
              </div>

              <div className="mb-3">
                <label className="form-label">Short Description</label>
                <textarea className="form-control" name="short_description" value={formData.short_description} onChange={handleChange} rows="3" required></textarea>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Created By</label>
                  <input type="text" className="form-control" name="created_by" value={formData.created_by} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Language</label>
                  <input type="text" className="form-control" name="language" value={formData.language} onChange={handleChange} required />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Rating</label>
                  <input type="number" step="0.01" className="form-control" name="rating" value={formData.rating} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Enrolled Students</label>
                  <input type="number" className="form-control" name="students" value={formData.students} onChange={handleChange} required />
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-6">
                  <label className="form-label">Start Date</label>
                  <input type="date" className="form-control" name="start_date" value={formData.start_date} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">End Date</label>
                  <input type="date" className="form-control" name="end_date" value={formData.end_date} onChange={handleChange} required />
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-100 fw-bold">Update Course</button>
            </form>

            {message && (
              <div className={`alert mt-4 text-center ${message.startsWith('✅') ? 'alert-success' : 'alert-danger'}`} role="alert">
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCourse;
