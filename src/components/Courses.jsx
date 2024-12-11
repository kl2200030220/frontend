import React, { useState } from 'react';
import CourseCard from './CourseCard';

const courses = [
  {
    id: 1,
    title: 'Web Development Bootcamp',
    description: 'Master full-stack web development with React, Node.js, and MongoDB',
    category: 'Web Development',
    duration: '12 weeks',
    enrolled: 1500,
    rating: 4.8,
    image: 'https://source.unsplash.com/random/800x600/?coding'
  },
  {
    id: 2,
    title: 'Machine Learning Fundamentals',
    description: 'Learn ML concepts, algorithms, and practical applications',
    category: 'AI & ML',
    duration: '10 weeks',
    enrolled: 1200,
    rating: 4.9,
    image: 'https://source.unsplash.com/random/800x600/?ai'
  },
  {
    id: 3,
    title: 'Data Engineering Essentials',
    description: 'Build scalable data pipelines and ETL processes',
    category: 'Data Engineering',
    duration: '8 weeks',
    enrolled: 800,
    rating: 4.7,
    image: 'https://source.unsplash.com/random/800x600/?data'
  },
  {
    id: 4,
    title: 'Java Programming Masterclass',
    description: 'Comprehensive Java course from basics to advanced concepts',
    category: 'Java',
    duration: '14 weeks',
    enrolled: 2000,
    rating: 4.8,
    image: 'https://source.unsplash.com/random/800x600/?java'
  },
  {
    id: 5,
    title: 'Python for Data Science',
    description: 'Learn Python programming for data analysis and visualization',
    category: 'Python',
    duration: '10 weeks',
    enrolled: 1800,
    rating: 4.9,
    image: 'https://source.unsplash.com/random/800x600/?python'
  }
];

function Courses() {
  const [enrolledCourses, setEnrolledCourses] = useState([]); // Track all enrolled courses
  const [message, setMessage] = useState(null); // Message to show after enrollment

  const handleEnroll = (course) => {
    if (!enrolledCourses.includes(course.id)) {
      setEnrolledCourses([...enrolledCourses, course.id]); // Add the course ID to the enrolled list
      setMessage(`You have been enrolled in ${course.title}.`); // Show the message
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold mb-2">Available Courses</h1>
        <p className="text-gray-600">Explore our comprehensive course catalog</p>
      </div>

      {message && (
        <div className="p-4 bg-green-100 text-green-800 rounded-md mb-4">
          {message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <CourseCard
            key={course.id}
            course={course}
            onEnroll={() => handleEnroll(course)}
            isEnrolled={enrolledCourses.includes(course.id)} // Pass enrollment status
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;
