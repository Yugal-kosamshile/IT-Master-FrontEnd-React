import React from 'react';

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
        <p className="card-text">{course.description}</p>
        <a href={`/courses/${course.id}`} className="btn btn-primary">View Details</a>
      </div>
    </div>
  );
}

export default CourseCard;
