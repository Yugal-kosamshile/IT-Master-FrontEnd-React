import axios from "axios";
import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import SearchCourse from "../components/SearchCourse";
import API from "../axios";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    API.get("/get-courses")
      .then((res) => setCourses(res.data))
      .catch((err) => console.error("Error fetching courses:", err));
  }, []);

  const handleSearchResults = (results, error) => {
    setSearchResults(results || []);
    setErrorMsg(error || '');
  };

  const displayCourses = searchResults.length > 0 ? searchResults : courses;

  return (
    <>
      {/* Top Bar with Heading + Search */}
      <div className="container py-4 d-flex justify-content-between align-items-center flex-wrap">
        <h1 className="heading mb-3 mb-md-0">Let's Start Learning</h1>
        <SearchCourse onResults={handleSearchResults} />
      </div>

      {/* Error Message */}
      {errorMsg && <div className="text-danger text-center mb-3">{errorMsg}</div>}

      {/* Courses Grid */}
      <div className="container pb-5">
        <div className="row">
          {displayCourses.map((course) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex align-items-stretch"
              key={course.id}
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Courses;
