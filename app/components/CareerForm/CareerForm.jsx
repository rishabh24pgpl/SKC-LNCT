import React from 'react'

export default function CareerForm() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form action="#" method="post" className="bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Career Form</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="collegeName" className="block text-sm font-medium text-gray-700">College Name</label>
            <input type="text" name="collegeName" id="collegeName" required className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Job Title</label>
            <input type="text" name="title" id="title" required className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="aboutJob" className="block text-sm font-medium text-gray-700">About Job</label>
            <textarea name="aboutJob" id="aboutJob" required className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" rows="4"></textarea>
          </div>
          <div>
            <label htmlFor="package" className="block text-sm font-medium text-gray-700">Package</label>
            <input type="number" name="package" id="package" className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="qualification" className="block text-sm font-medium text-gray-700">Qualification</label>
            <input type="text" name="qualification" id="qualification" required className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="flex items-center">
            <label htmlFor="isOpen" className="block text-sm font-medium text-gray-700 mr-2">Is Open</label>
            <input type="checkbox" name="isOpen" id="isOpen" className="mt-1" />
          </div>
          <div>
            <label htmlFor="openPosition" className="block text-sm font-medium text-gray-700">Open Position</label>
            <input type="text" name="openPosition" id="openPosition" className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Skills</label>
            <input type="text" name="skills" id="skills" className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="relaventExperience" className="block text-sm font-medium text-gray-700">Relevant Experience</label>
            <input type="text" name="relaventExperience" id="relaventExperience" className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="createdBy" className="block text-sm font-medium text-gray-700">Created By</label>
            <input type="text" name="createdBy" id="createdBy" className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="updatedBy" className="block text-sm font-medium text-gray-700">Updated By</label>
            <input type="text" name="updatedBy" id="updatedBy" className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
        </div>
        <div className="pt-4 text-center">
          <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
        </div>
      </form>
    </div>
  )
}
