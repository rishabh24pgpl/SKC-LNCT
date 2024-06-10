import React from 'react'

export default function CareerForm() {
  return (

     <div class="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 class="text-2xl font-bold mb-6">Job Application Form</h1>
        <form>
    
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="collegeName">
                    College Name
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="collegeName" type="text" placeholder="LNCTs"></input>
            </div>

          
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                    Job Title
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Software Engineer"></input>
            </div>

         
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="aboutJob">
                    About the Job
                </label>
                <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="aboutJob" placeholder="Join our dynamic team of software engineers to work on cutting-edge projects."></textarea>
            </div>

          
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="resume">
                    Resume
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="resume" type="file"></input>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="package">
                    Package (Annual Salary)
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="package" type="number" placeholder="80000"></input>
            </div>

          
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="qualification">
                    Qualification
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="qualification" type="text" placeholder="Bachelor's degree in Computer Science or related field"></input>
            </div>

           
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="isOpen">
                    Is Position Open?
                </label>
                <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="isOpen">
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </div>

          
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="openPosition">
                    Open Position
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="openPosition" type="text" placeholder="Senior Software Engineer"></input>
            </div>

           
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="skills">
                    Skills
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="skills" type="text" placeholder="JavaScript, Python, React, Node.js"></input>
            </div>

          
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="relevantExperience">
                    Relevant Experience
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="relevantExperience" type="text" placeholder="Minimum 5 years of experience in software development"></input>
            </div>

          
            <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Submit
                </button>
            </div>
        </form>
    </div>
   
  )
}
