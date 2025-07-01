import React, { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import AOS from 'aos';

const Dashboard = ({ isDarkMode }) => {
  const { user, logout } = useAuth();

  useEffect(() => {
    AOS.refresh();
  }, []);

  const handleLogout = async () => {
    await logout();
  };

  const stats = [
    { label: 'Issues Reported', value: '3', icon: '📝' },
    { label: 'Issues Resolved', value: '1', icon: '✅' },
    { label: 'Community Impact', value: '12', icon: '🏆' },
    { label: 'Civic Points', value: '247', icon: '⭐' }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'report',
      title: 'Reported broken streetlight on Main St',
      date: '2 days ago',
      status: 'In Progress',
      icon: '🔆'
    },
    {
      id: 2,
      type: 'resolved',
      title: 'Pothole on Oak Avenue - Resolved',
      date: '1 week ago',
      status: 'Completed',
      icon: '🛣️'
    },
    {
      id: 3,
      type: 'upvote',
      title: 'Upvoted: Park maintenance needed',
      date: '2 weeks ago',
      status: 'Active',
      icon: '🌳'
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-blue-50 to-green-50'
    }`}>
      {/* Header */}
      <div className={`transition-all duration-500 ${
        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className={`text-3xl font-bold transition-colors ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Welcome back, {user?.email?.split('@')[0]}!
              </h1>
              <p className={`transition-colors ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Here's your civic engagement dashboard
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                isDarkMode 
                  ? 'bg-gray-800 border border-gray-700 hover:border-blue-500' 
                  : 'bg-white border border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl'
              }`}
              data-aos="slide-up"
              data-aos-delay={index * 100}
              data-aos-duration="600"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium transition-colors ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </p>
                  <p className={`text-3xl font-bold transition-colors ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {stat.value}
                  </p>
                </div>
                <div className="text-3xl">
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div
            className={`p-6 rounded-xl transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-white border border-gray-200 shadow-lg'
            }`}
            data-aos="slide-right"
            data-aos-duration="700"
          >
            <h3 className={`text-xl font-semibold mb-6 transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Recent Activity
            </h3>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className={`p-4 rounded-lg transition-all duration-200 hover:scale-[1.02] cursor-pointer ${
                    isDarkMode 
                      ? 'bg-gray-700 hover:bg-gray-600' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{activity.icon}</div>
                    <div className="flex-1">
                      <p className={`font-medium transition-colors ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {activity.title}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <p className={`text-sm transition-colors ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {activity.date}
                        </p>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          activity.status === 'Completed'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                            : activity.status === 'In Progress'
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                        }`}>
                          {activity.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div
            className={`p-6 rounded-xl transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-white border border-gray-200 shadow-lg'
            }`}
            data-aos="slide-left"
            data-aos-duration="700"
          >
            <h3 className={`text-xl font-semibold mb-6 transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Quick Actions
            </h3>
            <div className="space-y-4">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-[1.02] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                🚨 Report New Issue
              </button>
              <button className={`w-full p-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-[1.02] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isDarkMode 
                  ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
              }`}>
                🗺️ Browse Issue Map
              </button>
              <button className={`w-full p-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-[1.02] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isDarkMode 
                  ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
              }`}>
                👤 Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 