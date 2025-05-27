import React from 'react';
import { Link } from 'react-router-dom';

function CourseCard({ course }) {
  return (
    <div className="card mb-3 w-100">
      <div className="card-body d-flex flex-column">
        {course.image && (
          <img
            src={course.image}
            className="card-img-top"
            alt={course.title}
            style={{ height: '200px', objectFit: 'cover' }}
          />
        )}
        <h5 className="card-title mt-3">{course.title}</h5>
        <p className="card-text">{course.short_description}</p>
        <Link to={`/coursedetails/${course.id}`} className="btn btn-primary mt-auto">
  View Details
</Link>

      </div>
    </div>
  );
}

export default CourseCard;
