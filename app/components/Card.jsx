// Card.js
import React from 'react';

const Card = ({ title, content, imageUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-32 object-cover mb-4 rounded-md" />
      )}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Card;
