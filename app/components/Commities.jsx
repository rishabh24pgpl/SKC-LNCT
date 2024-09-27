import React from 'react';

const BannerWithButtons = () => {
  return (
    <div className="w-full p-4">
      {/* Full width banner image with centered text */}
      <div className="relative w-full">
        <img
          src="https://via.placeholder.com/1920x500" // Replace with your banner image
          alt="Banner"
          className="w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Committees</h1>
        </div>
      </div>

      {/* Buttons section below the banner */}
      <div className="mt-6 flex justify-center space-x-4">
        {/* Button 1 */}
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg w-1/5 hover:bg-blue-600">
          Committees Year 2024-2023
        </button>

        {/* Button 2 */}
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg w-1/5 hover:bg-blue-600">
          Committees Year 2023-2022
        </button>

        {/* Button 3 */}
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg w-1/5 hover:bg-blue-600">
          Committees Year 2022-2021
        </button>

        {/* Button 4 */}
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg w-1/5 hover:bg-blue-600">
          Committees Year 2021-2020
        </button>
      </div>
    </div>
  );
};

export default BannerWithButtons;
