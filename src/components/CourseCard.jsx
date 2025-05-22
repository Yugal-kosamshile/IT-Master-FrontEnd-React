import React from 'react';
import courses from '../../store';
import { Link } from 'react-router-dom';

function CourseCard({ course }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <img
          src={course.image}
          className="card-img-top"
          alt={course.title}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <h5 className="card-title mt-3">{course.title}</h5>
        <p className="card-text">{course.shortDescription}</p>
        <Link to="/courses" className="btn btn-primary">View Details</Link> 
       </div>
    </div>
  );
}

export default CourseCard;
