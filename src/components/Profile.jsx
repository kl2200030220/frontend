import React from 'react';
import { Mail, Phone, BookOpen, Award, Clock } from 'lucide-react';

function Profile({ user }) {
  const enrolledCourses = [
    {
      id: 1,
      title: 'Advanced Machine Learning',
      progress: 65,
      lastAccessed: '2 days ago'
    },
    {
      id: 2,
      title: 'React Development',
      progress: 40,
      lastAccessed: '1 week ago'
    }
  ];

  const achievements = [
    { id: 1, title: 'Quick Learner', description: 'Completed 5 modules in one day' },
    { id: 2, title: 'Perfect Score', description: 'Scored 100% in ML basics quiz' }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center space-x-6 mb-6">
          <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center">
            <span className="text-3xl font-medium text-purple-600">
              {user.name.charAt(0)}
            </span>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>Member since November 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Enrolled Courses</h2>
          <div className="space-y-4">
            {enrolledCourses.map(course => (
              <div key={course.id} className="border-b pb-4 last:border-0">
                <h3 className="font-medium mb-2">{course.title}</h3>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Progress: {course.progress}%</span>
                  <span>Last accessed: {course.lastAccessed}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-purple-600 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Achievements</h2>
          <div className="space-y-4">
            {achievements.map(achievement => (
              <div key={achievement.id} className="flex items-start space-x-3">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <Award className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-medium">{achievement.title}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Profile;