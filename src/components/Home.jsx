import React from 'react';
import { ArrowRight, BookOpen, Users, Calendar, Trophy } from 'lucide-react';

export default function Home({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-10"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
             Expert Mentorship
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Career growth
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => onNavigate('signup')}
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('login')}
              className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Login
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-indigo-100 p-4 rounded-full inline-block mb-4">
              <BookOpen className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert-Led Courses</h3>
            <p className="text-gray-600">
              Learn from industry professionals with years of experience
            </p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 p-4 rounded-full inline-block mb-4">
              <Users className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">1-on-1 Mentorship</h3>
            <p className="text-gray-600">
              Get personalized guidance tailored to your goals
            </p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 p-4 rounded-full inline-block mb-4">
              <Trophy className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
            <p className="text-gray-600">
              Monitor your growth with detailed progress tracking
            </p>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <div className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
            <p className="text-gray-600">Start your journey with our most popular courses</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[{ title: 'Web Development', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', description: 'Master modern web development' },
              { title: 'Python Full Stack', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5', description: 'Become a Python full-stack developer' },
              { title: 'Java Development', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97', description: 'Learn enterprise Java development' }
            ].map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <button
                    onClick={() => onNavigate('signup')}
                    className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
