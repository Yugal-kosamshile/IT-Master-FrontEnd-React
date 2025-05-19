import React from 'react';

function CourseCard({ course }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">{course.description}</p>
        <a href={`/courses/${course.id}`} className="btn btn-primary">View Details</a>
      </div>
    </div>
  );
}

export default CourseCard;
