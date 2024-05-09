import Image from "next/image";
import React from "react";

export default function Faculty() {
  return (
    <>
      <div className="">
        <div className="mb-10">
          <h1 className=" font-semibold text-4xl border-b-2 p-8 text-center w-3/4 mx-auto border-blue-600 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-b-2xl">
            Faculty At SKC LNCT
          </h1>
        </div>
        <div className=" text-blue-600    relative  mx-auto border-2">
          <Image src="/clg.jpg" alt="" fill />
          <div className="p-4">
            <h1 className="  text-5xl relative">200+</h1>
            <h1 className=" text-white text-2xl relative">
              Engineering Faculty
            </h1>
            <h1 className="  text-5xl relative">30+</h1>
            <h1 className=" text-white text-2xl relative">
              Management Faculty
            </h1>
            <h1 className="  text-5xl relative">32</h1>
            <h1 className=" text-white text-2xl relative">Supportive Staff</h1>
            <h1 className="  text-5xl relative">32</h1>
            <h1 className=" text-white text-2xl relative">
              Management Faculty{" "}
            </h1>
          </div>
        </div>
      </div>
      <div className=" p-10 ">
        <h1 className="text-4xl text-center text-blue-700 border-b-2 border-blue-500 font-semibold ">
          About Principal
        </h1>
        <div className="w-full mx-auto pt-5 ml-15">
          <div className="flex  mx-auto justify-center  items-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
            <div className="bg-white w-[750px]   h-[360px] text-black  p-10 translate-x-[5rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ">
              <h1 className="text-2xl pb-2">Principal</h1>
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
                yielded measurable outcomes, as evidenced by our students' high
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

      <div className="flex  justify-around pt-10 pb-10 ">
        <div className=" shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-80  flex-col flex  items-center p-2 ">
          <Image src="/logo1.jpeg" alt="" width={200} height={200} />
          <Image src="/founder.png" alt="" width={200} height={200} />
          <h1 className="text-2xl p-1">Faculty Name</h1>
          <h1 className="">qualification</h1>
          <h1 className="">Year of experience</h1>
        </div>
        <div className=" shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-80  flex-col flex  items-center p-2 ">
          <Image src="/logo1.jpeg" alt="" width={200} height={200} />
          <Image src="/founder.png" alt="" width={200} height={200} />
          <h1 className="text-2xl p-1">Faculty Name</h1>
          <h1 className="">qualification</h1>
          <h1 className="">Year of experience</h1>
        </div>
        <div className=" shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-80  flex-col flex  items-center p-2 ">
          <Image src="/logo1.jpeg" alt="" width={200} height={200} />
          <Image src="/founder.png" alt="" width={200} height={200} />
          <h1 className="text-2xl p-1">Faculty Name</h1>
          <h1 className="">qualification</h1>
          <h1 className="">Year of experience</h1>
        </div>
      </div>
    </>
  );
}
