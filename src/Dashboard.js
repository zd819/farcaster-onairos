// src/Dashboard.js
import React from 'react';
import Profile from './Profile';
import NavigationPane from './NavigationPane';
import MainContent from './MainContent';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <NavigationPane />
      <div className="flex-grow flex flex-col">
        <header className="flex-shrink-0">
          <div className="px-4 py-5 sm:px-6 lg:px-8 bg-white shadow-md flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-900">Welcome to FARMS</h1>
            <Profile />
          </div>
        </header>
        <main className="flex-grow p-6 overflow-auto">
          <MainContent />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
