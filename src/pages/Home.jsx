import React from 'react';
import CourseCard from '../components/CourseCard'; // Adjust the path if needed

function Home() {
  const courses = [
    {
      id: 1,
      image: 'https://i.pinimg.com/736x/b2/99/54/b2995453cc037390c92e3cafd718459f.jpg',
      title: 'Core Java Specialization',
      description:
        'Learn the Skills Needed to be a Java Programmer. Quickly master the Java programming language and the packages that constitute its rich set of core libraries.',
    },
    {
      id: 2,
      image: 'https://i.pinimg.com/736x/e5/6f/1c/e56f1c0f774db0827d619e5e6376a73d.jpg',
      title: 'Python for Data Science, AI & Development',
      description:
        'Learn Python - the most popular programming language and for Data Science and Software Development.',
    },
    {
      id: 3,
      image: 'https://i.pinimg.com/736x/e9/df/78/e9df789803e8b82ab475c41eb0137a2c.jpg',
      title: 'C# for .NET Developers',
      description:
        'Master ASP.NET fundamentals and .NET framework components, using C# syntax for robust web application development. Learn to build web applications.'
    },
  ];

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


    </>
  );
}

export default Home;
