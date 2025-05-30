import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/AddCourse.css';

function AddCourse() {
  const [course, setCourse] = useState({
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
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourse((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imageFile", image);
    formData.append(
      "course",
      new Blob([JSON.stringify(course)], { type: "application/json" })
    );

    try {
      await axios.post('http://localhost:8082/api/add-course', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
        .then((response) => {
          console.log("Course added successfully:", response.data);
          alert("✅ Course added successfully");
        })
        .catch((error) => {
          console.error("Error adding course:", error);
          alert("❌ Error adding course");
        });

    } catch (error) {
      console.error(error);
      setMessage('❌ Error adding course: ' + error.message);
    }

    navigate("/courses");
  };

  return (
    <div className="add-course-wrapper py-5">
      <div className="custom-container my-4">
        <div className="card course-card shadow-lg text-white">
          <div className="card-body">
            <h2 className="card-title text-center mb-4 text-success">🌿 Add New Course</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Course Title</label>
                <input type="text" className="form-control" name="title" value={course.title} onChange={handleInputChange} required />
              </div>

              <div className="mb-3">
                <label className="form-label">Subtitle</label>
                <input type="text" className="form-control" name="subtitle" value={course.subtitle} onChange={handleInputChange} required />
              </div>

              <div className="mb-3">
                <label className="form-label">Short Description</label>
                <textarea className="form-control" name="short_description" value={course.short_description} onChange={handleInputChange} rows="3" required></textarea>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Created By</label>
                  <input type="text" className="form-control" name="created_by" value={course.created_by} onChange={handleInputChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Language</label>
                  <input type="text" className="form-control" name="language" value={course.language} onChange={handleInputChange} required />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Rating</label>
                  <input type="number" step="0.01" className="form-control" name="rating" value={course.rating} onChange={handleInputChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Enrolled Students</label>
                  <input type="number" className="form-control" name="students" value={course.students} onChange={handleInputChange} required />
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-6">
                  <label className="form-label">Start Date</label>
                  <input type="date" className="form-control" name="start_date" value={course.start_date} onChange={handleInputChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">End Date</label>
                  <input type="date" className="form-control" name="end_date" value={course.end_date} onChange={handleInputChange} required />
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label">Course Image</label>
                <input className="form-control" type="file" onChange={handleImageChange} />
              </div>

              <button type="submit" className="btn btn-success w-100 fw-bold">Add Course</button>
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
}

export default AddCourse;
