import React, { useState } from 'react';

export const DynamicImage = ({ image, author, text }) => {
  const [imageUrl, setImageUrl] = useState(image);
  const [error, setError] = useState(false);

  const handleImageError = () => {
    setError(true);
    setImageUrl("/placeholder.webp");
  };

  if (error) {
    return null;
  }

  return (
    <div className="relative flex flex-col gap-2">
      <img
        src={imageUrl}
        className="object-cover sm:max-w-[500px]"
        alt="image"
        onError={handleImageError}
      />
      {/* Optionally display the text or author info here */}
    </div>
  );
};

export default DynamicImage;
