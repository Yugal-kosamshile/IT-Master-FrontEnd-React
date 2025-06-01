import React, { useState } from 'react';
import axios from 'axios';

const SearchCourse = ({ onResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => setSearchTerm(e.target.value);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) {
      onResults([], 'Please enter a course title to search.');
      return;
    }

    try {
      const res = await axios.get('https://backend-rest-faqo.onrender.com/api/get-course', {
        params: { title: searchTerm }
      });

      if (res.data && res.data.length > 0) {
        onResults(res.data, '');
      } else {
        onResults([], 'No matching courses found.');
      }
    } catch (error) {
      console.error("Search error:", error);
      onResults([], 'Course not found or server error.');
    }
  };

  return (
    <form onSubmit={handleSearch} className="d-flex">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Search course..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit" className="btn btn-primary">Search</button>
    </form>
  );
};

export default SearchCourse;
