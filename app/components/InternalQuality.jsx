import React from "react";

const CustomComponent = () => {
  return (
    <div className="w-full p-4">
      {/* Full width image */}
      <div className="relative w-full">
        <img
          src="/banner1.jpg" 
          alt="Banner"
          className="w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">
          Internal Quality Assurance Cell (IQAC) Committee</h1>
        </div>
      </div>

      {/* Sentence below the image */}
      <div className="mt-4 w-full p-8">
        <p className="text-xl leading-10 font-semibold">
        In pursuance of its Action Plan for performance evaluation, assessment & accreditation & quality up-gradation of institutions of higher education,
         NAAC proposes that every accredited institution should establish an Internal Quality Assurance Cell (IQAC).
          Since quality enhancement is a continuous process, the IQAC is an integral part of Techno NJR Institute of Technology, Udaipur.  The prime task of the IQAC is to develop a system for conscious, consistent & catalytic improvement in the overall performance of institutions. For this, it will channelize all efforts & measures of the institution towards promoting its holistic academic excellence.
        </p>
      </div>

      {/* Table below the sentence */}
      <div className="mt-4 w-full">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Sr No</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Designation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 text-center">1</td>
              <td className="border border-gray-300 p-2 text-center">CEO</td>
              <td className="border border-gray-300 p-2 text-center">John Doe</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">2</td>
              <td className="border border-gray-300 p-2 text-center">CTO</td>
              <td className="border border-gray-300 p-2 text-center">Jane Smith</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Points list below the table */}
      <div className="mt-4 w-full p-8">
        <p className="text-2xl font-bold py-8">IQAC shall evolve mechanisms and procedures for</p>
        <ol className="list-disc list-inside leading-10 font-semibold text-xl">
          <li>Ensuring timely, efficient, and progressive performance of academic, administrative, and financial tasks.</li>
          <li>The relevance and quality of academic and research programs.</li>
          <li>Equitable access to and affordability of academic programs for various sections of society.</li>
          <li>Optimization and integration of modern methods of teaching and learning.</li>
          <li>The credibility of evaluation procedures.</li>
          <li>Ensuring the adequacy, maintenance, and proper allocation of support structure and services</li>
          <li>Sharing of research findings and networking with other institutions in India and abroad.</li>
        </ol>
      </div>
    </div>
  );
};

export default CustomComponent;
