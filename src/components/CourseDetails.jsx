import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`http://localhost:7878/api/coursedetails/${id}`);
        setCourse(res.data);

        const enrolledRes = await axios.get(`http://localhost:7878/api/my-courses`);
        const enrolled = enrolledRes.data.some(c => c.id === parseInt(id));
        setIsEnrolled(enrolled);
      } catch (err) {
        console.error('Error fetching course:', err);
      }
    };

    fetchCourse();
  }, [id]);

  const handleEnroll = async () => {
    try {
      await axios.post(`http://localhost:7878/api/my-courses`, { courseId: course.id });
      alert('Enrolled successfully!');
      setIsEnrolled(true);
    } catch (err) {
      console.error('Error enrolling:', err);
      alert('Error enrolling in the course.');
    }
  };

  if (!course) return <div className="text-center mt-5">Loading...</div>;

  const {
    title,
    subtitle,
    rating,
    students,
    created_by,
    start_date,
    end_date,
    language,
  } = course;

  return (
    <div className="mb-5">
      <section className="bg-dark text-white py-5">
        <div className="container">
          <h1 className="display-5 fw-bold">{title}</h1>
          <h2 className="h5 text-light">{subtitle}</h2>

          <div className="row mt-3">
            <div className="col-md-6">
              <p><strong>Rating:</strong> {rating} ⭐ ({students?.toLocaleString()} students)</p>
              <p><strong>Created by:</strong> {created_by}</p>
            </div>
            <div className="col-md-6">
              <p><strong>Start Date:</strong> {start_date}</p>
              <p><strong>End Date:</strong> {end_date}</p>
              <p><strong>Language:</strong> {language}</p>
            </div>
          </div>

          {!isEnrolled && (
            <button className="btn btn-success mt-4" onClick={handleEnroll}>
              Enroll
            </button>
          )}

          {isEnrolled && (
            <button className="btn btn-secondary mt-4" disabled>
              Already Enrolled
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

export default CourseDetails;
