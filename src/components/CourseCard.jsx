import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

function CourseCard({ course, onRemove }) {
  const [imageUrl, setImageUrl] = useState(null);

  const isAdmin = useSelector(state => state.auth.user?.isAdmin === true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`http://localhost:8082/api/course/${course.id}/image`, {
          responseType: 'blob',
        });
        const url = URL.createObjectURL(response.data);
        setImageUrl(url);
      } catch (error) {
        console.error('Failed to fetch image for course ID:', course.id, error);
        setImageUrl('/images/default.jpg');
      }
    };

    fetchImage();
  }, [course.id]);

  const handleRemove = async () => {
    const confirm = window.confirm(`Are you sure you want to delete "${course.title}"?`);
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:8082/api/delete/${course.id}`);
      alert("Course removed successfully!");
      if (onRemove) onRemove(course.id);
    } catch (error) {
      console.error("Failed to delete course:", error);
      alert("Error deleting course.");
    }
  };

  return (
    <div className="card shadow rounded overflow-hidden" style={{ width: '100%', maxWidth: '350px' }}>
      <div className="position-relative">
        <img
          src={imageUrl}
          className="card-img-top"
          alt={`Course ${course.id}`}
          style={{ height: '200px', objectFit: 'cover' }}
        />
      </div>

      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text text-truncate-multiline">
          {course.short_description?.slice(0, 100)}{course.short_description?.length > 120 && '...'}
        </p>
        <div className="d-flex">
          <Link to={`/coursedetails/${course.id}`} className="btn btn-outline-dark">
            View details
          </Link>
          {isAdmin && (
            <button className="btn btn-danger ms-2" onClick={handleRemove}>
              Remove Course
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
