import React, { useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard';  
import Enrollment from '../components/Enrollment.jsx';   
import axios from 'axios';
function Home() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:7878/api/courses')
      .then((res) => setCourses(res.data))
      .catch((err) => console.error('Error fetching courses:', err));
  }, []);
  
  return (
    <>
      {/* Hero Section Outside of Bootstrap Container */}
      <div className="home-hero d-flex flex-column justify-content-center align-items-center text-white text-center">
        <h1 className="potent display-4 fw-bold drop-in"> Unlock Your Potential</h1>
        <hr className="hr-line" />
        <h1 className="display-4 fw-bold mb-5">with Expert-Led Courses</h1>

        <p className="lead mt-3">Learn in-demand skills, master new technologies, and achieve your goals — one course at a time.</p>
      </div>

      {/* Courses Section */}
      <div className="container py-5">
        <h1 className="heading mb-5">Let's Start Learning</h1>
        <div className="row">
          {courses.map((course) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex align-items-stretch"
              key={course.id}
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>

      {/* benefit Section Outside of Bootstrap Container */}

      <div className="benefit-section d-flex flex-column align-items-start text-white px-4">
        <div className="container">
          <h1 className="heading mb-5 display-5 text-start">Unlock these <i>benefits</i></h1>

          <div className="benefits py-5 mb-5">
            <div className="row justify-content-center">
              {[
                { icon: 'book', title: 'Globally recognized', subtitle: 'Prestigious Degree' },
                { icon: 'graduation-cap', title: 'Industry relevant', subtitle: 'Curriculum' },
                { icon: 'suitcase', title: '100% placement', subtitle: 'Assistance' },
                { icon: 'list', title: 'Easy Finance', subtitle: 'Options' }
              ].map((benefit, index) => (
                <div className="col-12 col-sm-6 col-lg-3 mb-4" key={index}>
                  <div className="d-flex align-items-center justify-content-center gap-4">
                    <i className={`fa-solid fa-${benefit.icon} fa-3x`}></i>
                    <div className="text-start">
                      <h5 className="mb-1 fw-bold">{benefit.title}</h5>
                      <p className="mb-0 fs-6">{benefit.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* advantages */}
      <div className="advantages-section text-dark p-5">
        <div className="container py-5">
          <h1 className="heading mb-5">IT-Master <i>advantages</i></h1>
          <div className="row justify-content-center">
            {[
              {
                icon: 'calendar',
                title: 'Flexible & convenient schedule',
                subtitle: 'Balance your academic pursuits with personal and professional commitments by learning anywhere and at any time, as per your convenience.',
                bgColor: '#e3f2fd' // Light blue
              },
              {
                icon: 'list-check',
                title: 'At par with on-campus degrees',
                subtitle: 'Access UGC-entitled online degrees that are at par with on-campus degrees and accepted for govt. or corporate jobs and higher education.',
                bgColor: '#f1f8e9' // Light green
              },
              {
                icon: 'tv',
                title: 'Experienced faculty & mentors',
                subtitle: 'Acquire quality education and guidance from esteemed faculty and mentors who share their expertise and practical knowledge.',
                bgColor: '#fff3e0' // Light orange
              },
              {
                icon: 'hexagon-nodes',
                title: 'Prestigious Manipal alumni network',
                subtitle: 'Be a part of the prestigious Manipal alumni network to build connections and to gain easy access to a wide range of career opportunities.',
                bgColor: '#fce4ec' // Light pink
              }
            ].map((benefit, index) => (
              <div className="col-12 col-sm-6 col-lg-3 mb-4" key={index}>
                <div
                  className="p-4 h-100 rounded text-dark shadow-sm"
                  style={{ backgroundColor: benefit.bgColor }}
                >
                  <div className="d-flex align-items-start gap-3">
                    <i className={`fa-solid fa-${benefit.icon} fa-2x`}></i>
                    <div className="text-start">
                      <h5 className="mb-1 fw-bold">{benefit.title}</h5>
                      <p className="mb-0 fs-6">{benefit.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* enrollment Container */}
      <div className="enrollment-section ">
        <Enrollment />
      </div>
    </>
  );
}

export default Home;
