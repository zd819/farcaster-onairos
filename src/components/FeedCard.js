import React from 'react';
import { DynamicImage } from './DynamicImage'; // You need to create this component based on the example

const FeedCard = ({ image, author, text }) => {
  return (
    <div className="p-4 border-b border-gray-300">
      <DynamicImage image={image} author={author} text={text} />
      <p className="mt-2 font-bold text-gray-500">@{author}</p>
      <p>{text}</p>
    </div>
  );
};

export default FeedCard;
