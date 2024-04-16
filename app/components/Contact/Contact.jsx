import React from "react";
import SliderMain from "../SliderMain/SliderMain";
import Image from "next/image";

export default function Contact() {
  const images=[
    "/baggi.jpg", "/mainImg.jpeg", "/baggi.jpg"
  ]
  return (
    <>
      <SliderMain images={images} heading="Contact Us"/>
      <div className="w-full mx-auto flex relative">
        <div className="w-2/3 px-20 pt-[36px] ">
         
        </div>
        <div className="w-1/3 h-[600px] sticky top-20 left-0 p-10 ">
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
    </>
  );
}
