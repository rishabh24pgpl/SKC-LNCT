import FacultyCard from "@/app/components/FacultyCard/FacultyCard";
import GovernorCard from "@/app/components/GovernorCard/GovernorCard";
import RelatedLink from "@/app/components/RelatedLink/RelatedLink";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <div>
        <div
          className="w-full h-36 flex justify-center  items-center"
          style={{
            // backgroundImage: "url('/logo1.png')",
            backgroundColor: "#1889a2",
            backgroundSize: "cover",
          }}
        >
          <h1 className=" uppercase font-bold text-5xl">board of governors</h1>
        </div>
        <div className="w-full mx-auto flex relative mt-2  font-semibold text-lg">
          <div className="w-2/3 px-10 pt-[36px]">
            <h1 className="my-1 p-2">Board of Governers (Members)</h1>
            <GovernorCard
              img="/md-sir.JPG"
              name={"Mr. Suprabhat Chouksey"}
              // email={"president@nshmcbhopal.com"}
              // phone={"808878987"}
              post={"president ,NSHMC"}
            />

            <GovernorCard
              img="/chairperson.png"
              name={"Mrs. Pratibha Chouksey"}
              // email={"Vice-president@nshmcbhopal.com"}
              // phone={"808878987"}
              post={"Vice-president,NSHMC"}
            />

            <GovernorCard
              img="/ambrish.jpg"
              name={"Mr. Ambrish Chouksey "}
              // email={"Secretary@nshmcbhopal.com"}
              // phone={"808878987"}
              post={"Secretary,NSHMC"}
            />

            <GovernorCard
              img="/dhriti.jpg"
              name={"Mrs. Dhriti Soni "}
              // email={"Treasurer@nshmcbhopal.com"}
              // phone={"808878987"}
              post={"Treasurer,NSHMC"}
            />

            {/* <GovernorCard
              img="/rohini.jpeg"
              name={"Mrs. Rohani Hirvae "}
              email={"Member@nshmcbhopal.com"}
              phone={"808878987"}
              post={"Member,NSHMC"}
            /> */}

            <GovernorCard
              img="/sandhyamaam.jpg"
              name={"Mrs. Sandhya Chouksey "}
              // email={"Member@nshmcbhopal.com"}
              // phone={"808878987"}
              post={"Member,NSHMC"}
            />

            {/* <GovernorCard
              img="/ashok.jpg"
              name={"Mr. Ashok "}
              email={"Member@nshmcbhopal.com"}
              phone={"808878987"}
              post={"Member,NSHMC"}
            /> */}
          </div>
          <div className="w-1/3 h-[600px] sticky top-20 left-0  py-10 ">
            <RelatedLink />
          </div>
        </div>
      </div>
    </>
  );
}
