import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export default function NoticeCard({img,content,link}) {
  return (
    <>
      <div className="w-full h-[440px] border-2 border-orange-500 flex flex-col  items-center rounded-lg overflow-hidden">
        <div className="w-full h-[210px]  relative overflow-hidden">
          <Image
            src="/ar-1.jpg"
            fill
            className=" hover:transform hover:scale-125 duration-500"
          />
        </div>
        <div className=" w-full h-[170px] overflow-hidden text-black ">
            <p className="p-2 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, consequatur commodi. Saepe sint, molestias hic eum perspiciatis tenetur nulla consectetur, iste voluptatibus illum recusandae.
            </p>
        </div>
        <div className=" h-[60px] w-full  bg-opacity-40 flex justify-between items-center hover:bg-orange-700 hover:text-white text-orange-600 transform transition-all duration-700 border-orange-600 border-t-2">
          <h1 className="p-4 text-xl ">Know More</h1>
          <h1 className="mr-10">
           
            <IoIosArrowForward size={25} />
          </h1>
        </div>
      </div>
    </>
  );
}
