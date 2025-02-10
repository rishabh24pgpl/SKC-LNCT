import React from "react";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Monument from "@/app/components/Monument/Monument";

export default function page() {
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
        <h1 className=" uppercase font-bold text-5xl">Welcome To LNCT</h1>
      </div>
      <div
        className="w-full h-screen  "
        style={{ height: "calc(100vh - 60px)" }}
      >
        <div className="w-full flex px-5 py-5  gap-5">
          <div className="w-2/3 ">
            <div className="p-10">
              <h2 className=" tracking-[10px] text-lg text-cyan-700">WELCOME TO</h2>
              <h1 className="my-6 text-4xl  font-bold"> LNCT INDORE</h1>

              <p className=" mt-2 font-extralight text-sm  text-justify">
                
 
 LNCT colleges is first and largest educational group in central India founded and established in 1999 from Bhopal and privileged as the first, self-financed Institute of Madhya Pradesh.
Being biggest group in technical and professional studies, SKC LNCT group is running successfully with 13 units in different fields of Engineering, Pharmacy, Management, Medical, Homeopathy, Dentistry, and Nursing and under graduate courses.
SKC LNCT Group started from capital of Madhya Pradesh and spread area of engineering in 2004 at business capital of Madhya Pradesh, Indore. LNCT Indore was founded in 2004 by “H.K. Education Trust, Bhopal” and all the courses of the institute are approved by AICTE New Delhi, Govt. of India, New Delhi, Department of Technical Education, Govt. of Madhya Pradesh and are affiliated to Rajiv Gandhi Proudyogiki Vishwavidhyalaya, Technical University of Madhya Pradesh, and the MBA programmers are affiliated to Devi Ahilya Vishwavidhyalaya Indore.
              </p>

              <p className=" mt-2 font-extralight text-sm text-justify">
              The Group is committed in highest excellence of professionalism among students for their brighter future. The brand has a strong motivation towards innovation in curriculum implementation. It further aspires to be a part of education revolution in Technical education, impacting futuristic technologies in Indian framework. In this process it aims to be one of the finest providers of job oriented education in India. The Group zests towards creating mindfully creative individuals who can contribute to the development of human community. As a part of this zeal, the group intends to promote entrepreneurial nerve in the budding scholars and involve in research and development through constructive partnership with the industry titans.
              </p>
            </div>
          </div>
          <div className="w-1/3  p-4">
            <div className="relative h-full">
              <Image
                src="/welcome.jpeg"
                alt="foddiesssss"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto py-2 px-20">
        <Monument/>
      </div>
    </>
  );
}
