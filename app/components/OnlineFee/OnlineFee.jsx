"use client";
import React from "react";
import { useState } from "react";
import RelatedLink from "../RelatedLink/RelatedLink";

export default function Page() {
  const [collegeNameIndex, setCollegeNameIndex] = useState(0);

  const collegeNames = ["NSHMC ", "एसकेसी एलएनसीटी "];

  const Table = () => {
    
  };
  
  return (
    <div>
      <div
        className="w-full h-36 flex justify-center  items-center"
        style={{
        //   backgroundImage: "url('/logo1.png')",
        backgroundColor:"#43b2ff",
          backgroundSize: "cover",
        }}
      >
        <h1 className=" uppercase font-bold text-5xl">Online Fee Payment</h1>
      </div>
          <div className="flex w-full gap-20 justify-center">
          <div className=" m-auto gap-[100px] mt-12 ">
        <img src="/lnctQR.jpg" className="w-[500px] m-auto pb-5"></img>
      </div>
      <div className="w-1/3 h-[600px] sticky top-20 left-0 py-10 ">
          <div className="relative h-full ">
            {/* <RelatedLink /> */}
            <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-black">
          <thead>
            <tr>
              <th className="w-[200px] p-2 border-b-2  border-black text-left font-extrabold text-black">College Account Detail</th>
              {/* <th className="px-4 py-2 border-b-2 border-gray-200 text-left font-semibold text-gray-700">Column 2</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b-2 font-semibold border-black">A/C Holder Name</td>
              <td className="px-4 py-2 border-b-2 border-black">Lakshmi Narain College Of Technology Indore</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b-2 font-semibold border-black">Name of the bank</td>
              <td className="px-4 py-2 border-b-2 border-black">ICICI Bank</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b-2 font-semibold border-black">Branch</td>
              <td className="px-4 py-2 border-b-2 border-black">M.G. Road Branch</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b-2 font-semibold border-black">Account Number</td>
              <td className="px-4 py-2 border-b-2 border-black">656905601726</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b-2 font-semibold border-black">IFSC</td>
              <td className="px-4 py-2 border-b-2 border-black">ICIC0006569</td>
            </tr>
          </tbody>
        </table>
      </div>
          </div>
        </div>
          </div>
      
    </div>
  );
}