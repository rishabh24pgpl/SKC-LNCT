import Image from "next/image";
import React from "react";

export default function AbouttheInstitute() {
  return (
    <>
      <div className=" flex justify-around bg-blue-700">
        <div className="   w-full h-full">
          <h1 className="text-3xl pt-10 pb-5 px-10 ">About the Institute</h1>
          <p className=" text-justify px-10 pb-4">
            NIT Rourkela is one of the premier national level institutions for
            technical education in the country and is funded by the Government
            of India. The Government of India has elevated the Regional
            Engineering College, Rourkela to a university under the name of
            National Institute of Technology, Rourkela.
          </p>
          <p className=" text-justify px-10 pb-5 border-b  ">
            The main objective of the Institute is to produce quality Engineers
            and Scientists in Graduate and Post-Graduate levels in various
            branches of Engineering and Science. The Institute is managed by
            the.
          </p>
          <div className="flex">
            <div className=" p-5 flex items-start">
              <Image
                src="/mission.png"
                alt="mission img"
                width={80}
                height={80}
              />

              <div>

              <h1 className="text-2xl font-semibold text-center mb-2 ">
                mission
              </h1>
              <p className=" p-2 text-justify">
              To become an internationally acclaimed institution of higher
                learning that will serve as a source of knowledge and expertise
                for the society and be a preferred destination for undergraduate
                and graduate studies.
              </p>
              </div>
            </div>
            <div className=" p-5 flex items-start">
              <Image
                src="/vision.png"
                alt="vision img"
                width={80}
                height={80}
              />

             <div>
              <h1 className="text-2xl  font-semibold text-center mb-2">
                Vision
              </h1>
              <p className=" p-2  text-justify mb-4">
                To become an internationally acclaimed institution of higher
                learning that will serve as a source of knowledge and expertise
                for the society and be a preferred destination for undergraduate
                and graduate studies.
              </p>
              </div>
            </div>
          </div>
        </div>

        <div className="  justify-end items-center w-full">
          <h1 className="text-3xl pt-10 px-10  ">Message from Director</h1>
          <div className=" flex justify-around pt-10 p-8">
            <div className="w-full">
            <p className=" p-2  text-pretty  ">
              To become an internationally acclaimed institution of higher
              learning that will serve as a source of knowledge and expertise
              for the society and be a preferred destination for undergraduate
              and graduate studiesTo become an internationally acclaimed
              institution of higher learning that will serve as a source of
              knowledge and expertise for the society and be .
              and graduate studiesTo become an internationally acclaimed
              institution of higher learning that will serve as a source of
              knowledge and expertise for the society and be .
            </p>
            </div>
            <div className="w-full  ">
            <Image src="/founder.png" alt="" height={230} width={400} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
