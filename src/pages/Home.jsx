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
