import FacultyCard from "@/app/components/FacultyCard/FacultyCard";
import SliderMain from "@/app/components/SliderMain/SliderMain";
import Image from "next/image";
import React from "react";

export default function page() {
  const images=[
    "/baggi.jpg", "/mainImg.jpeg", "/baggi.jpg"
  ]
  return (
    <div>
     <SliderMain images={images} heading="Former directors"/>
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
