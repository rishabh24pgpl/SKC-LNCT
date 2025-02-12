'use client';
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Placementview() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        if (Array.isArray(parsedData)) {
          setData(parsedData);
        } else {
          console.error('Saved data is not an array:', parsedData);
        }
      } catch (error) {
        console.error('Error parsing saved data:', error);
      }
    }
  }, []);

  const PlacedStudentCard = ({ student }) => {
    return (
      <div className="max-w-sm rounded-2xl shadow-lg p-4 bg-white">
        <div className="flex flex-col items-center text-center">
          <img className="w-24 h-24 rounded-full border-2 border-gray-300" src={student.picture} alt={student.name} />
          <h2 className="text-xl font-semibold mt-3">{student.name}</h2>
          <p className="text-gray-600 text-sm">{student.collegeName}</p>
          <p className="text-gray-500 text-sm">Class of {student.yearOfPassing}</p>
          <div className="bg-blue-500 text-white px-4 py-1 rounded-full mt-3 text-sm">
            Placed at {student.placedCompany}
          </div>
        </div>
      </div>
    );
  };

  const students = [
    { name: "Alice Johnson", collegeName: "Harvard University", yearOfPassing: 2023, placedCompany: "Google", picture: "/yellow.jpg" },
    { name: "Bob Smith", collegeName: "MIT", yearOfPassing: 2023, placedCompany: "Facebook", picture: "/yellow.jpg" },
    { name: "Charlie Brown", collegeName: "Stanford University", yearOfPassing: 2023, placedCompany: "Apple", picture: "/yellow.jpg" },
    { name: "Alice Johnson", collegeName: "Harvard University", yearOfPassing: 2023, placedCompany: "Google", picture: "/yellow.jpg" },
    { name: "Bob Smith", collegeName: "MIT", yearOfPassing: 2023, placedCompany: "Facebook", picture: "/yellow.jpg" },
    { name: "Charlie Brown", collegeName: "Stanford University", yearOfPassing: 2023, placedCompany: "Apple", picture: "/yellow.jpg" },
    { name: "Alice Johnson", collegeName: "Harvard University", yearOfPassing: 2023, placedCompany: "Google", picture: "/yellow.jpg" },
    { name: "Bob Smith", collegeName: "MIT", yearOfPassing: 2023, placedCompany: "Facebook", picture: "/yellow.jpg" },
    { name: "Charlie Brown", collegeName: "Stanford University", yearOfPassing: 2023, placedCompany: "Apple", picture: "/yellow.jpg" },
    { name: "Alice Johnson", collegeName: "Harvard University", yearOfPassing: 2023, placedCompany: "Google", picture: "/yellow.jpg" },
    { name: "Bob Smith", collegeName: "MIT", yearOfPassing: 2023, placedCompany: "Facebook", picture: "/yellow.jpg" },
    { name: "Charlie Brown", collegeName: "Stanford University", yearOfPassing: 2023, placedCompany: "Apple", picture: "/yellow.jpg" },
    { name: "Alice Johnson", collegeName: "Harvard University", yearOfPassing: 2023, placedCompany: "Google", picture: "/yellow.jpg" },
    { name: "Bob Smith", collegeName: "MIT", yearOfPassing: 2023, placedCompany: "Facebook", picture: "/yellow.jpg" },
    { name: "Charlie Brown", collegeName: "Stanford University", yearOfPassing: 2023, placedCompany: "Apple", picture: "/yellow.jpg" },
    { name: "Alice Johnson", collegeName: "Harvard University", yearOfPassing: 2023, placedCompany: "Google", picture: "/yellow.jpg" },
    { name: "Bob Smith", collegeName: "MIT", yearOfPassing: 2023, placedCompany: "Facebook", picture: "/yellow.jpg" },
    { name: "Charlie Brown", collegeName: "Stanford University", yearOfPassing: 2023, placedCompany: "Apple", picture: "/yellow.jpg" },
    { name: "Bob Smith", collegeName: "MIT", yearOfPassing: 2023, placedCompany: "Facebook", picture: "/yellow.jpg" },
    { name: "Charlie Brown", collegeName: "Stanford University", yearOfPassing: 2023, placedCompany: "Apple", picture: "/yellow.jpg" },

  ];

  return (
    <>
      <div className="w-full h-36 flex justify-center items-center" style={{ backgroundColor: "#1889a2" }}>
        <h1 className="uppercase font-bold text-5xl">Placement Overview</h1>
      </div>
      <div className="p-10">
        <div className="w-full mx-auto pt-5">
          <div className="flex mx-auto justify-center items-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            <div className="bg-white w-[750px] h-[360px] text-black p-10">
              <h1 className="text-2xl pb-2">Bridging the Gap Between Institute and Industry</h1>
              <p>
                Our Training and Placement Cell not only onboards companies for campus placements but also strives to bridge the gap between the institute and industry through various initiatives.
              </p>
            </div>
            <div>
              <Image src="/audi3.jpeg" alt="Image" width={700} height={600} />
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-4xl text-center mt-10 font-semibold">
        Placement <span className="text-red-500">Students</span> List
      </h1>

      <div className="gap-6 w-12/12 mx-auto flex justify-around pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-11/12 mx-auto pt-10 pb-20">
          {students.map((student, index) => (
            <PlacedStudentCard key={index} student={student} />
          ))}
        </div>
      </div>

      <div className="text-center m-12">
        <h2 className="text-3xl font-semibold mb-6">See More</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-medium text-gray-700 mb-3">Placement Reports</h3>
            <a href="/path/to/your/pdf.pdf" target="_blank" className="block text-center text-lg font-medium text-blue-600 hover:underline">
              <img src="/yellow.jpg"></img>
              <p className="text-sm text-gray-700 pt-4">View Placement Reports</p>
            </a>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-medium text-gray-700 mb-3">Brochure</h3>
            <a href="/path/to/your/another-pdf.pdf" target="_blank" className="block text-center text-lg font-medium text-blue-600 hover:underline">
              <img src="/yellow.jpg"></img>
              <p className="text-sm text-gray-700 pt-4">Download Brochure</p>
            </a>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-medium text-gray-700 mb-3">Placement Process</h3>
            <a href="/path/to/another-pdf.pdf" target="_blank" className="block text-center text-lg font-medium text-blue-600 hover:underline">
              <img src="/yellow.jpg"></img>
              <p className="text-sm text-gray-700 pt-4">Placement Process PDF</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
