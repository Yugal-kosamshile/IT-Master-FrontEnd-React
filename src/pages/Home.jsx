import React, { useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard';  
import Enrollment from '../components/Enrollment.jsx';   
import axios from 'axios';
import Slider from "react-slick";
import API from '../axios.jsx';


function Home() {

  const [courses, setCourses] = useState([]);
  const maxCoursesToShow = 9;
const visibleCourses = courses.slice(0, maxCoursesToShow);
const slidesToShow = Math.max(1, Math.min(4, visibleCourses.length));

const sliderSettings = {
  dots: true,
  infinite: visibleCourses.length > slidesToShow,
  speed: 800,
  slidesToShow,
  slidesToScroll: 1,
  cssEase: "ease-in-out", 
  pauseOnHover: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: { slidesToShow: Math.max(1, Math.min(3, visibleCourses.length)) }
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: Math.max(1, Math.min(2, visibleCourses.length)) }
    },
    {
      breakpoint: 576,
      settings: { slidesToShow: 1 }
    }
  ]
};


  useEffect(() => {
    API.get('/get-courses')
      .then((res) => setCourses(res.data))
      .catch((err) => console.error('Error fetching courses:', err));
  }, []);
  
  return (
    <>
      {/* Hero Section Outside of Bootstrap Container */}
      <div className="position-relative overflow-hidden text-white text-center" style={{ height: '90vh' }}>

  {/* Video Background */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="video-bg-home position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
  >
    <source src="/bg-home.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Content */}
  <div className="home-hero d-flex flex-column justify-content-center align-items-center position-relative z-1" style={{ height: '100%' }}>
    <h1 className="potent display-4 fw-bold drop-in">Unlock Your Potential</h1>
    <hr className="hr-line" />
    <h1 className="display-4 fw-bold mb-5"> Expert-Led Courses</h1>
    <p className="lead mt-2">Learn in-demand skills, master new technologies, and achieve your goals — one course at a time.</p>
  </div>

</div>


      {/* Courses Section */}
      <div className="container py-5">
  <h1 className="heading mb-5">Let's Start Learning</h1>
  <div className="course-carousel">
    <Slider {...sliderSettings}>
      {courses.slice(0,9).map((course) => (
        <div key={course.id} className="px-2">
          <CourseCard course={course} />
        </div>
      ))}
    </Slider>
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
