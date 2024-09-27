'use client';
import React, { useState } from 'react';

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    package: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({
        ...formData,
        imageUrl: reader.result
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const saveData = () => {
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Data saved to localStorage!');
    setFormData({
      name: '',
      companyName: '',
      package: '',
      imageUrl: ''
    });
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Save Your Details</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your company name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="package" className="block text-sm font-medium text-gray-700">Package</label>
          <input
            type="text"
            id="package"
            name="package"
            value={formData.package}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter package amount"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="file"
            id="imageUrl"
            name="imageUrl"
            onChange={handleFileChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="button"
          onClick={saveData}
          className="w-full bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-600"
        >
          Save Data
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
