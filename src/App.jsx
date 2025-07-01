import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import { AuthProvider, useAuth } from './contexts/AuthContext';
import AuthModal from './components/AuthModal';
import Dashboard from './components/Dashboard';
import CustomCursor from './components/CustomCursor';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-xl">Loading...</p>
        </div>
      </div>
    );
  }
  
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

// Main Landing Page Component
const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState('login');
  const { isAuthenticated } = useAuth();

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: false,
      offset: 100,
      delay: 0,
      disable: false,
      mirror: true,
      anchorPlacement: 'top-bottom',
      startEvent: 'DOMContentLoaded',
      animatedClassName: 'aos-animate',
      debounceDelay: 50,
      throttleDelay: 99,
    });

    AOS.refresh();
  }, [isDarkMode]);

  // Handle navigation
  const handleReportIssue = () => {
    if (isAuthenticated) {
      alert('Navigate to Report Issue page');
    } else {
      setAuthModalMode('login');
      setAuthModalOpen(true);
    }
  };

  const handleViewMap = () => {
    if (isAuthenticated) {
      alert('Navigate to Map page');
    } else {
      setAuthModalMode('login');
      setAuthModalOpen(true);
    }
  };

  const handleLogin = () => {
    setAuthModalMode('login');
    setAuthModalOpen(true);
  };

  const handleRegister = () => {
    setAuthModalMode('register');
    setAuthModalOpen(true);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode ? 'dark-mode' : ''
    }`}>
      {/* Header */}
      <header className={`content-layer transition-all duration-500 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/civic-icon.png" 
                alt="Civic Connect Logo" 
                className="w-8 h-8"
              />
              <div className="civic-logo-container">
                <div className="civic-logo-text text-2xl font-bold text-black-600 cursor-glow text-glow">
                  <span className="text-blue-600 ">Civic</span> Connect</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={handleReportIssue} className={`transition-colors cursor-glow ${
                isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
              }`}>
                Report
              </button>
              <button onClick={handleViewMap} className={`transition-colors cursor-glow ${
                isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
              }`}>
                Map
              </button>
              
              {!isAuthenticated ? (
                <>
                  <button onClick={handleLogin} className={`transition-colors cursor-glow ${
                    isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                  }`}>
                    Login
                  </button>
                  <button
                    onClick={handleRegister}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 cursor-glow"
                  >
                    Sign Up
                  </button>
                </>
              ) : (
                <button
                  onClick={() => window.location.href = '/dashboard'}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 cursor-glow"
                >
                  Dashboard
                </button>
              )}
              
              {/* Dark/Light Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                  isDarkMode 
                    ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400 shadow-lg' 
                    : 'bg-gray-800 text-yellow-400 hover:bg-gray-700 shadow-lg'
                }`}
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                <div className="flex items-center justify-center w-6 h-6">
                  {isDarkMode ? (
                    // Sun icon for light mode
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    // Moon icon for dark mode
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  )}
                </div>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 perspective-dots transition-all duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dotted-bg-3d' 
          : 'bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 dotted-bg-3d'
      }`}>
        <div className="content-layer">
        <div className="max-w-7xl mx-auto text-center">
          <div 
            className="flex items-center justify-center mb-6 hero-glow"
            data-aos="zoom-in-glow"
            data-aos-duration="1000"
          >
            <img 
              src="/civic-icon.png" 
              alt="Civic Connect Logo" 
              className="w-16 h-16 mr-4 float cursor-glow"
            />
            <div className="civic-logo-container">
              <h1 className={`civic-logo-text text-4xl sm:text-5xl lg:text-6xl font-bold transition-colors text-glow cursor-glow ${
                isDarkMode ? 'text-black-900' : 'text-black-900'
              }`}>
                <span className={`transition-colors pulse-glow ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>Civic</span> Connect
              </h1>
            </div>
          </div>
          <p 
            className={`text-xl sm:text-2xl mb-8 max-w-3xl mx-auto transition-colors ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
            data-aos="fade-up-glow"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            Empowering citizens to build cleaner, smarter cities.
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="fade-up-glow"
            data-aos-delay="600"
            data-aos-duration="800"
          >
            <button
              onClick={handleReportIssue}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-colors button-glow magnetic cursor-glow ${
                isDarkMode
                  ? 'bg-blue-600 text-white border-blue-500 hover:bg-blue-700 hover:border-blue-400'
                  : 'bg-blue-600 text-white border-blue-500 hover:bg-blue-700 hover:border-blue-400'
              }`}
            >
              Report an Issue
            </button>
            <button
              onClick={handleViewMap}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-colors button-glow magnetic cursor-glow ${
                isDarkMode
                  ? 'bg-gray-700 text-white border-gray-600 hover:bg-gray-600 hover:border-gray-500'
                  : 'bg-gray-700 text-white border-gray-600 hover:bg-gray-600 hover:border-gray-500'
              }`}
            >
              View Map
            </button>
          </div>
        </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-20 grid-3d-bg transition-all duration-500 ${
        isDarkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="content-layer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center mb-16"
            data-aos="fade-up-glow"
            data-aos-duration="800"
          >
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors text-glow ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              How Civic Connect Works
            </h2>
            <p className={`text-xl max-w-2xl mx-auto transition-colors ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A comprehensive platform designed to streamline civic issue reporting and resolution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div 
              className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 transition-all feature-card glow-on-hover cursor-glow magnetic"
              data-aos="slide-right-glow"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="text-4xl mb-4 float">📍</div>
              <h3 className={`text-xl font-semibold mb-2 transition-colors text-glow ${
                isDarkMode ? 'text-grey-900' : 'text-black-900'
              }`}>
                Location-based Reporting
              </h3>
              <p className={`transition-colors ${
                isDarkMode ? 'text-gray-900' : 'text-gray-900'
              }`}>
                Report issues with precise GPS coordinates and interactive mapping
              </p>
            </div>
            
            <div 
              className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 transition-all feature-card glow-on-hover cursor-glow magnetic"
              data-aos="fade-up-glow"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <div className="text-4xl mb-4 float">🧾</div>
              <h3 className={`text-xl font-semibold mb-2 transition-colors text-glow ${
                isDarkMode ? 'text-black-900' : 'text-gray-900'
              }`}>
                Real-time Dashboard
              </h3>
              <p className={`transition-colors ${
                isDarkMode ? 'text-grey-900' : 'text-gray-900'
              }`}>
                Public dashboard showing all reported issues and their current status
              </p>
            </div>
            
            <div 
              className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 transition-all feature-card glow-on-hover cursor-glow magnetic"
              data-aos="flip-glow"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              <div className="text-4xl mb-4 float">✅</div>
              <h3 className={`text-xl font-semibold mb-2 transition-colors text-glow ${
                isDarkMode ? 'text-black-900' : 'text-gray-900'
              }`}>
                Admin Tracking System
              </h3>
              <p className={`transition-colors ${
                isDarkMode ? 'text-gray-900' : 'text-gray-600'
              }`}>
                Municipal bodies can verify, track, and update issue resolution status
              </p>
            </div>
            
            <div 
              className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 transition-all feature-card glow-on-hover cursor-glow magnetic"
              data-aos="slide-left-glow"
              data-aos-delay="400"
              data-aos-duration="800"
            >
              <div className="text-4xl mb-4 float">🗳️</div>
              <h3 className={`text-xl font-semibold mb-2 transition-colors text-glow ${
                isDarkMode ? 'text-black-900' : 'text-gray-900'
              }`}>
                Community Upvotes
              </h3>
              <p className={`transition-colors ${
                isDarkMode ? 'text-gray-900' : 'text-gray-600'
              }`}>
                Citizens can upvote issues to help prioritize urgent problems
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Screenshot Mockup Section */}
      <section className={`py-20 perspective-dots transition-all duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800' 
          : 'bg-gradient-to-r from-blue-50 to-green-50'
      }`}>
        <div className="content-layer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className={`text-3xl sm:text-4xl font-bold mb-8 transition-colors text-glow ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
            data-aos="fade-up-glow"
            data-aos-duration="800"
          >
            See Civic Connect in Action
          </h2>
          <div 
            className={`rounded-2xl p-8 max-w-4xl mx-auto glow-on-hover transition-all duration-500 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}
            data-aos="zoom-in-glow"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className={`rounded-xl h-96 flex items-center justify-center transition-all duration-500 ${
              isDarkMode ? 'bg-gradient-to-br from-gray-700 to-gray-600' : 'bg-gradient-to-br from-gray-100 to-gray-200'
            }`}>
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className={`text-2xl font-semibold mb-2 transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  Interactive Map Interface
                </h3>
                <p className={`transition-colors ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Screenshot mockup of the map and reporting interface
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`py-20 content-layer transition-all duration-500 ${
        isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 to-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className={`text-3xl sm:text-4xl font-bold mb-8 transition-colors text-glow ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
              data-aos="slide-right-glow"
              data-aos-duration="800"
            >
              Our Mission
            </h2>
            <p 
              className={`text-xl leading-relaxed mb-8 transition-colors ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
              data-aos="fade-up-glow"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              Civic Connect bridges the gap between citizens and civic bodies by simplifying how local issues are reported and resolved. 
              We believe in the power of community-driven solutions and transparent governance to create better cities for everyone.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div 
                className="text-center glow-on-hover p-4 rounded-lg cursor-glow magnetic"
                data-aos="slide-right-glow"
                data-aos-delay="300"
                data-aos-duration="800"
              >
                <div className="text-3xl mb-4 float">🏙️</div>
                <h3 className={`text-xl font-semibold mb-2 transition-colors text-glow ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Better Cities</h3>
                <p className={`transition-colors ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>Creating cleaner, safer, and more livable urban environments</p>
              </div>
              <div 
                className="text-center glow-on-hover p-4 rounded-lg cursor-glow magnetic"
                data-aos="zoom-in-glow"
                data-aos-delay="400"
                data-aos-duration="800"
              >
                <div className="text-3xl mb-4 float pulse-glow">🤝</div>
                <h3 className={`text-xl font-semibold mb-2 transition-colors text-glow ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Community Engagement</h3>
                <p className={`transition-colors ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>Empowering citizens to actively participate in city improvement</p>
              </div>
              <div 
                className="text-center glow-on-hover p-4 rounded-lg cursor-glow magnetic"
                data-aos="slide-left-glow"
                data-aos-delay="500"
                data-aos-duration="800"
              >
                <div className="text-3xl mb-4 float">📊</div>
                <h3 className={`text-xl font-semibold mb-2 transition-colors text-glow ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Transparency</h3>
                <p className={`transition-colors ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>Providing clear visibility into issue resolution processes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 content-layer text-white transition-all duration-500 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-900'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            data-aos="fade-up-glow"
            data-aos-duration="800"
          >
            <div 
              className="col-span-1 md:col-span-2"
              data-aos="slide-right-glow"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="flex items-center mb-4 glow-on-hover">
                <img 
                  src="/civic-icon.png" 
                  alt="Civic Connect Logo" 
                  className="w-8 h-8 mr-3"
                />
                <div className="text-2xl font-bold text-blue-400 text-glow">Civic Connect</div>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering citizens to build cleaner, smarter cities through technology and community collaboration.
              </p>
              <div className="flex space-x-4">
                <button className="text-gray-400 hover:text-white transition-colors glow-on-hover p-2 rounded">
                  <span className="sr-only">Facebook</span>
                  📘
                </button>
                <button className="text-gray-400 hover:text-white transition-colors glow-on-hover p-2 rounded">
                  <span className="sr-only">Twitter</span>
                  🐦
                </button>
                <button className="text-gray-400 hover:text-white transition-colors glow-on-hover p-2 rounded">
                  <span className="sr-only">Instagram</span>
                  📷
                </button>
              </div>
            </div>
            
            <div
              data-aos="fade-up-glow"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <h3 className="text-lg font-semibold mb-4 text-glow">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={handleReportIssue} className="text-gray-400 hover:text-white transition-colors glow-on-hover">
                    Report Issue
                  </button>
                </li>
                <li>
                  <button onClick={handleViewMap} className="text-gray-400 hover:text-white transition-colors glow-on-hover">
                    View Map
                  </button>
                </li>
                <li>
                  <button onClick={handleLogin} className="text-gray-400 hover:text-white transition-colors glow-on-hover">
                    Login
                  </button>
                </li>
              </ul>
            </div>
            
            <div
              data-aos="fade-up-glow"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              <h3 className="text-lg font-semibold mb-4 text-glow">Contact</h3>
              <p className="text-gray-400 mb-2">
                <a href="mailto:contact@civicconnect.com" className="hover:text-white transition-colors glow-on-hover">
                  contact@civicconnect.com
                </a>
              </p>
              <p className="text-gray-400">
                Building better communities together
              </p>
            </div>
          </div>
          
          <div 
            className="border-t border-gray-800 mt-8 pt-8 text-center"
            data-aos="fade-up-glow"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            <p className="text-gray-400">
              © 2024 Civic Connect. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authModalMode}
      />
    </div>
  );
};

// Main App Component
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          {/* Custom Cursor Effect */}
          <CustomCursor />
          
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard isDarkMode={false} />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
