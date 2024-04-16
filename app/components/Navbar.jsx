"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [openSubMenuId, setOpenSubMenuId] = useState(null);

  // Function to toggle submenu
  const toggleSubMenu = (submenuId) => {
    setOpenSubMenuId(openSubMenuId === submenuId ? null : submenuId);
  };

  return (
    <div className=" text-white ">
      <div className="flex justify-around  bg-orange-600 p-4">
        <div id="tmenu-institute   ">
          <a
            href="#"
            className="text-white  "
            onClick={() => toggleSubMenu("institute")}
          >
            Institute
            <span className="submenu-indicator">
              <span className="submenu-indicator-chevron border-white"></span>
            </span>
          </a>
          <div
            className={`megamenu-panel absolute top-30 left-0 w-[980px] rounded-2xl mx-auto bg-white nav-submenu  ${
              openSubMenuId === "institute" ? "" : "hidden"
            }`}
          >
            <ul className=" flex justify-around list-none">
              <li className="py-4 ">
                <h5 className="text-lg font-semibold  mb-2">
                  <a
                    href="#"
                    className="text-orange-500 border-b-2  border-orange-600 text-xl p-1"
                  >
                    Institute
                  </a>
                </h5>
                <ul className="p-2 ">
                  <li>
                    <a
                      id="submenu-welcome"
                      href="/institute/welcome"
                      className="text-gray-700 text-lg hover:text-blue-400 "
                    >
                      Institute
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-vision"
                      href="/institute/mission_vision"
                      className="text-gray-700 text-lg hover:text-blue-400"
                    >
                      Vision and Mission
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-exdirectors"
                      href="/institute/former_directors"
                      className="text-gray-700 text-lg hover:text-blue-400"
                    >
                      Former Directors
                    </a>
                  </li>

                  <li>
                    <a
                      id="submenu-campusfacility"
                      href="/Institute/CampusFacility"
                      className="text-gray-700 text-lg hover:text-blue-400"
                    >
                      Campus and Facilities
                    </a>
                  </li>

                  <li>
                    <a
                      id="submenu-gallery"
                      href="/Institute/Gallery"
                      className="text-gray-700 text-lg hover:text-blue-400"
                    >
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-contactus"
                      href="/Institute/ContactUs"
                      className="text-gray-700 text-lg hover:text-blue-400"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </li>
              <li className="py-4">
                <h5 className="text-lg font-semibold mb-2">
                  <a href="#" className="text-orange-500 border-b-2  border-orange-600 text-xl p-1">
                    Administration
                  </a>
                </h5>
                <ul>
                  <li>
                    <a
                      id="submenu-council"
                      href="/Institute/NITsCouncil"
                      className="text-gray-700 text-lg hover:text-blue-400"
                    >
                      Council for NITs
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-bog"
                      href="/institute/bog"
                      className="text-gray-700 text-lg hover:text-blue-400"
                    >
                      Board of Governors
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-senate"
                      href="/Institute/Senate"
                      className="text-gray-700 text-lg hover:text-blue-400"
                    >
                      The Senate
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-chairperson"
                      href="/institute/chairperson"
                      className="text-gray-700 text-lg hover:text-blue-400"
                    >
                      Chairperson
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-director"
                      href="/institute/director"
                      className="text-gray-700 text-lg hover:text-blue-400"
                    >
                      Director
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-nitradmin"
                      href="/Institute/NITRDirector"
                      className="text-gray-700 text-lg hover:text-blue-400"
                    >
                      NITR Administration
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-fc"
                      href="/Institute/FC"
                      className="text-gray-700 text-lg hover:text-blue-400"
                    >
                      Finance Committee
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-bwc"
                      href="/Institute/BWC"
                      className="text-gray-700 text-lg hover:text-blue-400"
                    >
                      Buildings and Works Committee
                    </a>
                  </li>
                </ul>
              </li>
              <li className="py-4">
                <h5 className="text-lg font-semibold mb-2">
                  <a href="#" className="text-orange-500 border-b-2  border-orange-600 text-xl p-1">
                    Key Documents
                  </a>
                </h5>
                <ul>
                  <li>
                    <a
                      id="submenu-actstatues"
                      href="/Institute/Act_Statutes"
                      className="text-gray-700 text-lg hover:text-blue-400"
                    >
                      Act and Statutes
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-mcouncil"
                      href="/Institute/Minutes_NITCouncil"
                      className="text-gray-700 text-lg hover:text-blue-400"
                    >
                      Minutes of NIT Council
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-mbog"
                      href="/Institute/Minutes_BOG"
                      className="text-gray-700 text-lg hover:text-blue-400"
                    >
                      Minutes of BOG
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-mfc"
                      href="/Institute/Minutes_FC"
                      className="text-gray-700 text-lg hover:text-blue-400"
                    >
                      Minutes of FC
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-mbwc"
                      href="/Institute/Minutes_BWC"
                      className="text-gray-700 text-lg hover:text-blue-400"
                    >
                      Minutes of BWC
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-msenate"
                      href="/Institute/Minutes_Senate"
                      className="text-gray-700 text-lg hover:text-blue-400"
                    >
                      Minutes of Senate
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-ruleregulation"
                      href="/Institute/Rules_Regulations"
                      className="text-gray-700 text-lg hover:text-blue-400"
                    >
                      Rules and Regulations
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-annualreport"
                      href="/Institute/Annual_Reports"
                      className="text-gray-700 text-lg hover:text-blue-400"
                    >
                      Annual Reports
                    </a>
                  </li>
                </ul>
              </li>
              <li className="py-4">
                <h5 className="text-lg font-semibold mb-2">
                  <a href="#" className="text-orange-500 border-b-2  border-orange-600 text-xl p-1">
                    Accreditation
                  </a>
                </h5>
                <ul>
                  <li>
                    <a
                      id="submenu-nirf"
                      href="/Institute/NIRF"
                      className="text-gray-700 text-lg hover:text-blue-400"
                    >
                      Data for NIRF
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-nba"
                      href="/Institute/NBA"
                      className="text-gray-700 text-lg hover:text-blue-400"
                    >
                      Data for NBA
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-ariia"
                      href="/Institute/ARIIA"
                      className="text-gray-700 text-lg hover:text-blue-400"
                    >
                      Data for ARIIA
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-qs"
                      href="/Institute/QS"
                      className="text-gray-700 text-lg hover:text-blue-400"
                    >
                      Data for QS
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div id="tmenu-institute">
          <a
            href="#"
            className="text-white text-lg"
            onClick={() => toggleSubMenu("academics")}
          >
            Academics
            <span className="submenu-indicator">
              <span className="submenu-indicator-chevron border-white"></span>
            </span>
          </a>
          <div
            className={`megamenu-panel absolute top-30 left-0 w-screen bg-white nav-submenu  ${
              openSubMenuId === "academics" ? "" : "hidden"
            }`}
          >
            <ul className="flex justify-around text-black p-2 ">
              <li>
                <ul>
                  <li>
                    <a className="text-orange-500 border-b-2  border-orange-600 text-xl p-1 " href="">
                      Admissions
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400" id="submenu-acadprograme" href="/Academic/UGProgramme">
                      Academic Programmes
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400"
                      id="submenu-acadregulations"
                      href="/Academic/AcademicRegulations"
                    >
                      Academic Regulations
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400"
                      id="submenu-acadcalendar"
                      href="/Academic/AcademicCalendar"
                    >
                      Academic Calendar
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400"
                      id="submenu-acadtimetable"
                      href="/Academic/AcademicTimeTable"
                    >
                      Academic Time Table
                    </a>
                  </li>
                </ul>
                <h5>
                  <a className="text-orange-500 border-b-2  border-orange-600 text-xl p-1" href="">
                    Technical Service Units
                  </a>
                </h5>
                <ul>
                  <li>
                    <a className="text-gray-700 text-lg  hover:text-blue-400"
                    id="submenu-hc" href="/HealthCentre">
                      Health Centre
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400" 
                    id="submenu-lg" href="/LawnGarden">
                      Lawn and Garden
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400" 
                    id="submenu-pd" href="/PlanningDevelopment/About">
                      Planning and Development
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h5>
                  <a className="text-orange-500 border-b-2  border-orange-600 text-xl p-1" href="">
                    Departments
                  </a>
                </h5>
                <ul>
                  <li>
                    <a  className="text-gray-700 text-lg hover:text-blue-400" 
                    id="submenu-engineering" href="/Academic/Engineering">
                      Engineering
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400" 
                     id="submenu-pa" href="/PA">
                      Planning and Architecture
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400" 
                    id="submenu-science" href="/Academic/Science">
                      Science
                    </a>
                  </li>
                  <li>
                    <a  className="text-gray-700 text-lg hover:text-blue-400" 
                    id="submenu-hs" href="/HS">
                      Humanities and Social Science
                    </a>
                  </li>
                </ul>
                <h5>
                  <a className="text-orange-500 border-b-2  border-orange-600 text-xl p-1" href="">
                    Academic Support Centres
                  </a>
                </h5>
                <ul>
                  <li>
                    <a 
                     className="text-gray-700 text-lg hover:text-blue-400" id="submenu-cat" href="/CAT">
                      Centre for Automation Technology
                    </a>
                  </li>
                  <li>
                    <a  className="text-gray-700 text-lg hover:text-blue-400" id="submenu-cdc" href="/CDC">
                      Career Development Centre
                    </a>
                  </li>
                  <li>
                    <a   className="text-gray-700 text-lg hover:text-blue-400" href="https://library.nitrkl.ac.in/">
                      Biju Pattnaik Central Library
                    </a>
                  </li>
                  <li>
                    <a  className="text-gray-700 text-lg hover:text-blue-400" id="submenu-sac" href="/SAC">
                      Student Activity Centre
                    </a>
                  </li>
                  <li>
                    <a  className="text-gray-700 text-lg hover:text-blue-400 " id="submenu-cic" href="/CIC">
                      Computer and Informatics Centre
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h5>
                  <a className="text-orange-500 border-b-2  border-orange-600 text-xl p-1" href="">
                    Centres of Research
                  </a>
                </h5>
                <ul>
                  <li>
                    <a   className="text-gray-700 text-lg hover:text-blue-400 p-2 "
                    href="/Academic/BIC">
                      Bioinformatics and Computational Biology
                    </a>
                  </li>
                  <li>
                    <a   className="text-gray-700 text-lg hover:text-blue-400 p-2 " href="/Academic/CVPR">
                      Computer Vision &amp; Pattern Recognition
                    </a>
                  </li>
                  <li>
                    <a  className="text-gray-700 text-lg hover:text-blue-400 p-2 " href="/Academic/CETS">Excellence for Tribal Studies</a>
                  </li>
                  <li>
                    <a  className="text-gray-700 text-lg hover:text-blue-400 p-2 " href="/Academic/CEPH">
                      Excellence on Public Health Nutrition
                    </a>
                  </li>
                  <li>
                    <a  className="text-gray-700 text-lg hover:text-blue-400 p-2 " href="/Academic/CIER">
                      Industrial Electronics &amp; Robotics
                    </a>
                  </li>
                  <li>
                    <a  className="text-gray-700 text-lg hover:text-blue-400 p-2 " href="/Academic/CDNM">Nanomaterials</a>
                  </li>
                  <li>
                    <a   className="text-gray-700 text-lg hover:text-blue-400 p-2 " href="/Academic/PARC">
                      Poverty Alleviation Research Centre
                    </a>
                  </li>
                  <li>
                    <a  className="text-gray-700 text-lg hover:text-blue-400 p-2 "  href="/Academic/CRES">Renewable Energy Systems</a>
                  </li>
                  <li>
                    <a  className="text-gray-700 text-lg hover:text-blue-400 p-2 " href="/Academic/STIC">
                      Space Technology Incubation Center
                    </a>
                  </li>
                  <li>
                    <a  className="text-gray-700 text-lg hover:text-blue-400 p-2 " href="/Academic/SRC">Steel Research Centre</a>
                  </li>
                </ul>

                <h5>
                  <a className="text-orange-500 border-b-2  border-orange-600 text-xl p-1" href="">
                    Facilities
                  </a>
                </h5>
                <ul>
                  <li>
                    <a  className="text-gray-700 text-lg hover:text-blue-400 p-2 " href="javascript:void(0);">Central Workshop</a>
                  </li>
                  <li>
                    <a  className="text-gray-700 text-lg hover:text-blue-400 p-2 " href="https://nitrkl.ac.in/crf/">
                      Central Research Facility
                    </a>
                  </li>
                  <li>
                    <a  className="text-gray-700 text-lg hover:text-blue-400 p-2 " id="submenu-acadhpc" href="/HPCRkl">
                      High Performance Computing
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div id="tmenu-institute">
          <a
            href="#"
            className="text-white text-lg"
            onClick={() => toggleSubMenu("students")}
          >
            Students
            <span className="submenu-indicator">
              <span className="submenu-indicator-chevron border-white"></span>
            </span>
          </a>
          <div
            className={`megamenu-panel absolute top-30 left-0 w-screen bg-white nav-submenu ${
              openSubMenuId === "students" ? "" : "hidden"
            }`}
          >
            <ul className="flex justify-around text-black p-4 ">
              <li>
                <h5>
                  <a className="text-orange-500 border-b-2   border-orange-600 text-xl  " href="">
                    Prospective Students
                  </a>
                </h5>
                <ul>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 " id="submenu-why" href="/Student/WhyNITR">
                      Why NIT Rourkela
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 " href="/Institute/Gallery">Gallery</a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 " href="/Institute/CampusFacility">Campus Life</a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 "
                      id="submenu-international"
                      href="/Student/InternationalStudents"
                    >
                      For International Students
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 "
                      id="submenu-finassist"
                      href="/Student/FinancialAssistance"
                    >
                      Financial Assistance
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 " href="/Academic/UGProgramme">Academic Programmes</a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 " href="/Academic/CurriculaSyllabi">
                      Curriculum and Syllabi
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 " id="submenu-apply" href="/Student/How2Apply">
                      How to Apply
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 " id="submenu-process" href="/Student/Process">
                      Admission Process
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 " href="/Student/Advertisements">
                      Admission Advt. and Notices
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 " href="/SRICCE/Career">Project Advt. and Notices</a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 " id="submenu-faq1" href="/Student/FAQs">
                      FAQs
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h5>
                  <a className="text-orange-500 border-b-2   border-orange-600 text-xl  " href="">
                    Existing Students
                  </a>
                </h5>
                <ul>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 "  href="/Academic/AcademicRegulations">
                      Rules and Regulations
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 " id="submenu-forms" href="/Student/Forms">
                      Forms
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 " href="/Academic/AcademicCalendar">Academic Calendar</a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 " href="/Academic/AcademicTimeTable">Time Table</a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 " id="submenu-holidays" href="/Academic/Holidays">
                      Holidays
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 " href="https://eapplication.nitrkl.ac.in/nitris/">
                      Academic ERP (NITRis)
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 " href="https://nitrkl.ac.in/parentconnect/">
                      Parent Connect
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 " href="https://eapplication.nitrkl.ac.in/nitris/">
                      Examination and Results
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 " href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=1509159">
                      Online Fee Payment
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h5>
                  <a className="text-orange-500 border-b-2   border-orange-600 text-xl   " href="">
                    Other Related Links
                  </a>
                </h5>
                <ul>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 "  id="submenu-abc" href="/Student/ABC">
                      UGC NAD / ABC Bureau
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 "  href="https://eapplication.nitrkl.ac.in/internship/">
                      Internship Programmes
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 "  href="https://www.ics-nitrkl.in/">
                      Institute Counselling Service
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 "  href="/SAC">Student Activity Centre</a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 "  href="/CDC">Career Development Centre</a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 "  href="https://library.nitrkl.ac.in/">Central Library</a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 "  id="submenu-hall" href="/Hall">
                      Halls of Residence
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 "  href="https://mondaymorning.nitrkl.ac.in/">
                      Monday Morning NEWS
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div id="tmenu-institute ">
          <a
            href="#"
            className="text-white text-lg "
            onClick={() => toggleSubMenu("faculty & staff")}
          >
            Faculty & Staff
            <span className="submenu-indicator">
              <span className="submenu-indicator-chevron border-white"></span>
            </span>
          </a>
          <div
            className={`megamenu-panel absolute top-30 left-0 w-screen bg-white nav-submenu ${
              openSubMenuId === "faculty & staff" ? "" : "hidden"
            }`}
          >
            <ul className="flex justify-around text-black p-4  ">
              <li>
                <h5>
                  <a className="text-orange-500 border-b-2  border-orange-600 text-xl p-1" href="">
                    Prospective Employee
                  </a>
                </h5>
                <ul>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 " href="/Institute/Welcome">What is NITR</a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 " id="submenu-whynitr" href="/FacultyStaff/WhyNITR">
                      Why Join NITR
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 " href="https://website.nitrkl.ac.in/FacultyStaff/Career/">
                      Job Openings
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h5>
                  <a  className="text-orange-500 border-b-2  border-orange-600 text-xl p-1" href="">
                    Existing Employee
                  </a>
                </h5>
                <ul>
                  <li>
                    <a id="submenu-faculty"  className="text-gray-700 text-lg hover:text-blue-400 p-2 " href="/FacultyStaff/Faculty">
                      Faculty Directory
                    </a>
                  </li>
                  <li>
                    <a  className="text-gray-700 text-lg hover:text-blue-400 p-2 "id="submenu-officer" href="/FacultyStaff/Officer">
                      Officer Directory
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 " id="submenu-staff" href="/FacultyStaff/Staff">
                      Staff Directory
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 " href="/Institute/CampusFacility">Campus Life</a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 "
                      id="submenu-ruleregulation"
                      href="/Institute/Rules_Regulations"
                    >
                      Rules and Regulations
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 "
                      id="submenu-circularnotices"
                      href="/FacultyStaff/CircularNotices"
                    >
                      Circular and Notices
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 "
                      id="submenu-officialform"
                      href="/FacultyStaff/OfficialForm"
                    >
                      Official Forms
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h5>
                  <a className="text-orange-500 border-b-2  border-orange-600 text-xl p-1" href="">
                    Useful Links
                  </a>
                </h5>
                <ul>
                  <li>
                     <a  className="text-gray-700 text-lg hover:text-blue-400 p-2 "  href="https://eapplication.nitrkl.ac.in/nitris/">
                      ERP (NITRis)
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 "  href="https://oac.nitrkl.ac.in/Hr%5Fpayroll/">
                      HR and Payroll
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 "  href="https://oac.nitrkl.ac.in/healthcentre/">
                      Health Centre
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 "  href="https://guesthouse.nitrkl.ac.in/Users/HomePage.aspx">
                      Guest House
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 "  id="submenu-sricce" href="/SRICCE">
                      SRICCE
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 "  id="submenu-purchase" href="/PurchaseSection">
                      Purchase and Store
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h5>
                  <a className="text-orange-500 border-b-2  border-orange-600 text-xl p-1" href="">
                    Retired Employee
                  </a>
                </h5>
                <ul>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 "  href="https://eapplication.nitrkl.ac.in/nitris/PensionerLogin.aspx">
                      Pensioners
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 text-lg hover:text-blue-400 p-2 "  href="https://eapplication.nitrkl.ac.in/nitris/PensionerLogin.aspx">
                      Pensioner Life Certificate
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div id="tmenu-institute">
          <a
            href="#"
            className="text-white  text-lg"
            onClick={() => toggleSubMenu("research")}
          >
            Research
            <span className="submenu-indicator">
              <span className="submenu-indicator-chevron border-white"></span>
            </span>
          </a>
          <div
            className={`megamenu-panel absolute  top-30 left-0 w-[300px] bg-white nav-submenu ${
              openSubMenuId === "research" ? "" : "hidden"
            }`}
          >
            <ul className="nav-dropdown nav-submenu items-center m-10   text-black">
            <h1 className="text-orange-600 text-2xl text-center border-b-2">Research</h1>

            <div className=" text-justify p-4">
              
              
                
              <li>
                <a className="text-gray-700 text-lg font hover:text-blue-400  "
                  id="submenu-publication"
                  href="/Research/PublicationsPatents"
                >
                  Publications and Patents
                </a>
              </li>
              <li>
                <a className="text-gray-700 text-lg hover:text-blue-400 "
                  id="submenu-sponsoredproject"
                  href="/Research/SponsoredProjects"
                >
                  Sponsored Projects
                </a>
              </li>
              <li>
                <a className="text-gray-700 text-lg hover:text-blue-400 "
                  id="submenu-consultancyproject"
                  href="/Research/ConsultancyProjects"
                >
                  Consultancy Projects
                </a>
              </li>
              <li>
                <a className="text-gray-700 text-lg hover:text-blue-400 "
                  id="submenu-continuingeducation"
                  href="/Research/ContinuingEducation"
                >
                  Continuing Education
                </a>
              </li>
              <li>
                <a className="text-gray-700 text-lg hover:text-blue-400 " id="submenu-conference" href="/Research/Conferences">
                  Conferences
                </a>
              </li>
             
              
              <li>
                <a className="text-gray-700 text-lg hover:text-blue-400  " id="submenu-workshops" href="/Research/Workshops">
                  Workshops
                </a>
              </li>
              <li>
                <a className="text-gray-700 text-lg hover:text-blue-400 " id="submenu-seminars" href="/Research/Seminars">
                  Seminars
                </a>
              </li>
              <li>
                <a className="text-gray-700 text-lg  hover:text-blue-400 " id="submenu-ipic" href="/Research/IPIC">
                  Intellectual Property Innovation Centre
                </a>
              </li>
              
              </div>
            </ul>
          </div>
        </div>
        <div id="tmenu-institute">
          <a
            href="#"
            className="text-white text-lg"
            onClick={() => toggleSubMenu("alumni")}
          >
            Alumni
            <span className="submenu-indicator ">
              <span className="submenu-indicator-chevron border-white"></span>
            </span>
          </a>
          <div
            className={`megamenu-panel absolute top-30 left-0 w-[350px] p-10 bg-white nav-submenu ${
              openSubMenuId === "alumni" ? "" : "hidden"
            }`}
          >
            <ul className="nav-dropdown nav-submenu text-black ">
            <h1 className="text-orange-600 text-2xl text-center border-b-2">Alumni</h1>
              <li>
                <a className="text-gray-700 text-lg hover:text-blue-400 " id="submenu-alumnirelations" href="/AIIR/AlumniRelations">
                  Alumni Relations
                </a>
              </li>
              <li>
                <a className="text-gray-700 text-lg hover:text-blue-400 " id="submenu-givingback" href="/AIIR/GivingBack">
                  Giving back to Alma Mater
                </a>
              </li>
              <li>
                <a className="text-gray-700 text-lg hover:text-blue-400 " id="submenu-transcripts" href="/AIIR/Transcript">
                  Transcripts
                </a>
              </li>
              <li>
                <a className="text-gray-700 text-lg hover:text-blue-400 " id="submenu-transcripts" href="/AIIR/DirectorMessage">
                  Director's Message to Alumni
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="tmenu-institute ">
          <a
            href="#"
            className="text-white text-lg"
            onClick={() => toggleSubMenu("resources")}
          >
            Resources
            <span className="submenu-indicator">
              <span className="submenu-indicator-chevron border-white"></span>
            </span>
          </a>
          <div
            className={`megamenu-panel absolute top-30 left-0 w-[500px] bg-white nav-submenu ${
              openSubMenuId === "resources" ? "" : "hidden"
            }`}
          >
            <ul className="nav-dropdown nav-submenu text-black p-10 ">
            <h1 className="text-orange-600 text-2xl text-center border-b-2">Resources</h1>
              <li>
                <a className="text-gray-700 text-lg hover:text-blue-400 "  id="submenu-crf" href="/Resources/Central_Research_Facility">
                  Central Research Facility
                </a>
              </li>
              <li>
                <a className="text-gray-700 text-lg hover:text-blue-400 "  id="submenu-industryrelation" href="/TIIR">
                  Centre for Technology Innovation and Industry Relations
                </a>
              </li>
              <li>
                <a className="text-gray-700 text-lg hover:text-blue-400 "  id="submenu-ftbi" href="/Resources/FTBI">
                  Foundation for Technology and Business Incubation
                </a>
              </li>
              <li>
                <a className="text-gray-700 text-lg hover:text-blue-400 "  id="submenu-acadhpc" href="/HPCRkl">
                  High Performance Computing
                </a>
              </li>
              <li>
                <a className="text-gray-700 text-lg hover:text-blue-400 " 
                  id="submenu-industrialconsultancy"
                  href="/Resources/IndustrialConsultancy"
                >
                  Industrial Consultancy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
