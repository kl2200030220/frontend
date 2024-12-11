import React from 'react';

function CourseCard({ course, onEnroll, isEnrolled }) {
  return (
    <div className="border rounded-lg shadow-sm p-4 space-y-4">
      <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-semibold">{course.title}</h2>
      <p className="text-sm text-gray-600">{course.description}</p>
      <div className="text-sm text-gray-500">
        <p>Category: {course.category}</p>
        <p>Duration: {course.duration}</p>
        <p>Enrolled: {course.enrolled} students</p>
        <p>Rating: {course.rating} ⭐</p>
      </div>
      {isEnrolled ? (
        <div className="text-green-600 font-bold">Enrolled</div>
      ) : (
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={onEnroll}
        >
          Enroll
        </button>
      )}
    </div>
  );
}

export default CourseCard;
