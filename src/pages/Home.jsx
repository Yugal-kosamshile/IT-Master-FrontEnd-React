import React from 'react';
import CourseCard from '../components/CourseCard'; // Adjust the path if needed

function Home() {
  const courses = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      title: 'Core Java Specialization',
      description:
        'Learn the Skills Needed to be a Java Programmer. Quickly master the Java programming language and the packages that constitute its rich set of core libraries.',
    },
    {
      id: 2,
      title: 'IBM Python for Data Science, AI & Development',
      description:
        'Learn Python - the most popular programming language and for Data Science and Software Development.',
    },
    {
      id: 3,
      title: 'C# for .NET Developers',
      description:
        'Master ASP.NET fundamentals and .NET framework components, using C# syntax for robust web application development.',
    },
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h1 className="display-5">Available Courses</h1>
        <p className="lead">Start learning new skills with these hand-picked courses.</p>
      </div>

      <div className="row">
        {courses.map((course) => (
          <div className="col-md-4" key={course.id}>
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
