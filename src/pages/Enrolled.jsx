import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function MyCourses() {
  const [courses, setCourses] = useState([]);

  const fetchMyCourses = async () => {
    try {
      const res = await axios.get('http://localhost:7878/api/my-courses');
      setCourses(res.data);
    } catch (err) {
      console.error('Error fetching enrolled courses:', err);
    }
  };

  useEffect(() => {
    fetchMyCourses();
  }, []);

  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:7878/api/my-courses/${id}`);
      setCourses(prev => prev.filter(course => course.id !== id));
    } catch (err) {
      console.error('Error removing course:', err);
    }
  };

  if (courses.length === 0) {
    return <div className="text-center mt-5"><h4>No courses enrolled yet.</h4></div>;
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4">My Enrolled Courses</h2>
      <div className="row">
        {courses.map((course) => (
          <div key={course.id} className="col-md-4 mb-4">
            <div className="card h-100">
              {course.image && (
                <img
                  src={course.image}
                  className="card-img-top"
                  alt={course.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              )}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.short_description}</p>
                <Link to={`/course/${course.id}`} className="btn btn-primary mb-2">
                  View Details
                </Link>
                <button className="btn btn-danger" onClick={() => handleRemove(course.id)}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyCourses;
