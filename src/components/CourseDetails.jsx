import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addToDashboard } from '../../store';

function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [course, setCourse] = useState(null);

  const dashboardCourses = useSelector(state => state.dashboard);
const isEnrolled = dashboardCourses.some(c => c.id === parseInt(id));

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`http://localhost:8082/api/get-course/${id}`);
        setCourse(res.data);
      } catch (error) {
        console.error('Failed to fetch course details:', error);
        alert('Could not load course.');
      }
    };

    fetchCourse();
  }, [id]);

  const handleEnroll = () => {
    if (!course) return;

    dispatch(addToDashboard(course));
    alert('Course added to your dashboard!');
    navigate('/dashboard');
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
      <section className="bg-dark text-white py-5">
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
