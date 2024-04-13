import FacultyCard from "@/app/components/FacultyCard/FacultyCard";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      <div
        className="w-full max-h-[300px] min-h-[400px] flex justify-center  items-center"
        style={{
          backgroundImage: "url('/welcome.jpeg')",
          backgroundSize: "cover",
        }}
      >
        <h1 className=" uppercase font-bold text-5xl">former directors</h1>
      </div>
      <div className="w-full mx-auto flex relative">
        <div className="w-1/2 px-20 pt-[36px]">
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
