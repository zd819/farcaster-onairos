// src/FrameGenerator.js
import React from 'react';
// import DragDrop from './DragDrop';
import LlmInput from './LlmInput';
import ImageUploadButton from './DragDrop';

const FrameGenerator = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Frames Automation</h2>
      <ImageUploadButton />
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Generate Frame</h2>
      <LlmInput Title={"Describe you want to design your frames using optional uploaded files"}/>
    </div>
  );
};

export default FrameGenerator;
