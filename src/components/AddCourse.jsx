import React, { useState } from 'react';
import axios from 'axios';

const AddCourse = () => {
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
      const response = await axios.post('http://localhost:8082/api/add-course', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setMessage('✅ Course added successfully!');
      setFormData({
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
    } catch (error) {
      console.error(error);
      setMessage('❌ Error adding course: ' + error.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Course</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="p-2 border rounded" required />
        <input type="text" name="subtitle" placeholder="Subtitle" value={formData.subtitle} onChange={handleChange} className="p-2 border rounded" required />
        <textarea name="short_description" placeholder="Short Description" value={formData.short_description} onChange={handleChange} className="p-2 border rounded" required />
        <input type="text" name="created_by" placeholder="Created By" value={formData.created_by} onChange={handleChange} className="p-2 border rounded" required />
        <input type="text" name="language" placeholder="Language" value={formData.language} onChange={handleChange} className="p-2 border rounded" required />
        <input type="number" step="0.01" name="rating" placeholder="Rating" value={formData.rating} onChange={handleChange} className="p-2 border rounded" required />
        <input type="number" name="students" placeholder="Students" value={formData.students} onChange={handleChange} className="p-2 border rounded" required />
        <label className="text-sm font-medium">Start Date:</label>
        <input type="date" name="start_date" value={formData.start_date} onChange={handleChange} className="p-2 border rounded" required />
        <label className="text-sm font-medium">End Date:</label>
        <input type="date" name="end_date" value={formData.end_date} onChange={handleChange} className="p-2 border rounded" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Course</button>
      </form>
      {message && <p className="mt-4 text-center text-sm text-red-600">{message}</p>}
    </div>
  );
};

export default AddCourse;
