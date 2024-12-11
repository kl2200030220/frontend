import React from 'react';
import { BookOpen, Compass, Layout, Users } from 'lucide-react';

function Header({ user, onLogout, onNavigate }) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 
              className="text-xl font-bold text-purple-600 cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              MentorMatch
            </h1>
            {user && (
              <nav className="hidden md:ml-8 md:flex md:space-x-6">
                <NavLink icon={Compass} text="Find Mentors" onClick={() => onNavigate('findMentors')} />
                <NavLink icon={Layout} text="My Sessions" onClick={() => onNavigate('dashboard')} />
                <NavLink icon={BookOpen} text="Courses" onClick={() => onNavigate('courses')} />
              </nav>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <button className="text-gray-600 hover:text-gray-900">
                  <Users className="h-6 w-6" />
                </button>
                <div className="relative group">
                  <button className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-purple-600">
                        {user.name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{user.name}</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 hidden group-hover:block">
                    <button 
                      onClick={() => onNavigate('profile')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </button>
                    <button 
                      onClick={() => onNavigate('settings')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </button>
                    <button 
                      onClick={onLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => onNavigate('login')}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Sign in
                </button>
                <button
                  onClick={() => onNavigate('signup')}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
                >
                  Get Started
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({ icon: Icon, text, onClick }) {
  return (
    <button onClick={onClick} className="flex items-center text-gray-600 hover:text-gray-900">
      <Icon className="h-5 w-5 mr-2" />
      <span>{text}</span>
    </button>
  );
}

export default Header;