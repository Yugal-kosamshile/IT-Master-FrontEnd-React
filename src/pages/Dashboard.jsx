import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCourse } from '../../store';
import "../styles/Dashboard.css";  

function Dashboard() {
  const dispatch = useDispatch();
  const dashboardCourses = useSelector(state => state.dashboard);

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
    <div className="container my-5 dashboard-container">
      <h2 className="mb-4  fw-bold text-dark heading">Welcome To Dashboard</h2>

      {dashboardCourses.length === 0 ? (
        <p className="text-muted text-center fs-5">No enrolled courses yet.</p>
      ) : (
        <div className="row g-4">
          {dashboardCourses.map(course => (
            <div key={course.id} className="col-md-6 col-lg-4">
              <div className="card dashboard-card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-dark">{course.title}</h5>
                  <p className="text-muted"><strong>Instructor:</strong> {course.created_by}</p>
                  <p><strong>Start:</strong> {course.start_date}</p>
                  <p><strong>End:</strong> {course.end_date}</p>

                  {/* Status Badge */}
                  <div className="mb-3">
                    <span className={`badge rounded-pill ${statusMap[course.id] === 'completed' ? 'bg-success' : 'bg-secondary'}`}>
                      {statusMap[course.id] === 'completed' ? '✅ Completed' : '⏳ Incomplete'}
                    </span>
                  </div>

                  {/* Status Toggle */}
                  <div className="form-check form-switch mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`status-${course.id}`}
                      checked={statusMap[course.id] === 'completed'}
                      onChange={() =>
                        handleStatusChange(course.id, statusMap[course.id] === 'completed' ? 'incomplete' : 'completed')
                      }
                    />
                    <label className="form-check-label" htmlFor={`status-${course.id}`}>
                      Mark as {statusMap[course.id] === 'completed' ? 'Incomplete' : 'Completed'}
                    </label>
                  </div>

                  {/* Remove Button */}
                  <button
                    className="btn btn-danger btn-remove mt-auto"
                    onClick={() => handleRemove(course.id)}
                  >
                    🗑 Remove Course
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
