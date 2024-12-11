import React, { useState } from 'react';
import Header from './Header'; // Corrected path
import Home from './Home'; // Corrected path
import Login from './Login'; // Corrected path
import SignUp from './SignUp'; // Corrected path
import Dashboard from './Dashboard'; // Corrected path
import FindMentors from './FindMentors'; // Corrected path
import Profile from './Profile'; // Corrected path
import Settings from './Settings'; // Corrected path
import Courses from './Courses'; // Corrected path

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  const handleUpdateProfile = (updatedData) => {
    setUser({ ...user, ...updatedData });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'login':
        return <Login onLogin={handleLogin} onNavigate={setCurrentPage} />;
      case 'signup':
        return <SignUp onSignUp={handleLogin} onNavigate={setCurrentPage} />;
      case 'dashboard':
        return user ? <Dashboard user={user} /> : <Home onNavigate={setCurrentPage} />;
      case 'findMentors':
        return <FindMentors />;
      case 'profile':
        return <Profile user={user} />;
      case 'settings':
        return <Settings user={user} onUpdateProfile={handleUpdateProfile} />;
      case 'courses':
        return <Courses />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        user={user} 
        onLogout={handleLogout} 
        onNavigate={setCurrentPage}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
