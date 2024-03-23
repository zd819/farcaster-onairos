// src/MainContent.js
import React from 'react';
import FrameGenerator from './components/FramesGenerator.js';
import PersonalizeFeed from './components/PersonalizeFeed.js';

const MainContent = () => {
  return (
    <div className="flex flex-row flex-grow justify-center items-start">
      <FrameGenerator />
      <PersonalizeFeed />
    </div>
  );
};

export default MainContent;
