import React, { useState } from 'react';
import { Star, BookOpen, Users } from 'lucide-react';

const mentors = [
  {
    id: 1,
    name: 'Dr.ABHI',
    title: 'AI/ML Expert',
    rating: 4.9,
    students: 1200,
    courses: ['Advanced Machine Learning', 'Deep Learning Fundamentals', 'Neural Networks'],
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
    expertise: ['Python', 'TensorFlow', 'PyTorch']
  },
  {
    id: 2,
    name: 'Keerthi',
    title: 'Senior Web Developer',
    rating: 4.8,
    students: 850,
    courses: ['React Mastery', 'Full Stack Development', 'JavaScript Advanced'],
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2',
    expertise: ['React', 'Node.js', 'JavaScript']
  },
  {
    id: 3,
    name: 'Karthik',
    title: 'Data Engineering Lead',
    rating: 4.9,
    students: 950,
    courses: ['Big Data Processing', 'Data Pipeline Architecture', 'Apache Spark'],
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3',
    expertise: ['Python', 'Spark', 'Hadoop']
  }
];

function FindMentors() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold mb-2">Find Your Perfect Mentor</h1>
        <p className="text-gray-600">Connect with industry experts and accelerate your learning</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map(mentor => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
      </div>
    </div>
  );
}

function MentorCard({ mentor }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);

  // Available times (for demonstration)
  const availableTimes = [
    '10:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'
  ];

  // Get current date and format for display
  const today = new Date();
  const currentDate = today.toLocaleDateString();

  const handleSchedule = () => {
    setIsModalOpen(true);
  };

  const handleSelectTime = (time) => {
    setSelectedTime(time);
    setIsModalOpen(false);
    alert(`You have been scheduled with ${mentor.name} on ${currentDate} at ${time}.`);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={mentor.image}
          alt={mentor.name}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="font-semibold">{mentor.name}</h3>
          <p className="text-gray-600 text-sm">{mentor.title}</p>
        </div>
      </div>

      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
        <div className="flex items-center">
          <Star className="h-4 w-4 text-yellow-400 mr-1" />
          <span>{mentor.rating}</span>
        </div>
        <div className="flex items-center">
          <Users className="h-4 w-4 mr-1" />
          <span>{mentor.students} students</span>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-medium mb-2">Expertise</h4>
        <div className="flex flex-wrap gap-2">
          {mentor.expertise.map((skill, index) => (
            <span
              key={index}
              className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-medium mb-2">Popular Courses</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          {mentor.courses.map((course, index) => (
            <li key={index} className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2 text-purple-600" />
              {course}
            </li>
          ))}
        </ul>
      </div>

      <button onClick={handleSchedule} className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
        Schedule Session
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-semibold mb-4">Select a Time Slot</h2>
            <p className="mb-4">Date: {currentDate}</p>
            <div className="space-y-2">
              {availableTimes.map((time, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectTime(time)}
                  className="w-full bg-gray-200 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  {time}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FindMentors;
