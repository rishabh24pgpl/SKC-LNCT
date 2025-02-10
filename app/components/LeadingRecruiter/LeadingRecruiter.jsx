import Image from "next/image";
import React from "react";

export default function LeadingRecruiter({ title, content }) {
  return (
    <>
      <div
        className="w-full h-36 flex justify-center  items-center"
        style={{
          // backgroundImage: "url('/logo1.png')",
          backgroundColor: "#1889a2",
          backgroundSize: "cover",
        }}
      >
        <h1 className=" uppercase font-bold text-5xl">Leading Recruiters</h1>
      </div>
      {/* <div className="text-center w-3/4 mx-auto  ">
        <h1 className=" font-semibold text-4xl p-2 ">Leading Recruiters</h1>
        <p className="text-md pb-2">Hiring Companys </p>
      </div> */}

      <div className="w-full mx-auto pt-5 pb-10 ml-15">
        <div className="flex  mx-auto justify-center  items-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
          <div className="bg-white w-[750px]   h-[360px] text-black  p-10 translate-x-[5rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  ">
            <h1 className="text-2xl font-bold pb-2 text-center">Overview</h1>
            <div className=" p-2 justify-center items-center">
              <h1 className=" pb-2 text-center">
              Lakshmi Narain College of Technology (LNCT) has established itself as a premier institute for nurturing industry-ready professionals, attracting top recruiters from diverse sectors. 
              Renowned companies like Wipro, IBM, Datapure, and eVitamins consistently recognize the exceptional talent and skills of LNCT graduates, offering them opportunities to excel in dynamic roles. 
              With a robust curriculum, state-of-the-art facilities, and dedicated placement support, LNCT ensures students are equipped to meet industry demands. 
              The colleges strong focus on innovation, technical expertise, and soft skills development makes it a preferred destination for leading recruiters seeking to build their future-ready workforce.
              </h1>
            </div>
          </div>
          <div className="">
            <Image src="/audi1.jpeg" alt="asdfghjk" width={700} height={600} />
          </div>
        </div>
      </div>

      <div className="flex mx-auto  px-20 pt-20">
        <div className="">
          <Image src="/RA1.png" alt="ok" width={800} height={400} />
        </div>
        <div>
          <h1 className="text-4xl">IT Recruiter Required Skills</h1>
          <ul className=" p-10 list-disc ">
            <li>
              Training on C/C++, Java, Python, Data Structure, DBMS, and
              Competitive Coding to make students ready for IT Industry
            </li>
            <li>
              Training on Emerging Technologies – Artificial Intelligence,
              Machine Learning, Cyber Security, Data Science, Cloud Computing,
              Internet of Things, Block chain and Sales force.
            </li>
            <li>Programming and IT Subjects Training for Non CS-IT students</li>
            <li>Full stack project training for students</li>
            <li>Regular Programming Assessments and Hackthons.</li>
          </ul>
        </div>
      </div>

      <div className=" border-b-2   w-3/4 mx-auto  rounded-b-2xl ">
        <h1 className=" font-semibold text-4xl p-2  text-center">
          Our Recruiters
        </h1>
      </div>
      <div className=" flex justify-around p-10">
        <Image src="/intellicus.png" alt="company logo " width={200} height={200} />
        <Image src="/Datapure.jpg" alt="company logo " width={200} height={200} />
        <Image src="/E vitamin.jpg" alt="company logo " width={200} height={200} />
        <Image src="/Hiremee.jpg" alt="company logo " width={200} height={200} />
      </div>
      <div className=" flex justify-around p-10">
        <Image src="/V2solution.jpg" alt="company logo " width={200} height={200} />
        <Image src="/Wipro.png" alt="company logo " width={200} height={200} />
        <Image src="/cp-4.jpg" alt="company logo " width={200} height={200} />
        <Image src="/ibm.png" alt="company logo " width={200} height={200} />
      </div>
    </>
  );
}
