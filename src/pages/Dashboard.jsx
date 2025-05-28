import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCourse } from '../../store'; // Adjust path as needed

function Dashboard() {
  const dispatch = useDispatch();
  const dashboardCourses = useSelector(state => state.dashboard);

  // Local state to track completion status per course
  const [statusMap, setStatusMap] = useState(
    dashboardCourses.reduce((acc, course) => {
      acc[course.id] = 'incomplete';
      return acc;
    }, {})
  );

  const handleRemove = (courseId) => {
    dispatch(removeCourse({ id: courseId }));
  };

  const handleStatusChange = (courseId, status) => {
    setStatusMap(prev => ({ ...prev, [courseId]: status }));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">📚 Welcome to Your Dashboard</h2>

      {dashboardCourses.length === 0 ? (
        <p className="text-muted text-center">No enrolled courses yet.</p>
      ) : (
        <div className="row g-4">
          {dashboardCourses.map(course => (
            <div key={course.id} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-primary">{course.title}</h5>
                  <p className="card-text mb-1"><strong>Instructor:</strong> {course.created_by}</p>
                  <p className="card-text mb-1"><strong>Start Date:</strong> {course.start_date}</p>
                  <p className="card-text mb-3"><strong>End Date:</strong> {course.end_date}</p>

                  {/* Status checkboxes */}
                  <div className="mb-3">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name={`status-${course.id}`}
                        id={`incomplete-${course.id}`}
                        checked={statusMap[course.id] === 'incomplete'}
                        onChange={() => handleStatusChange(course.id, 'incomplete')}
                      />
                      <label className="form-check-label" htmlFor={`incomplete-${course.id}`}>
                        Incomplete
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name={`status-${course.id}`}
                        id={`completed-${course.id}`}
                        checked={statusMap[course.id] === 'completed'}
                        onChange={() => handleStatusChange(course.id, 'completed')}
                      />
                      <label className="form-check-label" htmlFor={`completed-${course.id}`}>
                        Completed
                      </label>
                    </div>
                  </div>

                  <button
                    className="btn btn-outline-danger mt-auto"
                    onClick={() => handleRemove(course.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
