import React from "react";
import Image from "next/image";
import { FaLocationPin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function GovernorCard({img,name,post,email,phone}) {
  return (
    <div>
      <div className="w-full mt-1 mb-5  p-2  rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] ">
        <div className="w-full flex gap-6 ">
          <div className="w-48 h-40   relative  overflow-hidden rounded-lg">
            <Image
              src={img}
              alt="foddiesssss"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className=" py-4">
            <h1 className="my-2 font-bold text-xl mt-1">
              {name}
            </h1>
            {/* <h1 className="text-sm  mt-1">President</h1> */}
            {/* <h1 className="text-xs  mt-1">
                <FaPhoneAlt className="inline mr-1"/>
                {phone}</h1>
            <h1 className="text-xs  mt-1">
                <MdEmail className="inline mr-1"/>
                {email}</h1> */}
            <h1 className="text-md font-semibold  mt-1 w-96">
              <FaLocationPin className="inline mr-1" />
              {post}
              {/* N.M. Marg,Ballard Estate, P.O. Box: 278,Mumbai-400 001, India */}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
