import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const username = localStorage.getItem('username');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch course details - no login required
        const courseRes = await axios.get(`http://localhost:8082/api/get-course/${id}`);
        setCourse(courseRes.data);
      } catch (error) {
        console.error('Error fetching course details:', error);
        alert('Failed to fetch course details.');
        return;
      }

      // Only check enrollment if user is logged in
      if (username) {
        try {
          const enrolledRes = await axios.get('http://localhost:8082/api/my-course', {
            params: { username }
          });
          const enrolled = enrolledRes.data.some(c => c.id === parseInt(id));
          setIsEnrolled(enrolled);
        } catch (error) {
          console.error('Error checking enrollment:', error);
          alert('Failed to verify enrollment.');
        }
      }
    };

    fetchData();
  }, [id, username]);

  const handleEnroll = async () => {
    if (!username) {
      alert('Please log in first.');
      navigate('/login');
      return;
    }

    if (!course?.id) {
      alert('Invalid operation. Please try again later.');
      return;
    }

    try {
      await axios.post('http://localhost:8082/api/my-course', {
        id: course.id,
        username
      });
      alert('Enrolled successfully!');
      setIsEnrolled(true);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error during enrollment:', error);
      alert(error.response?.data?.message || 'Enrollment failed.');
    }
  };

  if (!course) return <div className="text-center mt-5">Loading...</div>;

  const {
    title = 'Untitled Course',
    subtitle = '',
    rating = 'N/A',
    students = 0,
    created_by = 'Unknown',
    start_date = 'N/A',
    end_date = 'N/A',
    language = 'N/A',
  } = course;

  return (
    <div className="mb-5">
      <section className="bg-primary text-white py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">{title}</h1>
          <p className="lead">{subtitle}</p>

          <div className="row mt-4">
            <div className="col-md-6">
              <p><strong>Rating:</strong> {rating} ⭐ ({students.toLocaleString()} students)</p>
              <p><strong>Created by:</strong> {created_by}</p>
            </div>
            <div className="col-md-6">
              <p><strong>Start Date:</strong> {start_date}</p>
              <p><strong>End Date:</strong> {end_date}</p>
              <p><strong>Language:</strong> {language}</p>
            </div>
          </div>

          {!isEnrolled ? (
            <button className="btn btn-success mt-4" onClick={handleEnroll}>
              Enroll
            </button>
          ) : (
            <button className="btn btn-light mt-4" disabled>
              Already Enrolled
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

export default CourseDetails;
