// src/MainContent.js
import React from 'react';
import FrameGenerator from './components/DragDrop.js';
import PersonalizeFeed from './components/PersonalizeFeed';

const MainContent = () => {
  return (
    <div className="flex flex-row flex-grow">
      <FrameGenerator />
      <PersonalizeFeed />
    </div>
  );
};

export default MainContent;
