import React from "react";
import Image from "next/image";

export default function RegularActivite({ title, content }) {
  return (
    <>
     <div
        className="w-full h-36 flex justify-center  items-center"
        style={{
          // backgroundImage: "url('/logo1.png')",
          backgroundColor: "#1889a2",
          backgroundSize: "cover",
        }}
      >
        <h1 className=" uppercase font-bold text-5xl">Department Of Career Development </h1>
      </div>
      
      {/* <div className="text-center w-3/4 mx-auto   rounded-b-2xl ">
        <h1 className=" font-semibold text-4xl p-2 ">Regular Activite</h1>
        <p className="text-md pb-2">Department for Career Development</p>
      </div> */}

      <div className="flex mx-auto  px-20 pt-20">
        <div>
          <h1 className="text-4xl">Our Activities</h1>
          <ul className=" p-10 list-disc">
            <li>
              Arranging in Campus, Pool Campus and Off Campus for Corporate in
              Offline and online Mode.
            </li>
            <li>Aptitude &Training Classes</li>
            <li>Personality Development Training</li>
            <li>Organizing Mock Interviews and GD.</li>
            <li>Mock Tests and Company Specific Training.</li>
            <li>Placed students Interactions.</li>
            <li>Entrepreneurship Cell</li>
            <li>Industry Institute Partnership Cell</li>
          </ul>
        </div>
        <div>
          <Image src="/RA1.png" alt="ok" width={500} height={400} />
        </div>
      </div>

      <div className="flex mx-auto  px-20 pt-20">
        <div className="">
          <Image src="/RA1.png" alt="ok" width={800} height={400} />
        </div>
        <div>
          <h1 className="text-4xl">IT Training</h1>
          <ul className=" p-10 list-disc ">
            <li>
              Training on C/C++, Java, Python, Data Structure, DBMS, and
              Competitive Coding to make students ready for IT Industry
            </li>
            <li>
              Training on Emerging Technologies – Artificial Intelligence,
              Machine Learning, Cyber Security, Data Science, Cloud Computing,
              Internet of Things, Block chain and Sales force.
            </li>
            <li>Programming and IT Subjects Training for Non CS-IT students</li>
            <li>Full stack project training for students</li>
            <li>Regular Programming Assessments and Hackthons.</li>
          </ul>
        </div>
        <div>
          
        </div>
      </div>
      <div className=" p-10 ">
        <h1 className="text-4xl text-center font-semibold ">
          About Principal
        </h1>
        <div className="w-full mx-auto pt-5 ml-15">
          <div className="flex  mx-auto justify-center  items-center">
            <div className="bg-white w-[750px]   h-[330px] text-black  p-10 translate-x-[5rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ">
              <h1 className="text-2xl pb-2">Principal</h1>
              <p className="">
                Our Training and Placement Cell not only onboards companies for
                campus placements but also strives to bridge the gap between the
                institute and industry through various initiatives. We organize
                regular workshops, seminars, and expert sessions to help
               
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
                src="/cdc-1.jpg.webp"
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
