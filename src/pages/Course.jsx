import React from 'react';
import courses from '../../store'; 
import CourseCard from '../components/CourseCard';
import CourseDetails from './CourseDetails';

const CoursesPage = () => {
  return (
    <div>
     

      {/* Details section */}
      <div>
        {courses.map(course => (
          <CourseDetails key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
