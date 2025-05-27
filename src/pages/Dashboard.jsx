import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchMyCourses = async () => {
      try {
        const res = await axios.get('http://localhost:8082/api/my-course');
        setCourses(res.data);
      } catch (err) {
        console.error('Error fetching enrolled courses:', err);
      }
    };

    fetchMyCourses();
  }, []);

  if (courses.length === 0) {
    return <div className="text-center mt-5">No enrolled courses yet.</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">My Enrolled Courses</h2>
      <div className="row">
        {courses.map(course => (
          <div key={course.id} className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.subtitle}</p>
                <p className="text-muted small">Instructor: {course.created_by}</p>
                <Link to={`/course/${course.id}`} className="btn btn-outline-primary">
                  View Details
                </Link>
              </div>
              <div className="card-footer text-muted">
                {course.start_date} → {course.end_date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
