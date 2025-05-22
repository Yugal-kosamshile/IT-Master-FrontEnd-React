import React from 'react';

const CourseDetails = ({ course }) => {
  if (!course) {
    return <p className="text-center mt-5">Loading course data...</p>;
  }

  const {
    id,
    title,
    subtitle,
    rating,
    students,
    createdBy,
    startDate,
    endDate,
    language,
    learnings,
    description,
    targetAudience,
  } = course;

  return (
    <div id={`course-${id}`}>

      {/* Section 1: Header with dark background */}
      <section className="bg-dark text-white py-5">
        <div className="container">
          <div className="mb-4">
            <h1 className="display-5 fw-bold">{title}</h1>
            <h2 className="h5 text-light">{subtitle}</h2>
          </div>

          <div className="row">
            <div className="col-md-6">
              <p><strong>Rating:</strong> {rating} ⭐ ({students.toLocaleString()} students)</p>
              <p><strong>Created by:</strong> {createdBy}</p>
            </div>
           <div className="col-md-6">
  <p>
    <strong><i className="bi bi-calendar-event me-2"></i>Start Date:</strong> {startDate}
  </p>
  <p>
    <strong><i className="bi bi-calendar-check me-2"></i>End Date:</strong> {endDate}
  </p>
  <p>
    <strong><i className="bi bi-translate me-2"></i>Language:</strong> {language}
  </p>
</div>

          </div>
        </div>
      </section>

      {/* Section 2: What you'll learn with checkmarks */}
      <section className="container my-5">
        <div className="border p-4 rounded">
          <h3 className="h4 fw-semibold mb-3">What you'll learn</h3>
          <ul className="list-unstyled">
            {learnings.map((item, idx) => (
              <li key={idx} className="mb-2">
                <span className="text-success me-2">✔</span>{item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 3: Description and Target Audience */}
      <section className="container mb-5">
        <div className="mb-4">
          <h3 className="h4 fw-semibold mb-3">Description</h3>
          {description.map((paragraph, idx) => (
            <p key={idx} className="mb-2">{paragraph}</p>
          ))}
        </div>

        <div className="mb-4">
          <h3 className="h4 fw-semibold mb-3">Who this course is for</h3>
          <ul className="list-group">
            {targetAudience.map((audience, idx) => (
              <li key={idx} className="list-group-item">{audience}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;
