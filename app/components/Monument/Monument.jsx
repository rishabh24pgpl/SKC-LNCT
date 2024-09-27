"use client";

import Image from "next/image";
import React, { useState } from "react";

const Monument = () => {
  const [activeSection, setActiveSection] = useState(1);

  const sections = [
    {
      id: 1,
      title: "Vision",
      content:
        "Our vision at LNCT Indore is to emerge as a premier institution of higher education known for its commitment to excellence, innovation, and inclusivity. We aspire to create a vibrant learning community where diversity is celebrated, creativity is encouraged, and intellectual curiosity thrives. By fostering a culture of collaboration, critical thinking, and lifelong learning, we seek to empower our students to become leaders in their respective fields, driving positive change and making a meaningful impact on the world.",
      img: "/visi.jpg",
    },
    {
      id: 2,
      title: "Mission",
      content:
        "At LNCT Indore, our mission is to provide a transformative learning experience that empowers our students to excel in their chosen fields and become responsible global citizens. We are committed to fostering academic excellence, innovation, and ethical values. Through rigorous curriculum, experiential learning opportunities, and holistic development programs, we aim to nurture individuals who are well-equipped to meet the challenges of the ever-evolving world and contribute positively to society.",
      img: "/misi.jpg",
    },
    {
      id: 3,
      title: "Guiding Principles",
      content: "Greatest reward as founders of LNCT Indore, Suresh Kumar Chowksey has been the steady progress the college has made in establishing itself as one of the finest institutions of learning. Our next goal will be to establish its presence on a national level. We feel proud of the achievements of our college through the collective efforts of our faculty and students and they deserve our heartfelt gratitude. LNCT Indore has created an exciting but disciplined student-centric environment of academic excellence, reflected in academic results and great placements year after year. Our engineering program links knowledge to practice and skill from the very beginning, which makes it easy for students to transition into successful working professionals in later life. In addition to maintaining high academic standards, most students go through industry certifications and internships to give them a real-life feel of technology.",
      img: "/rules.jpg",
    }

  ];

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (

    <div className=" w-11/12 mx-auto ">
      <div className="flex flex-col mt-5" style={{ height: "calc(100vh - 130px)" }}>
        <div className="flex px-4 text-xl  justify-center gap-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              className={`px-8 py-3  rounded-t-lg hover:scale-[.98] transition-all hover:transform duration-500 ${activeSection === section.id
                ? "bg-cyan-700 text-white"
                : "bg-cyan-400"
                }`}
            >
              <div className="font-semibold ">{section.title}</div>

            </button>
          ))}
        </div>
        <div className="flex flex-grow p-5 gap-6 transition-all duration-700">
          <div className="w-1/3 py-4 ">
            <div className="relative h-full overflow-hidden rounded-lg -z-10">
              <Image
                src={sections[activeSection - 1].img}
                alt="foddiesssss"
                layout="fill"
                objectFit="cover"
                className=" z-20"
              />
            </div>
          </div>









          <div className="w-2/3 mx-auto p-5 text-justify ">
            <p className="font-semibold leading-10 text-xl">{sections[activeSection - 1].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monument;
