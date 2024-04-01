import FacultyCard from "@/app/components/FacultyCard/FacultyCard";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      <div
        className="w-full h-96 flex justify-center  items-center"
        style={{
          backgroundImage: "url('/logo1.png')",
          backgroundSize: "cover",
        }}
      >
        <h1 className=" uppercase font-bold text-5xl">former directors</h1>
      </div>
      <div className="w-full mx-auto flex relative">
        <div className="w-1/2 p-20 ">
          <FacultyCard />
          <FacultyCard />
          <FacultyCard />
          <FacultyCard />
          <FacultyCard />
          <FacultyCard />
          <FacultyCard />
          <FacultyCard />
          <FacultyCard />
        </div>
        <div className="w-1/2 h-[600px] sticky top-20 left-0 p-10 ">
        <div className="relative h-full ">
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
  );
}
