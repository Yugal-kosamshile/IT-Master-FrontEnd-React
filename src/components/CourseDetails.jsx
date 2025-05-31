import { useParams, useNavigate } from 'react-router-dom'; 
import { useEffect, useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addToDashboard } from '../../store';


function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [course, setCourse] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
const dashboardCourses = useSelector(state => state.dashboard);

  const isAdmin = useSelector(state => state.auth.user?.isAdmin === true);
  const isEnrolled = dashboardCourses.some(c => c.id === parseInt(id));
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`http://localhost:8082/api/get-course/${id}`);
        setCourse(res.data);
        if (res.data.imageName) {
          fetchImage(res.data.imageName);
        }
      } catch (error) {
        console.error('Failed to fetch course details:', error);
        alert('Could not load course.');
      }
    };

    const fetchImage = async (imageName) => {
      try {
        const response = await axios.get(`http://localhost:8082/api/course/${id}/image`, {
          responseType: 'blob',
        });
        setImageUrl(URL.createObjectURL(response.data));
      } catch (error) {
        console.error('Failed to load course image:', error);
      }
    };

    fetchCourse();
  }, [id]);

    const handleEnroll = () => {
    if (!isLoggedIn) {
      alert('You must be logged in to enroll in a course.');
      return;
    }

    if (!course) {
      alert('Course not loaded. Try again.');
      return;
    }

    if (isEnrolled) {
      alert('You are already enrolled in this course.');
      return;
    }

    dispatch(addToDashboard(course));
    alert('Course added to your dashboard!');
    navigate('/dashboard');
  };


  if (!course) return <div className="text-center mt-5">Loading...</div>;

  const {
    title = 'Untitled Course',
    subtitle = '',
    rating = 'N/A',
    short_description = '',
    students = 0,
    created_by = 'Unknown',
    start_date = 'N/A',
    end_date = 'N/A',
    language = 'N/A',
  } = course;

  return (
    <div className="container my-5">
      <div className="course-details-card row shadow-lg rounded-4 overflow-hidden">
        {/* Left Column */}
        <div className="col-md-5 bg-dark p-0">

          <div>
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={course.imageName || 'Course'}
                className="img-fluid w-100 course-img"
              />
            ) : (
              <div className="placeholder-image">
                Loading image...
              </div>
            )}
            {/* rest of your code */}
          </div>


          <div className="p-4 text-white">
            <p><strong>Rating:</strong> {rating} ⭐ ({students.toLocaleString()} students)</p>
            <p><strong>Created by:</strong> {created_by}</p>
            <p><strong>Start Date:</strong> {start_date}</p>
            <p><strong>End Date:</strong> {end_date}</p>
            <p><strong>Language:</strong> {language}</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-7 p-5 bg-white">
          <h2 className="text-dark fw-bold">{title}</h2>
          <h4 className="text-muted">{subtitle}</h4>
          <p className="mt-4 text-dark">{short_description}</p>

          <div className="mt-5 d-flex gap-3 flex-column flex-md-row">
            {!isEnrolled ? (
              <button className="btn btn-primary btn-lg flex-fill" onClick={handleEnroll}>
                Enroll in Course
              </button>
            ) : (
              <button className="btn btn-secondary btn-lg flex-fill" disabled>
                Already Enrolled
              </button>
            )}
            {isAdmin && (<button
              className="btn btn-outline-success btn-lg flex-fill"
              onClick={() => navigate(`/update-course/${id}`)}
            >
              ✏️ Edit Course
            </button>
          )}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
