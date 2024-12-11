import React, { useState } from 'react';
import { BookOpen, Clock, Calendar, Trophy } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Advanced Machine Learning',
    mentor: 'Dr. Sarah Wilson',
    progress: 65,
    modules: 12,
    completedModules: 8,
    achievements: ['Quiz Master', 'Perfect Attendance']
  },
  {
    id: 2,
    title: 'React Development',
    mentor: 'John Smith',
    progress: 40,
    modules: 10,
    completedModules: 4,
    achievements: ['Early Bird']
  }
];

const upcomingSessions = [
  {
    id: 1,
    title: 'ML Model Optimization',
    course: 'Advanced Machine Learning',
    mentor: 'Dr. Sarah Wilson',
    date: 'Tomorrow',
    time: '10:00 AM - 11:30 AM',
    type: 'One-on-One',
    status: 'Confirmed',
    joined: false // add a joined property to track session status
  },
  {
    id: 2,
    title: 'React Hooks Deep Dive',
    course: 'React Development',
    mentor: 'John Smith',
    date: 'Next Week',
    time: '2:00 PM - 3:30 PM',
    type: 'One-on-One',
    status: 'Pending',
    joined: false // add a joined property to track session status
  }
];

function Dashboard({ user }) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold mb-2">Welcome back, {user.name}!</h1>
        <p className="text-gray-600">Track your progress and connect with mentors</p>
        {/* Displaying user role */}
        <div className="text-center mb-4">
          <p className="text-lg">
            You are logged in as a <span className="font-semibold">{user.role}</span>.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard icon={BookOpen} title="Active Courses" value={courses.length} />
        <StatCard icon={Clock} title="Hours Learned" value="24" />
        <StatCard icon={Calendar} title="Sessions This Week" value="2" />
        <StatCard icon={Trophy} title="Certificates" value="1" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section>
          <h2 className="text-xl font-bold mb-4">Your Progress</h2>
          <div className="space-y-6">
            {courses.map(course => (
              <CourseProgress key={course.id} course={course} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Upcoming Sessions</h2>
          <div className="space-y-4">
            {upcomingSessions.map(session => (
              <SessionCard key={session.id} session={session} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, title, value }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center space-x-3">
        <div className="bg-purple-100 p-3 rounded-lg">
          <Icon className="h-6 w-6 text-purple-600" />
        </div>
        <div>
          <p className="text-gray-600 text-sm">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
}

function CourseProgress({ course }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-semibold mb-1">{course.title}</h3>
      <p className="text-gray-600 text-sm mb-3">with {course.mentor}</p>
      
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span>Overall Progress</span>
          <span>{course.progress}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div 
            className="h-full bg-purple-600 rounded-full"
            style={{ width: `${course.progress}%` }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-600">
        <span>{course.completedModules}/{course.modules} Modules</span>
        <div className="flex space-x-2">
          {course.achievements.map((achievement, index) => (
            <span 
              key={index}
              className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs"
            >
              {achievement}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SessionCard({ session }) {
  const [isJoined, setIsJoined] = useState(session.joined); // Initialize with session's joined state

  const handleJoinSession = () => {
    setIsJoined(true); // Mark the session as joined
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold">{session.title}</h3>
          <p className="text-gray-600 text-sm">{session.course}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${
          session.status === 'Confirmed' 
            ? 'bg-green-100 text-green-800'
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {session.status}
        </span>
      </div>

      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{session.date}</span>
          <span className="mx-2">•</span>
          <span>{session.time}</span>
        </div>
        <div className="flex items-center">
          <BookOpen className="h-4 w-4 mr-2" />
          <span>{session.type}</span>
          <span className="mx-2">•</span>
          <span>with {session.mentor}</span>
        </div>
      </div>

      <button 
        onClick={handleJoinSession}
        className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
        disabled={isJoined} // Disable the button after clicking
      >
        {isJoined ? 'Joined' : 'Join Session'}
      </button>
    </div>
  );
}

export default Dashboard;
