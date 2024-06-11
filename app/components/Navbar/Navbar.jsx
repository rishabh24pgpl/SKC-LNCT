"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navlink from "./Navlink";

import { FaChevronDown } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";

export default function Navbar() {
  const [openSubMenuId, setOpenSubMenuId] = useState(null);
  const [collegeNameIndex, setCollegeNameIndex] = useState(0);
  const menuId = usePathname();

  const collegeNames = ["SKC LNCT ", "एसकेसी एलएनसीटी "];

  const navItems = [
    {
      main: "Institute",
      child: [
        {
          name: "Institute",
          subchild: [
            {
              name: "Welcome to LNCT",
              link: "/institute/welcome",
            },
            {
              name: "Vision and Mission",
              link: "/institute/mission_vision",
            },
            {
              name: "Former Directors",
              link: "/institute/former_directors",
            },
            {
              name: "Campus and Facilities",
              link: "/institute/campus_facilities",
            },
            {
              name: "Contact Us",
              link: "/institute/contact",
            },
          ],
        },
        {
          name: "Administration",
          subchild: [
            {
              name: "Board of Governors",
              link: "/institute/bog",
            },
            {
              name: "The Senate",
              link: "/institute/senate",
            },
            {
              name: "Principal",
              link: "/principal",
            },
            {
              name: "Chairperson",
              link: "/institute/chairperson",
            },
            {
              name: "Director",
              link: "/institute/director",
            },
            {
              name: "Finance Committee",
              link: "/institute/fc",
            },
            {
              name: "Building and Work Committee",
              link: "/institute/bwc",
            },
          ],
        },
        {
          name: "Key Documents",
          subchild: [
            {
              name: "Rules and Regulations",
              link: "/students/rules_regulations",
            },
            {
              name: "Annual Reports",
              link: "/institute/annual_reports",
            },
          ],
        },
        {
          name: "Other Important Links",
          subchild: [
            {
              name: "Digital Payments",
              link: "https://www.pratibhaglobalschool.com/payments/login/40e032b8-a995-47ab-a854-c3aec4812c0e",
            },
            {
              name: "AICTC Regulations",
              link: "https://forms-peach.vercel.app/",
            },
          ],
        },
      ],
    },
    {
      main: "Academics",
      child: [
        {
          name: "Academic",
          subchild: [
            {
              name: "Academic Overview",
              link: "/academic/overview",
            },
            {
              name: "Academic Programs",
              link: "/academic/programs",
            },
            {
              name: "Academic Regulations",
              link: "/students/rules_regulations",
            },
            {
              name: "Academic Calendar",
              link: "/academic/calender",
            },
            {
              name: "Curriculum and Syllabus",
              link: "/academic/syllabus",
            },
          ],
        },
        {
          name: "Departments",
          subchild: [
            {
              name: "Mechanical Engineering",
              link: "/department/me",
            },
            {
              name: "Computer Science & Engineering",
              link: "/department/cse",
            },
            {
              name: "Electronics & Communication Engineering",
              link: "/department/ece",
            },
            {
              name: "Electrical & Electronics Engineering",
              link: "/department/eet",
            },
            {
              name: "Information Technology",
              link: "/department/it",
            },
          ],
        },
        {
          name: "Facilities",
          subchild: [
            {
              name: "Central Workshop",
              link: "/academic/central-workshop",
            },
            {
              name: "Central Research Facility",
              link: "/academic/central-research",
            },
            {
              name: "High Performance Computing",
              link: "/academic/hfc",
            },
          ],
        },
        {
          name: "Technical Service Units",
          subchild: [
            {
              name: "Health Care",
              link: "/health-center",
            },
            {
              name: "Lawn and Garden",
              link: "/academic/lawn",
            },
          ],
        },
      ],
    },
    {
      main: "Students",
      child: [
        {
          name: "Prospective Students",
          subchild: [
            {
              name: "Why LNCT",
              link: "/why_skclnct",
            },
            {
              name: "Gallery",
              link: "/gallery",
            },
            {
              name: "Campus Life",
              link: "/student/campuslife",
            },
            {
              name: "Academic Programs",
              link: "/academic/programs",
            },
            {
              name: "Admission Process",
              link: "/admission",
            },
          ],
        },
        {
          name: "Existing Students",
          subchild: [
            {
              name: "Rules and Regulations",
              link: "/students/rules_regulations",
            },
            {
              name: "Academic Calendar",
              link: "/academic/calender",
            },
            {
              name: "Time Table",
              link: "/institute/former_directors",
            },
            {
              name: "Online Fee Payment",
              link: "https://www.pratibhaglobalschool.com/payments/login/40e032b8-a995-47ab-a854-c3aec4812c0e",
            },
          ],
        },
        {
          name: "Other Related Links",
          subchild: [
            {
              name: "Internship Programs",
              link: "/placementcalender",
            },
            {
              name: "Library",
              link: "/institute/library",
            },
            {
              name: "Career Development Cell",
              link: "/cdc",
            },
          ],
        },
      ],
    },
    {
      main: "Placement",
      child: [
        {
          name: "Overview",
          subchild: [
            {
              name: "Placement Overview",
              link: "/placementview",
            },
            {
              name: "Career Development Cell",
              link: "/cdc",
            },
            {
              name: "Leading Recruiters",
              link: "/leading_recruiters",
            },
            {
              name: "Regular Activities",
              link: "/regular_activite",
            },
            {
              name: "Placement Calendar and Process",
              link: "/placementcalender",
            },
          ],
        },
        {
          name: "For Students",
          subchild: [
            {
              name: "Student Testimonial",
              link: "student_testimonial",
            },
            {
              name: "Career",
              link: "/career/?college=LNCT",
            },
          ],
        },
      ],
    },
    {
      main: "Alumni",
      child: [
        {
          name: "Alumni",
          subchild: [
            {
              name: "About Alumni Cell",
              link: "/alumni",
            },
            {
              name: "Eminent",
              link: "/eminent",
            },
            {
              name: "Director's Message to Alumni",
              link: "/institute/contact",
            },
          ],
        },
      ],
    },
    {
      main: "Resources",
      child: [
        {
          name: "Resources",
          subchild: [
            {
              name: "Central Research Facility",
              link: "/crf",
            },
            {
              name: "Centre for Technology Innovation and Industry Relations",
              link: "/relations",
            },
            {
              name: "High Performance Computing",
              link: "/highpc",
            },
            {
              name: "Industrial Consultancy",
              link: "/ic",
            },
          ],
        },
      ],
    },
  ];

  useEffect(() => {
    setOpenSubMenuId(null);
  }, [menuId]);

  // Function to toggle submenu
  const toggleSubMenu = (submenuId) => {
    setOpenSubMenuId(openSubMenuId === submenuId ? null : submenuId);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCollegeNameIndex((prevIndex) =>
        prevIndex === collegeNames.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const path = usePathname();

  return (
    <>
    {path.includes("admin") || path.includes("payments") ? (
      <></>
    ) : (
    <div className="text-white z-50">
    <div className="flex items-center justify-between p-2 bg-blue-900">
      <div className="flex items-center gap-4">
        <p>Admissions</p>
        <p>Placement</p>
        <p>Careers</p>
      </div>
  
      <div className="flex items-center gap-4">
        <img src="/twitter.png" className="w-8 h-8 rounded-full" />
        <img src="/yt.png" className="w-8 h-8 rounded-full" />
        {/* <img src="/insta.png" className="w-8 h-8 rounded-full" /> */}
      </div>
  
      <div className="flex gap-2">
        <Link
          className="text-xs px-4 py-2 leading-none rounded-full hover:bg-green-300 hover:text-black border-2"
          href="/loginPage"
        >
          STAFF LOGIN
        </Link>
        <Link
          className="text-xs px-4 py-2 leading-none rounded-full hover:bg-green-300 hover:text-black border-2"
          href="http://1.22.218.13/AccSoft2/Login.aspx"
          target="_blank"
        >
        LOGIN
        </Link>
      </div>
    </div>
  
    <div className="bg-gradient-to-r from-indigo-500 to-blue-800">
      <div className="w-9/12 mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <div className="w-[100px] h-[100px] relative">
            <Image src="/logo1.png" layout="fill" objectFit="contain" alt="Logo" />
          </div>
          <h1 className="text-3xl font-semibold">{collegeNames[collegeNameIndex]}</h1>
          <div className="slogan">An Institute of National Importance</div>
        </div>
  
        <div>
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-full border border-white focus:outline-none focus:border-gray-300"
          />
        </div>
      </div>
    </div>
  
    <div className="w-full bg-blue-900">
      <div className="flex flex-wrap w-full mx-auto gap-4 justify-center bg-blue-900 relative items-center">
        <Link href="/" className="text-3xl p-1">
          <FaHome className="hover:scale-105 duration-500 hover:text-gray-400 cursor-pointer" />
        </Link>
        {navItems.map((item, index) => {
          let dropdownWidth;
          let dropdownLeft;
          switch (item.main) {
            case "Institute":
              dropdownWidth = "w-[950px]";
              dropdownLeft = "left-[-79px]";
              break;
            case "Academics":
              dropdownWidth = "w-[870px]";
              dropdownLeft = "left-[-460px]";
              break;
            case "Students":
              dropdownWidth = "w-[690px]";
              dropdownLeft = "left-20";
              break;
            case "Placement":
              dropdownWidth = "w-[590px]";
              dropdownLeft = "left-30";
              break;
            case "Alumni":
              dropdownWidth = "w-60";
              dropdownLeft = "left-40";
              break;
            case "Resources":
              dropdownWidth = "w-[300px]";
              dropdownLeft = "left-50";
              break;
            default:
              dropdownWidth = "w-64";
              dropdownLeft = "left-[-50px]";
          }
  
          return (
            <div key={index} className="relative group">
              <Link
                href="#"
                className={`text-white font-semibold text-lg hover:text-gray-300 hover:bg-blue-700 flex gap-2 items-center px-3 py-4 ${
                  openSubMenuId === item.main ? "bg-blue-800" : ""
                }`}
                onClick={() => toggleSubMenu(item.main)}
              >
                {item.main}
                <FaChevronDown size={15} />
              </Link>
  
              <div
                className={`absolute top-full mt-2 p-3 bg-white shadow-lg rounded flex ${dropdownWidth} ${
                  openSubMenuId === item.main ? "" : "hidden"
                }`}
                style={{ left: dropdownLeft }}
              >
                {item.child.map((link, index) => (
                  <div key={index} className="p-2">
                    <h4 className="text-blue-700 font-bold text-lg">
                      <Link href="#">{link.name}</Link>
                    </h4>
                    <ul className="mt-2 space-y-2">
                      {link.subchild.map((navlink, index) => (
                        <li key={index}>
                          <Navlink name={navlink.name} link={navlink.link} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
    )}
  </>
  
  );
}