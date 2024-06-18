import Image from "next/image";
import React from "react";

export default function Placementcell({ img, title, content }) {
  return (
    <>
      <div className="w-full">
        <div className="relative bg-gradient-to-r from-blue-700 via-red-700 to-red-500 text-white overflow-hidden ">
          {/* SVG Waves */}
          <svg
            id="wave"
            className="absolute bottom-0 left-0 w-full"
            style={{ transform: "rotate(0deg)", transition: "0.3s" }}
            viewBox="0 0 1440 190"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stopColor="rgba(245, 245, 245, 0.21)" offset="0%" />
                <stop stopColor="rgba(245, 245, 245, 0.1)" offset="100%" />
              </linearGradient>
            </defs>
            <path
              style={{ transform: "translate(0, 0px)", opacity: 0.8 }}
              fill="url(#sw-gradient-0)"
              d="M0,95L21.8,79.2C43.6,63,87,32,131,25.3C174.5,19,218,38,262,57C305.5,76,349,95,393,91.8C436.4,89,480,63,524,72.8C567.3,82,611,127,655,120.3C698.2,114,742,57,785,38C829.1,19,873,38,916,41.2C960,44,1004,32,1047,44.3C1090.9,57,1135,95,1178,95C1221.8,95,1265,57,1309,57C1352.7,57,1396,95,1440,98.2C1483.6,101,1527,70,1571,60.2C1614.5,51,1658,63,1702,69.7C1745.5,76,1789,76,1833,88.7C1876.4,101,1920,127,1964,133C2007.3,139,2051,127,2095,104.5C2138.2,82,2182,51,2225,44.3C2269.1,38,2313,57,2356,69.7C2400,82,2444,89,2487,101.3C2530.9,114,2575,133,2618,117.2C2661.8,101,2705,51,2749,50.7C2792.7,51,2836,101,2880,126.7C2923.6,152,2967,152,3011,126.7C3054.5,101,3098,51,3120,25.3L3141.8,0L3141.8,190L3120,190C3098.2,190,3055,190,3011,190C2967.3,190,2924,190,2880,190C2836.4,190,2793,190,2749,190C2705.5,190,2662,190,2618,190C2574.5,190,2531,190,2487,190C2443.6,190,2400,190,2356,190C2312.7,190,2269,190,2225,190C2181.8,190,2138,190,2095,190C2050.9,190,2007,190,1964,190C1920,190,1876,190,1833,190C1789.1,190,1745,190,1702,190C1658.2,190,1615,190,1571,190C1527.3,190,1484,190,1440,190C1396.4,190,1353,190,1309,190C1265.5,190,1222,190,1178,190C1134.5,190,1091,190,1047,190C1003.6,190,960,190,916,190C872.7,190,829,190,785,190C741.8,190,698,190,655,190C610.9,190,567,190,524,190C480,190,436,190,393,190C349.1,190,305,190,262,190C218.2,190,175,190,131,190C87.3,190,44,190,22,190L0,190Z"
            />
            <defs>
              <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
                <stop stopColor="rgba(255, 255, 255, 1)" offset="0%" />
                <stop stopColor="rgba(255, 255, 255, 1)" offset="100%" />
              </linearGradient>
            </defs>
            <path
              style={{ transform: "translate(0, 50px)", opacity: 1.0 }}
              fill="url(#sw-gradient-1)"
              d="M0,114L21.8,110.8C43.6,108,87,101,131,85.5C174.5,70,218,44,262,31.7C305.5,19,349,19,393,31.7C436.4,44,480,70,524,79.2C567.3,89,611,82,655,88.7C698.2,95,742,114,785,123.5C829.1,133,873,133,916,126.7C960,120,1004,108,1047,107.7C1090.9,108,1135,120,1178,120.3C1221.8,120,1265,108,1309,95C1352.7,82,1396,70,1440,82.3C1483.6,95,1527,133,1571,123.5C1614.5,114,1658,57,1702,31.7C1745.5,6,1789,13,1833,22.2C1876.4,32,1920,44,1964,53.8C2007.3,63,2051,70,2095,85.5C2138.2,101,2182,127,2225,129.8C2269.1,133,2313,114,2356,101.3C2400,89,2444,82,2487,82.3C2530.9,82,2575,89,2618,101.3C2661.8,114,2705,133,2749,120.3C2792.7,108,2836,63,2880,38C2923.6,13,2967,6,3011,15.8C3054.5,25,3098,51,3120,63.3L3141.8,76L3141.8,190L3120,190C3098.2,190,3055,190,3011,190C2967.3,190,2924,190,2880,190C2836.4,190,2793,190,2749,190C2705.5,190,2662,190,2618,190C2574.5,190,2531,190,2487,190C2443.6,190,2400,190,2356,190C2312.7,190,2269,190,2225,190C2181.8,190,2138,190,2095,190C2050.9,190,2007,190,1964,190C1920,190,1876,190,1833,190C1789.1,190,1745,190,1702,190C1658.2,190,1615,190,1571,190C1527.3,190,1484,190,1440,190C1396.4,190,1353,190,1309,190C1265.5,190,1222,190,1178,190C1134.5,190,1091,190,1047,190C1003.6,190,960,190,916,190C872.7,190,829,190,785,190C741.8,190,698,190,655,190C610.9,190,567,190,524,190C480,190,436,190,393,190C349.1,190,305,190,262,190C218.2,190,175,190,131,190C87.3,190,44,190,22,190L0,190Z"
            />
          </svg>

          {/* Text and Image Content */}
          <div className="flex ">
            {/* Detail Page SVG or Image */}
            <div className=" lg:w-1/3   relative h-96 order-2 p-10 hidden lg:block ">
              {/* Replace 'detail-page.svg' with your actual SVG */}
              <Image
                src={img}
                alt="foddiesssss"
                layout="fill"
                objectFit="contain"
                className=" mt-10 "
              />
            </div>
            {/* Text Content */}
            <div className=" w-full lg:w-2/3 p-2 order-1">
              <h1 className=" lg:text-left text-center mt-2  lg:px-8 lg:mt-6 text-4xl font-bold text-shadow-[1px_1px_3px_#000000]">
                {title}
              </h1>
              <p className="lg:px-10  lg:py-6  px-4 py-8 text-sm lg:text-base">
                {content}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" p-10 ">
        <h1 className="text-4xl text-center text-blue-700 border-b-2 border-blue-500">
          Overview...
        </h1>
        <div className="w-full mx-auto pt-5 ml-20">
          <div className="flex  mx-auto">
            <div className="">
              <Image
                src="/audi1.jpeg"
                alt="asdfghjk"
                width={700}
                height={600}
              />
            </div>
            <div className="bg-blue-500 w-[750px] text-white  p-10 translate-x-[-10rem] translate-y-12 opacity-80 ">
              <h1 className="text-2xl pb-2">
                Bridging the Gap Between Institute and Industry
              </h1>
              <p>
                Our Training and Placement Cell not only onboards companies for
                campus placements but also strives to bridge the gap between the
                institute and industry through various initiatives. We organize
                regular workshops, seminars, and expert sessions to help
                students stay up-to-date with the latest industry trends and
                practices. Our team also works closely with industry experts to
                develop and update our curriculum to ensure that it meets the
                evolving needs of the industry. Furthermore, we provide students
                with opportunities for internships, live projects, and
                industrial visits, which help them gain practical experience and
                prepare them for their future careers. These initiatives have
                yielded measurable outcomes, as evidenced by our students&apos; high
                placement rates and successful careers after graduation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10">
        <div>
          <h1 className="text-4xl text-blue-700 pb-10 font-semibold ">
            Internship At  LNCT
          </h1>
        </div>
        <div className=" text-blue-600    relative  mx-auto border-2">
          <Image src="/clg.jpg" alt="" fill />
          <div className="p-4">
            <h1 className="  text-5xl relative">2000+</h1>
            <h1 className=" text-white text-2xl relative">
              Internship Offered
            </h1>
            <h1 className="  text-5xl relative">300++</h1>
            <h1 className=" text-white text-2xl relative">Companies Visited</h1>
            <h1 className="  text-5xl relative">INR 32,000</h1>
            <h1 className=" text-white text-2xl relative">
              Per Month Average Stipend
            </h1>
            <h1 className="  text-5xl relative">INR 1.10 LPM</h1>
            <h1 className=" text-white text-2xl relative">Highest Stipend</h1>
          </div>
        </div>
      </div>

      <div className=" p-10 ">
        <h1 className="text-4xl text-center text-blue-700 border-b-2 border-blue-500 font-semibold ">
          Overview...
        </h1>
        <div className="w-full mx-auto pt-5 ml-15">
          <div className="flex  mx-auto justify-center  items-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]" >
            <div className="bg-white w-[750px]   h-[360px] text-black  p-10 translate-x-[5rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ">
              <h1 className="text-2xl pb-2">
                Bridging the Gap Between Institute and Industry
              </h1>
              <p>
                Our Training and Placement Cell not only onboards companies for
                campus placements but also strives to bridge the gap between the
                institute and industry through various initiatives. We organize
                regular workshops, seminars, and expert sessions to help
                students stay up-to-date with the latest industry trends and
                practices. Our team also works closely with industry experts to
                develop and update our curriculum to ensure that it meets the
                evolving needs of the industry. Furthermore, we provide students
                with opportunities for internships, live projects, and
                industrial visits, which help them gain practical experience and
                prepare them for their future careers. These initiatives have
                yielded measurable outcomes, as evidenced by our students&apos; high
                placement rates and successful careers after graduation.
              </p>
            </div>
            <div className="">
              <Image
                src="/audi1.jpeg"
                alt="asdfghjk"
                width={700}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
