// src/NavigationPane.js
import React from 'react';

const NavigationPane = () => {
  return (
    <aside className="bg-gray-800 text-gray-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      {/* ... Navigation items here ... */}
      <button className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
        Dashboard
      </button>
      {/* ... more buttons ... */}
    </aside>
  );
};

export default NavigationPane;
