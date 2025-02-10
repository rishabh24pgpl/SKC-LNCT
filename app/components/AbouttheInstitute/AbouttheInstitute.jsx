import Image from "next/image";
import React from "react";
export default function AbouttheInstitute() {
  return (
    <>
      <div className="  w-11/12 mx-auto mt-10 justify-around bg-gradient-to-r from-cyan-900 to-cyan-900">
        <div className="   ">
          <h1 className="text-4xl lg:pt-10 lg:pb-5 lg:px-10 p-4 ">
            About the Institute
          </h1>
          <p className="  lg:px-10 lg:pb-4 p-3">
          Lakshmi Narain College of Technology, Indore (LNCT) is one of the leading private Technical and Professional institutes in Indore today, having campus in lush green out skirts of Indore. LNCT Indore was founded in 2004 by H.K. Education Trust, Bhopal and all the courses of the institute are approved by AICTE Delhi, Govt. of India. Department of the Technical Education, Govt. of M.P. and are affiliated to Rajiv Gandhi Proudyogikis Vishwavidyalaya, Technical Unsiversity of Madhya Pradesh and Devi Ahiliya Vishwavidyalaya (University) Indore.

For the undergraduate courses, the admission is through the national-level engineering entrance examination: AIEEE and MPPET. For the postgraduate courses, the entry is through GATE for MTech, NIMCET for MCA or through an institute-conducted entrance test.
          </p>
          <p className="  lg:px-10 lg:pb-5 border-b p-3 ">
            The main objective of the Institute is to produce quality Engineers
            and Scientists in Graduate and Post-Graduate levels in various
            branches of Engineering and Science. 
          </p>
          <div className="flex lg:flex-row flex-col mt-3 lg:mt-0 ">
            <div className=" lg:p-10 p-3  flex items-start">
              <div>
                <h1 className="text-2xl font-semibold text-center mb-2 ">
                  MISSION
                </h1>
                <p className=" p-2 ">
                  To become an internationally acclaimed institution of higher
                  learning that will serve as a source of knowledge and
                  expertise for the society and be a preferred destination for
                  undergraduate and graduate studies.
                </p>
              </div>
            </div>
            <div className=" lg:p-10 p-3 flex items-start">
              <div>
                <h1 className="text-2xl  font-semibold text-center mb-2">
                  VISION
                </h1>
                <p className=" p-2   mb-4">
                  To become an internationally acclaimed institution of higher
                  learning that will serve as a source of knowledge and
                  expertise for the society and be a preferred destination for
                  undergraduate and graduate studies.
                </p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-4xl  border-t p-4 lg:px-10  ">
          Message from Director
        </h1>
        <div className=" flex  justify-between items-center w-full">
          <div className=" flex lg:flex-row flex-col justify-between pt-1 lg:px-10">
            <div className="w-full">
              <p className=" p-2     ">
                To become an internationally acclaimed institution of higher
                learning that will serve as a source of knowledge and expertise
                for the society and be a preferred destination for undergraduate
                and graduate studiesTo become an internationally acclaimed
                institution of higher learning that will serve as a source of
                knowledge and expertise for the society and be . and graduate
                studiesTo become an internationally acclaimed institution of
                higher learning that will serve as a source of knowledge and
                expertise for the society and be . and graduate studiesTo become
                an internationally acclaimed institution of higher learning that
                will serve as a source of knowledge and expertise for the
                society and be . and graduate studiesTo become an
                internationally acclaimed institution of higher learning that
                will serve as a source of knowledge and expertise for the
                society and be .
              </p>
            </div>
            <div className="w-96  flex items-end ">
              <img src="/founderr.png" alt="" className=" w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
