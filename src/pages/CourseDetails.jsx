import React from 'react';

const CourseDetails = ({ course }) => {

   if (!course) {
    return <p>Loading course data...</p>; // or return null, or a fallback UI
  }

  const {
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
    <div id={`course-${course.id}`} className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <h2 className="text-xl text-gray-600 mb-4">{subtitle}</h2>

      <div className="mb-4">
        <p><strong>Rating:</strong> {rating} ⭐ ({students.toLocaleString()} students)</p>
        <p><strong>Created by:</strong> {createdBy}</p>
        <p><strong>Start Date:</strong> {startDate}</p>
        <p><strong>End Date:</strong> {endDate}</p>
        <p><strong>Language:</strong> {language}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-2xl font-semibold mb-2">What you'll learn</h3>
        <ul className="list-disc pl-6 space-y-1">
          {learnings.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-2xl font-semibold mb-2">Description</h3>
        {description.map((paragraph, idx) => (
          <p key={idx} className="mt-2">{paragraph}</p>
        ))}
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-2">Who this course is for</h3>
        <ul className="list-disc pl-6 space-y-1">
          {targetAudience.map((audience, idx) => (
            <li key={idx}>{audience}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetails;
