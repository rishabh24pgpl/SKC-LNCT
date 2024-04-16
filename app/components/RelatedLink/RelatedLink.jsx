import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function RelatedLink() {
  const links = [
    "link1", 
  "link2",
  "link21",
  "link212",
  "link2121",
  "link212121",
  "link21212",
];
  return (
    <>
      <div className="border-2 w-[400px]  text-black rounded-lg p-3  ">
        <div className="  px-4 p-2 text-xl  font-semibold "> Related-Link</div>

        {links.map((link) => (
          <div key={link} className="text-gray-600 cursor-pointer border-b-2  mx-auto  hover:text-blue-800 px-4 py-3 w-11/12 flex justify-between items-center ">
            <h2 className="text-lg ">{link}</h2>
            <div>
              <IoIosArrowForward size={20} />
            </div>
          </div>
        ))}

        <h1></h1>
      </div>
    </>
  );
}
