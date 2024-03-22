// src/Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Welcome to FARMS</h1>
          <div className="flex items-center">
            <span className="mr-3">User Name</span>
            <img className="h-8 w-8 rounded-full" src="path/to/user/icon" alt="User Icon"/>
          </div>
        </div>
      </header>
      <aside className="bg-gray-800">
        {/* Navigation tabs */}
      </aside>
      <main>
        {/* Main dashboard content */}
      </main>
    </div>
  );
};

export default Dashboard;
