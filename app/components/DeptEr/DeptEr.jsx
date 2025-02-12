"use client";
import React,{useState} from "react";
import SliderMain from "../SliderMain/SliderMain";
import Image from "next/image";
import Counter from "@/app/components/Counter";
import DeptCounter from "../DeptCounter/DeptCounter";
import ProgramCard from "../ProgramCard/ProgramCard";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Slider from "../Slider/Slider";
import { head } from "lodash";
import FacultyCard from "../FacultyCard/FacultyCard";
import Curriculumn from "../Curriculumn/Curriculumn";
// import { useState } from "react/cjs/react.development";

export default function DeptEr({ dept,deps }) {
  const images = ["/ar-3.jpg"];
  const counter = [
    {
      title: "undergraduate students",
      value: "120",
      textColor: "text-blue-800",
      color: "bg-red-500",
      speed: "40",
    },
    {
      title: "postgraduate students",
      value: "60",
      textColor: "text-blue-800",
      color: "bg-[#FF3344]",
      speed: "35",
    },
    {
      title: "doctoral students",
      value: "30",
      textColor: "text-blue-800",
      color: "bg-pink-500",
      speed: "30",
    },
    {
      title: "recent job offers",
      value: "300",
      textColor: "text-blue-800",
      color: "bg-[#FF3344]",
      speed: "30",
    },
    {
      title: "faculties",
      value: "60",
      textColor: "text-blue-800",
      color: "bg-teal-500",
      speed: "30",
    },
  ];

  let headD;
  let headImg;
  let phoneHead;
  let emailHead;
  let faculties;
  let aboutDept;
  let deptImg;
  let slogan;
  let author;
  switch (dept) {
    case "me":
      slogan = "Engineering Tomorrow, Innovating Today ,Unleash Your Potential with Us!";
      author = "Nitin Jaiswal";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The Mechanical Engineering Department at -LNCT Indore is a hub of innovation and excellence, dedicated to the study and application of mechanical systems. Our department focuses on providing a robust education that combines theoretical knowledge with practical experience. Students engage in a variety of subjects, including thermodynamics, fluid mechanics, materials science, and robotics. Through hands-on projects, state-of-the-art laboratories, and industry collaborations, we prepare our students to solve real-world engineering challenges. Our faculty, renowned for their expertise and research contributions, are committed to mentoring students and fostering a learning environment that encourages creativity and critical thinking. Whether it's designing the next generation of sustainable energy systems or developing advanced manufacturing techniques, our Mechanical Engineering Department is at the forefront of technological advancement and prepares graduates to excel in diverse engineering careers";
      dept = "Mechanical Engineering";
      headD = "Nitin Jaiswal";

      headImg = "/hodme.jpg";
      phoneHead = "9926085496";
      emailHead = "hodme.lnct@lnctindore.com";
      faculties = [
        {
          name: "MS.DIVYADARSHINI DHAKRE",
          position: "Assistant Professor",
          degree: "Master of Engineering",
          experience: "7 years",
        },
        {
          name: "MR. CHETANYA SHARMA",
          position: "Lab Demonstrator",
          degree: "Bachelor of Engineering",
          experience: "15.5 years",
        },
       
        // Add more faculty members as needed
      ];

      break;
    case "cse":
      slogan = "Empowering Innovation, Shaping the Future: Where Technology Meets Excellence";
      author = "DHIRAJ RAJVAIDHYA";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The Computer Science Department at -LNCT indore is a vibrant and dynamic community dedicated to advancing the frontiers of technology and innovation. Our curriculum is designed to equip students with a solid foundation in computing principles, software development, and data analysis. With courses ranging from artificial intelligence and cybersecurity to software engineering and machine learning, our program prepares students for the rapidly evolving tech industry. Our state-of-the-art labs, collaborative research projects, and industry partnerships provide hands-on experience and practical skills essential for real-world applications. Our distinguished faculty, renowned for their cutting-edge research and industry expertise, are committed to guiding students in their academic and professional growth. Whether you aspire to develop groundbreaking software, solve complex computational problems, or lead technological advancements, the Computer Science Department at -LNCT indore is the ideal place to start your journey.";
      dept = "Computer Science & Engineering";
      headD = "MR. DHIRAJ RAJVAIDHYA";
      headImg = "/cshod.jpeg";
      phoneHead = "9407125732";
      emailHead = "hodit.lnct@lnctindore.com, ";
      faculties = [
        {
          name: "MS. RAJNI CHATURVEDI",
          position: "Assistant Professor",
          degree: "MCA, M.Tech",
          experience: "16 years",
        },
        {
          name: "MS. SHARSHTI ATRE",
          position: "Assistant Professor",
          degree: "MSc",
          experience: "3 years",
        },
        {
          name: "Ms. MAMTA GEHLOT",
          position: "Assistant Professor",
          degree: "M.E.",
          experience: "1 years",
        },
        // Add more faculty members as needed
      ];

      break;
    case "ece":
      slogan = "Connecting Ideas, Creating Futures: Innovate with Electronics and Communication!";
      author = "TAMASHRI DHARSIYA";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The Electronics and Communication Engineering (ECE) Department at -LNCT,indore is a hub of technological innovation and academic excellence. Our department focuses on the study and application of electronic systems, communication technologies, and signal processing. Students are immersed in a comprehensive curriculum that covers a wide range of topics, including digital electronics, telecommunications, embedded systems, and VLSI design. With access to cutting-edge laboratories and industry-standard tools, students gain hands-on experience that prepares them for the dynamic field of electronics and communication. Our dedicated faculty, known for their research and industry involvement, mentor students to develop critical thinking and problem-solving skills. The ECE Department is committed to fostering a learning environment that encourages creativity, innovation, and collaboration, ensuring that our graduates are well-equipped to excel in the fast-paced world of technology and communication.";
      dept = "Electronics & Communication Engineering";
      headD = "MS. TAMASHRI DHARSIYA";
      headImg = "/echod.jpg";
      phoneHead = "8319778357";
      emailHead = "hodec.lnct@lnctindore.com";
      faculties = [
        {
          name: "DR.PIYUSH P. MOGHE",
          position: "Associate Professor",
          degree: "PhD",
          experience: "20 years",
        },
        // {
        //   name: "Jane Smith",
        //   position: "Data Scientist",
        //   degree: "Masters in Data Science",
        //   experience: "3 years",
        // },
        // {
        //   name: "Emily Johnson",
        //   position: "Project Manager",
        //   degree: "MBA",
        //   experience: "7 years",
        // },
        // Add more faculty members as needed
      ];

      break;
    case "eet":
      slogan = "Powering Innovation, Electrifying the Future: Harness the Potential with Electrical Engineering!";
      author = "DILIP SAHASTRABUDHE";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The Electrical Engineering (EE) Department at -LNCT,indore is a center of excellence, dedicated to the study and advancement of electrical systems and technologies. Our curriculum is designed to provide students with a deep understanding of electrical circuits, power systems, control engineering, and renewable energy technologies. Through hands-on laboratory work, innovative research projects, and industry partnerships, students gain practical skills and real-world experience that prepare them for the challenges of the electrical engineering field. Our distinguished faculty, renowned for their research contributions and industry expertise, are committed to mentoring students and fostering an environment of intellectual growth and innovation. The EE Department is devoted to developing the next generation of electrical engineers who will lead advancements in technology and contribute to sustainable solutions for a better future.";
      dept = "Electrical & Electronics Engineering";
      headD = "MR.DILIP SAHASTRABUDHE";
      headImg = "/exhod.jpg";
      phoneHead = "7509974000";
      emailHead = "hodex.lnct@lnctindore.com,";
      faculties = [
        {
          name: "MS. GARIMA MAHESHWARI",
          position: "Assistant Professor",
          degree: "M.E.",
          experience: "9 years",
        },
        // {
        //   name: "Jane Smith",
        //   position: "Data Scientist",
        //   degree: "Masters in Data Science",
        //   experience: "3 years",
        // },
        // {
        //   name: "Emily Johnson",
        //   position: "Project Manager",
        //   degree: "MBA",
        //   experience: "7 years",
        // },
        // Add more faculty members as needed
      ];

      break;
    case "it":
      slogan = "dfsghj slogan";
      author = "author slogan";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "dfvbgsnha";
      dept = "Information Technology";
      headD = "Head Dept";
      headImg = "/director.png";
      phoneHead = "1234567890";
      emailHead = "abc@gmail.com";
      faculties = [
        {
          name: "John Doe",
          position: "Software Engineer",
          degree: "Bachelors in Computer Science",
          experience: "5 years",
        },
        {
          name: "Jane Smith",
          position: "Data Scientist",
          degree: "Masters in Data Science",
          experience: "3 years",
        },
        {
          name: "Emily Johnson",
          position: "Project Manager",
          degree: "MBA",
          experience: "7 years",
        },
        // Add more faculty members as needed
      ];

      break;

    default:
      break;
  }

 const [active, setActive] = useState(0)



 let deptImgs;
 let mission;
 let vision;
 
 switch (deps) {
   case "me":
     deptImgs = "/civil-img.jpg";
     mission = "The Commerce Department's mission for students is to empower future business leaders with strong foundations in economics, finance, and trade. We focuses on building practical skills, fostering entrepreneurship, and preparing students for global careers in business. Through hands-on learning, industry exposure, and digital innovation, students are equipped to thrive in the fast-paced world of commerce and drive economic growth.";
     vision = "The vision of the Commerce Department is to create a hub of future-ready business leaders by providing innovative education, fostering entrepreneurial spirit, and driving global business insights. It aims to shape students into dynamic professionals through cutting-edge curricular, industry partnerships, and digital transformation, while continuously evolving as a center for commerce research and economic development.";
     break;
   
   case "cse":
     deptImgs = "/mechanical-img.jpg";
     mission = "The mission of the Science Department is to provide a dynamic and rigorous academic environment that fosters curiosity, critical thinking, and scientific inquiry. We are committed to equipping students with a strong foundation in scientific principles and the skills needed to excel in research, innovation, and practical applications of science. By offering hands-on laboratory experiences, interdisciplinary learning opportunities, and exposure to cutting-edge technologies, we aim to develop scientifically literate graduates who are prepared to address real-world challenges. Our department strives to cultivate a passion for discovery, problem-solving, and ethical responsibility in the pursuit of knowledge that benefits society";
     vision = "The vision of the Science Department is to be a leader in scientific education and research, recognized for fostering innovation, collaboration, and a deep understanding of the natural world. We aspire to create an academic community where students and faculty engage in transformative learning and groundbreaking research that pushes the boundaries of scientific knowledge. Through our commitment to excellence, interdisciplinary approaches, and global awareness, we aim to produce graduates who are not only proficient in their scientific disciplines but also capable of addressing complex global challenges, contributing to sustainable development, and improving the quality of life for future generations.";
     break;
   
   case "ece":
     deptImgs = "/mechanical-img.jpg";
     mission = "Making the arts accessible, inclusive, and meaningful through diverse approaches to creative and technological innovation, integrated with visual, oral, and written communication.";
     vision = "The Department of Art and Design will lead in promoting the visual arts by fostering critical and creative thinking, artistic expression, effective communication, cultural awareness, and community engagement.";
     break;
   
   case "eet":
     deptImgs = "/mechanical-img.jpg";
     mission = "To provide technical education that will create mechanical engineers who contribute to the industry and society.";
     vision = "To be a leader in mechanical engineering education, offering innovative solutions for the advancement of technology.";
     break;
   
   case "it":
     deptImgs = "/mechanical-img.jpg";
     mission = "To provide technical education that will create mechanical engineers who contribute to the industry and society.";
     vision = "To be a leader in mechanical engineering education, offering innovative solutions for the advancement of technology.";
     break;
   
  //  case "og":
  //    deptImgs = "/mechanical-img.jpg";
  //    mission = "To provide technical education that will create mechanical engineers who contribute to the industry and society.";
  //    vision = "To be a leader in mechanical engineering education, offering innovative solutions for the advancement of technology.";
  //    break;
   
  //  case "pm":
  //    deptImgs = "/mechanical-img.jpg";
  //    mission = "To provide technical education that will create mechanical engineers who contribute to the industry and society.";
  //    vision = "To be a leader in mechanical engineering education, offering innovative solutions for the advancement of technology.";
  //    break;
   
  //  case "pfm":
  //    deptImgs = "/mechanical-img.jpg";
  //    mission = "To provide technical education that will create mechanical engineers who contribute to the industry and society.";
  //    vision = "To be a leader in mechanical engineering education, offering innovative solutions for the advancement of technology.";
  //    break;
   
  //  case "rep":
  //    deptImgs = "/mechanical-img.jpg";
  //    mission = "To provide technical education that will create mechanical engineers who contribute to the industry and society.";
  //    vision = "To be a leader in mechanical engineering education, offering innovative solutions for the advancement of technology.";
  //    break;
   
  //  case "pharm":
  //    deptImgs = "/mechanical-img.jpg";
  //    mission = "To provide technical education that will create mechanical engineers who contribute to the industry and society.";
  //    vision = "To be a leader in mechanical engineering education, offering innovative solutions for the advancement of technology.";
  //    break;
   
  //  case "anotomy":
  //    deptImgs = "/mechanical-img.jpg";
  //    mission = "To provide technical education that will create mechanical engineers who contribute to the industry and society.";
  //    vision = "To be a leader in mechanical engineering education, offering innovative solutions for the advancement of technology.";
  //    break;
   
  //  case "surgery":
  //    deptImgs = "/electrical-img.jpg";
  //    mission = "To produce skilled electrical engineers who can innovate and contribute to the development of sustainable energy solutions.";
  //    vision = "To lead in electrical engineering education and research for a sustainable and technologically advanced future.";
  //    break;
   
   default:
     deptImgs = "/default-img.jpg";
     mission = "Default Mission";
     vision = "Default Vision";
 }




 const buttons=[
  'About The Department','Course-curriculmn','Mission-Vision','Faculty','Academic Programmes'
 ]
  return (
    <>
    
    <div>
      <SliderMain images={images} heading={dept} />
      <div className='mt-10 flex items-center gap-5'>
      {
        buttons.map((item,index)=>(
          <button onClick={()=>setActive(index)} className='border-2 p-4 rounded-lg bg-cyan-500 hover:bg-cyan-700' key={index}>{item}</button>
        ))
      }
      </div>
      
      <div className="w-full   ">
        {
          active===0 && (
            <div className="w-full flex px-20 py-10  gap-7">
          <div className="w-2/3 ">
            <div className="pt-3 pb-5">
              <h2 className=" text-4xl text-cyan-800 my-5">
                About the Department
              </h2>
              {/* <div className="w-full   mt-5">
                <div className="w-full grid grid-cols-3 gap-5 ">
                  {counter.map((count) => (
                    <DeptCounter
                      key={count.title}
                      initialValue={3}
                      targetValue={count.value}
                      speed={count.speed}
                      textColor={count.textColor}
                      text={count.title}
                      color={count.color}
                    />
                  ))}
                </div>
              </div> */}

              <p className=" mt-2 font-extralight text-sm  text-justify  h-[160px]">
                {aboutDept}
              </p>
            </div>
          </div>
          <div className="w-1/3  p-4">
            <div className="relative h-full">
              <Image
                src="/welcome.jpeg"
                alt="foddiesssss"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
          )
        }
        {
          active===1 && (
            <div><Curriculumn/></div>
          )
        }
        {
          active===2 && (
            <div>
              <div className="w-full flex px-20 py-4 gap-7">
          <div className="w-3/5 h-[580px]">
            <div className="relative h-full">
              <Image
                src={deptImg}
                alt="foddiesssss"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="w-2/5 flex flex-col gap-10 py-20 justify-between">
                  <div className="w-11/12 mx-auto flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <Image src="/mission-icon.png" width={70} height={20} alt="Mission Icon" />
                      <h1 className="text-2xl font-bold">Mission</h1>
                    </div>
                    <div>
                      <p className="text-sm font-extralight">{mission}</p>
                    </div>
                  </div>
                  <div className="w-11/12 mx-auto flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <Image src="/vision-icon.png" width={70} height={20} alt="Vision Icon" />
                      <h1 className="text-2xl font-bold">Vision</h1>
                    </div>
                    <div>
                      <p className="text-sm font-extralight">{vision}</p>
                    </div>
                  </div>
                </div>
        </div>
            </div>
          )
        }
        {
          active===3 && (
            <>
            <div className="w-full flex flex-col px-20 gap-4 py-6 ">
          <h1 className="font-bold text-4xl text-cyan-700">
            Head Of Department
          </h1>
          <div className="flex justify-between gap-10">
            <div className="w-1/2  flex items-center p-4">
              <div className="w-72 h-72 rounded-full border-2 border-black relative overflow-hidden">
                <Image src={headImg} fill />
              </div>
              <div className="flex flex-col justify-center  p-10">
                <h1 className=" font-semibold text-2xl">{headD}</h1>
                <h2 className="text-lg mb-2">Head Of Department</h2>
                <h1 className="text-sm  mt-1">
                  <FaPhoneAlt className="inline mr-1" />
                  {phoneHead}
                </h1>
                <h1 className="text-sm  mt-1">
                  <MdEmail className="inline mr-1" />
                  {emailHead}
                </h1>
              </div>
            </div>
            <div className="w-1/2  flex flex-col justify-center items-center">
              <p className="p-5 text-3xl text-center"> {slogan}</p>
              <h1 className=" italic  text-2xl">- {author}</h1>
            </div>
          </div>
        </div>
        <h1 className="text-3xl text-center font-semibold border-b">Faculty at LNCPS</h1>
        <div className=" grid ">
        <div>
          {faculties.map((faculty, index) => (
            <div
              className=" mt-1 mb-5  p-2  rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] "
              key={index}
            >
              <div className=" flex gap-6 ">
                <div className="w-48 h-40   relative  overflow-hidden rounded-lg">
                  <Image
                    src={faculty.image}
                    alt="Img Not Found"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className=" py-4">
                  <h1 className="my-2 font-bold text-lg mt-1">
                    <span className="font-semibold"> Name : </span>{" "}
                    {faculty.name}
                  </h1>
                  <h1 className="text-sm mt-1">
                    <span className="font-semibold"> Designation : </span>{" "}
                    {faculty.position}
                  </h1>
                  <h2 className="text-sm">
                    <span className="font-semibold"> Qualification : </span>{" "}
                    {faculty.degree}
                  </h2>
                  <h3 className="text-sm mt-1">
                    <span className="font-semibold"> Experience : </span>{" "}
                    {faculty.experience}
                  </h3>
                  <h3 className="text-sm mt-1">
                    <span className="font-semibold"> Gmail </span>
                    {faculty.email}
                  </h3>
                </div>
              </div>
            </div>
          ))}

          {/* Add more rows as needed */}
        </div>
      </div>
            </>
          )
        }
        {
          active===4 && (
            <>
            <div className="w-full flex flex-col px-20 gap-4 py-6">
          <h1 className="text-4xl text-cyan-700 font-bold p-2">
            Academic Programmes
          </h1>
          <div className="w-full flex justify-center gap-20 ">
            <ProgramCard
              course={"Undergraduate"}
              bgcolor={"bg-cyan-800"}
              admission={"12th pass "}
              dept={"B.Sc(physics,chemistry,maths,computer-science and biotechnology) B.com(computerapplication,taxation,economics) B.A(psyhcology,english literautre,history ,economics) BBA(Hr,Finance,marketing)"}
            />
            {/* <ProgramCard
              course={"Post-Graduate"}
              bgcolor={"bg-blue-800"}
              admission={"JEE"}
              dept={"civil engineering"}
            /> */}
          </div>
        </div>
            </>
          )
        }
        
        

        
        
        {/* <div className="w-full p-2"></div> */}
      </div>
      <div>
      
    </div>
      
      
    </div>
    </>
  );
}
