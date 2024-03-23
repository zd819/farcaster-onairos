// src/PersonalizeFeed.js
import React from 'react';
import DragDrop from './DragDrop';

const PersonalizeFeed = () => {
  return (
    <div className="flex-1 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Order/Personalize Feed</h2>
      {/* Drag and Drop component will go here */}
      <DragDrop />
    </div>
  );
};

export default PersonalizeFeed;
