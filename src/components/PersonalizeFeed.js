// src/PersonalizeFeed.js
import React from 'react';
import LlmInput from './LlmInput';

const PersonalizeFeed = () => {
  // Replace with actual frame data
  const frames = ['Frame 1', 'Frame 2', 'Frame 3']; // etc.

  return (
    <div className="flex flex-col items-center justify-center flex-1 p-6">
        <LlmInput/>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recommendation Management</h2>
        <div className="overflow-auto h-64 w-full border border-gray-400">
            {frames.map((frame, index) => (
            <div key={index} className="p-2 border-b border-gray-300">
                {frame}
            </div>
            ))}
        </div>
    </div>
  );
};

export default PersonalizeFeed;
