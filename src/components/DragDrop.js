// src/DragDrop.js
import React from 'react';

const DragDrop = () => {
  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    // handle files...
  };

  const handleChange = (event) => {
    // handle files...
  };

  return (
    <div
      className="w-full h-64 border-4 border-dashed border-gray-400 rounded-lg cursor-pointer"
      onDrop={handleDrop}
      onDragOver={event => event.preventDefault()}
    >
      <h2 className="text-cente text-lg font-semibold text-gray-900 mb-4">Drag or Select Images</h2>
      <input
        type="file"
        className="w-full h-full opacity-0 cursor-pointer"
        onChange={handleChange}
        multiple
      />
    </div>
  );
};

export default DragDrop;
