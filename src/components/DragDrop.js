// src/DragDrop.js
import React, { useCallback } from 'react';

const DragDrop = () => {
  const onDrop = useCallback(acceptedFiles => {
    // Handle the files
    console.log(acceptedFiles);
  }, []);

  return (
    <div className="border-4 border-dashed border-gray-400 rounded h-64 flex items-center justify-center">
      <p>Drag 'n' drop some files here, or click to select files</p>
      {/* The input type="file" is hidden and triggered when the div is clicked */}
      <input
        id="file-upload"
        name="file-upload"
        type="file"
        className="sr-only"
        onChange={(event) => onDrop(event.target.files)}
      />
    </div>
  );
};

export default DragDrop;
