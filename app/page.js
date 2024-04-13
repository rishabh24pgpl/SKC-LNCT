"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Counter from "@/app/components/Counter";
import Card from "./components/Card";
import Seminar from '@/app/components/Seminar'
import Footer from "./components/Footer";
import Notices from "./components/News-Notices";
import AbouttheInstitute from "./components/AbouttheInstitute/AbouttheInstitute";
import CampusMap from "./components/CampusMap/CampusMap";
import AcademicEngineering from "./components/AcademicEngineering/AcademicEngineering";


export default function Home() {
    const [collegeNameIndex, setCollegeNameIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('postgraduate');
    const [currentSlide, setCurrentSlide] = useState(0);
    const collegeNames = [
        "SKC LNCT ",
        "एसकेसी एलएनसीटी ",
    ];




    useEffect(() => {
        const interval = setInterval(() => {
            setCollegeNameIndex((prevIndex) =>
                prevIndex === collegeNames.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Set default active tab to 'postgraduate'

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };


    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 2000); // Adjust the interval as needed (currently set to 5000 milliseconds or 5 seconds)
        return () => {
            clearInterval(intervalId);
        };
    }, [currentSlide]);

    // Function to toggle submenu

    const images = [
        '/baggi.jpg',
        '/mainImg.jpeg',
        '/baggi.jpg',
    ];



    const EventData = [
      {
        title: "Event 1",
        startDate: "2024-04-10",
        type: "event",
        uuid: "event1_uuid"
      },
      {
        title: "Event 2",
        startDate: "2024-04-15",
        type: "event",
        uuid: "event2_uuid"
      },
      {
        title: "Event 3",
        startDate: "2024-04-20",
        type: "event",
        uuid: "event3_uuid"
      },
      // Add more events as needed
    ];
  
    const carouselData = [
      { id: 1, title: "News 1", description: "Description for News 1", imageUrl: "/yt.png" },
      { id: 2, title: "News 2", description: "Description for News 2", imageUrl: "/yt.png" },
      { id: 3, title: "News 3", description: "Description for News 3", imageUrl: "/yt.png" },
      { id: 4, title: "News 4", description: "Description for News 4", imageUrl: "/yt.png" },
      // Add more news items as needed
    ];

  const additionalCarouselData = [
    { id: 1, title: "News 1", description: "Description for News 1", imageUrl: "/yt.png" },
    { id: 2, title: "News 2", description: "Description for News 2", imageUrl: "/yt.png" },
    { id: 3, title: "News 3", description: "Description for News 3", imageUrl: "/yt.png" },
    { id: 4, title: "News 4", description: "Description for News 4", imageUrl: "/yt.png" },
  ]

    const EventsData = [
      {
        title: "Event 1",
        startDate: "2024-04-10",
        type: "event",
        uuid: "event1_uuid"
      },
      {
        title: "Event 2",
        startDate: "2024-04-15",
        type: "event",
        uuid: "event2_uuid"
      },
      {
        title: "Event 3",
        startDate: "2024-04-20",
        type: "event",
        uuid: "event3_uuid"
      },
            {
        title: "Event 1",
        startDate: "2024-04-10",
        type: "event",
        uuid: "event1_uuid"
      },
      {
        title: "Event 2",
        startDate: "2024-04-15",
        type: "event",
        uuid: "event2_uuid"
      },
      {
        title: "Event 3",
        startDate: "2024-04-20",
        type: "event",
        uuid: "event3_uuid"
      },
      // Add more events as needed
    ];
  
    const ScarouselData = [
      { id: 1, title: "News 1", description: "Description for News 1", imageUrl: "/yt.png" },
      { id: 2, title: "News 2", description: "Description for News 2", imageUrl: "/yt.png" },
      { id: 3, title: "News 3", description: "Description for News 3", imageUrl: "/yt.png" },
      { id: 4, title: "News 4", description: "Description for News 4", imageUrl: "/yt.png" },
      // Add more news items as needed
    ];
    const additionalCarouselDataseminar = [
      { id: 1, title: "News 1", description: "Description for News 1", imageUrl: "/yt.png" },
      { id: 2, title: "News 2", description: "Description for News 2", imageUrl: "/yt.png" },
      { id: 3, title: "News 3", description: "Description for News 3", imageUrl: "/yt.png" },
      { id: 4, title: "News 4", description: "Description for News 4", imageUrl: "/yt.png" },

      // Add more news items as needed
    ];

    return (
        <div className=" text-white">
            <div className="flex items-center justify-between p-2 bg-orange-600">
                <div className="items-center flex gap-4 ">
                    <p>Admissions</p>
                    <p>Placement</p>
                    <p>Careers</p>
                </div>

                <div className="items-center gap-4 flex w-8 h-8 ">
                    <img src="/twitter.png" className="rounded-full"></img>
                    <img src="/yt.png" className="rounded-full"></img>
                    <img src="/insta.png" className="rounded-full"></img>
                </div>


                {/* Login button */}
                <div className="flex ">
                    <Link
                        className="text-xs px-4 py-2 leading-none rounded-full hover:bg-green-300 hover:text-black border-2"
                        href="\loginPage"
                    >
                        STAFF LOGIN
                    </Link>
                </div>
            </div>

            <div className="flex items-center justify-between px-4 bg-orange-400">
                {/* Logo and college name */}
                <div className="flex items-center gap-4">
                    <div className="w-[100px] h-[100px] relative">
                        <Image
                            src="/logo1.png"
                            layout="fill"
                            objectFit="contain"
                            alt="Logo"
                        />
                    </div>
                    <h1 className="text-3xl font-semibold">
                        {collegeNames[collegeNameIndex]}
                    </h1>
                    <div className="slogan">An Institute of National Importance</div>
                </div>

                {/* Search box */}
                <div>
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-4 py-2 rounded-full border border-white focus:outline-none focus:border-gray-300"
                    />
                </div>
            </div>

            <Navbar />

            <div className="md:w-full lg:w-full sm:w-full w-full">
                <Image
                    className="duration-500 w-full min-h-[500px] max-h-[500px]"
                    src={images[currentSlide]}
                    alt="Hero Image"
                    width={700}
                    height={650}
                />
            </div>

<section className="m-10">
  <Notices eventData={EventData} carouselData={carouselData} additionalCarouselData={additionalCarouselData} />
</section>

      <section className="academic-programe  mx-auto  flex justify-center     " style={{background: "url('/baggi.jpg')" , backgroundRepeat:"no-repeat" ,backgroundSize:"cover"  }}>
        <div className="container  flex flex-col lg:flex-row items-center  bg-opacity-75 bg-orange-900 h-[580px]  ">
          <nav className="nav flex-col lg:w-1/4 p-4">
            <h2 className="text-3xl w-80 text-white  text-center font-semibold mb-6">
              Academic Programme
            </h2>
            <ul className="space-y-2 bg-white rounded-xl p-4">
              <li className="p-4 bg-white rounded-lg text-black hover:bg-orange-400">
                <button
                  onClick={() => handleTabClick("undergraduate")}
                  className={`nav-link ${
                    activeTab === "undergraduate" ? "active" : ""
                  }`}
                  role="tab"
                >
                  UNDERGRADUATE
                </button>
              </li>
              <li className="p-4 bg-white rounded-lg text-black hover:bg-orange-400">
                <button
                  onClick={() => handleTabClick("postgraduate")}
                  className={`nav-link ${
                    activeTab === "postgraduate" ? "active" : ""
                  }`}
                  role="tab"
                >
                  POSTGRADUATE
                </button>
              </li>
              <li className="p-4 bg-white rounded-lg text-black hover:bg-orange-400">
                <button
                  onClick={() => handleTabClick("doctoral")}
                  className={`nav-link ${
                    activeTab === "doctoral" ? "active" : ""
                  }`}
                  role="tab"
                >
                  DOCTORAL
                </button>
              </li>
              <li className="p-4 bg-white rounded-lg text-black hover:bg-orange-400">
                <button
                  onClick={() => handleTabClick("executive")}
                  className={`nav-link ${
                    activeTab === "executive" ? "active" : ""
                  }`}
                  role="tab"
                >
                  EXECUTIVE PH.D.
                </button>
              </li>
              <li className="p-4 bg-white rounded-lg text-black hover:bg-orange-400">
                <button
                  onClick={() => handleTabClick("parttime")}
                  className={`nav-link ${
                    activeTab === "parttime" ? "active" : ""
                  }`}
                  role="tab"
                >
                  PART TIME PROGRAMMES
                </button>
              </li>
            </ul>
          </nav>
          <div className="tab-content lg:w-3/4 p-4 ">
            {activeTab === "undergraduate" && (
              <article
                className="tab-pane fade text-black"
                id="category_tab1"
                role="tabpanel"
              >
                <h2 className="text-white font-bold text-3xl ">UNDERGRADUATE</h2>
                <p className="text-white  text-justify">
                  Admission to undergraduate courses is made in the autumn
                  semester at the first-year level through JEE (Main) or similar
                  test approved by NIT Council, the counselling for which is
                  done by Joint Seat Allocation Authority (
                  <a
                    href="https://josaa.nic.in/"
                    className="outside-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    JoSAA
                  </a>
                  ) and Central Seat Allocation Board (CSAB) or its equivalent
                  approved by the NIT Council and/or Central Government.
                  Besides, a specified number of foreign nationals selected
                  under the policy of the Government of India may be admitted
                  directly to the 1st-year of any of the programmes.
                </p>
              </article>
            )}
            {activeTab === "postgraduate" && (
              <article
                className="tab-pane fade active show text-black"
                id="category_tab2"
                role="tabpanel"
              >
                <h2 className="text-white font-bold text-3xl">POSTGRADUATE</h2>
                <p>y</p>
                <h4 className="text-white mt-5 ">M. Tech.</h4>
                <p className="text-white text-justify">
                  The courses leading to M. Tech. degree are open to candidates
                  who have obtained the requisite qualification with 60% marks
                  or 6.50 CGPA in aggregate in the qualifying examination.
                  Admission for the GATE qualified candidates is made through
                  Common Admission Process called Central Counselling for
                  Master’s of Technology (CCMT). Relaxation up to 5% of marks or
                  0.5 CGPA is allowed by senate for sponsored candidates with
                  proven research or profession experience.
                </p>
                {/* Add content for other postgraduate programs */}
              </article>
            )}
            {activeTab === "doctoral" && (
              <article
                className="tab-pane fade text-black"
                id="category_tab3"
                role="tabpanel"
              >
                <h2 className="text-white font-bold text-3xl">DOCTORAL</h2>
                <p className="text-white text-justify">
                  The institute offers various research centric courses in
                  various departments/ Centers like Post Doc, PhD, M.Tech
                  research under various schemes with fellowship and sponsored
                  programs like QIP and self financed.
                </p>
                <h4 className="text-white mb-4 font-bold text-3xl">
                  Doctor of Philosophy (Ph.D.)
                </h4>
                <p className="text-white text-justify">
                  The Institute provides facilities for research leading to the
                  Degree of Doctor of Philosophy (PhD) in Engineering, Science,
                  Management, Planning and Architecture, Humanities and Social
                  Sciences in various disciplines. Candidates except the members
                  of the Institute faculty, QIP scholars and scholars nominated
                  by the Central Government have to be selected by Departmental
                  Research Committee (DRC) on the basis of their academic
                  background, performance in written test and/or interview.
                </p>
              </article>
            )}
            {activeTab === "executive" && (
              <article
                className="tab-pane fade text-black"
                id="category_tab4"
                role="tabpanel"
              >
                <h2 className="text-white font-bold  text-3xl">EXECUTIVE PH.D.</h2>
                <p className="text-white text-justify">
                  NIT Rourkela has opened its doors for working professionals by
                  offering programmes which are designed to enable them to
                  pursue their doctorate degree while continuing in their
                  Job/Profession in order to help them to accelerate their
                  career. Candidates with minimum eligibility criteria as per
                  NIT guidelines can apply and they will be selected based upon
                  their academic background, performance in written test and/or
                  interview.
                </p>
              </article>
            )}
            {activeTab === "parttime" && (
              <article
                className="tab-pane fade text-black"
                id="category_tab5"
                role="tabpanel"
              >
                <h2 className="text-white font-bold  text-3xl">PART TIME PROGRAMMES</h2>
                <p className="text-white text-justify">
                  NIT Rourkela has opened its doors for working professionals.
                  These programmes are designed to enable them to pursue higher
                  study while continuing in their Job/Profession in order to
                  help them to accelerate their career.
                </p>
              </article>
            )}
          </div>
        </div>
      </section>

      <AbouttheInstitute/>  
     
  

      <section class=" flex  h-[300px] w-full mx-auto pt-2  ">
        <div class="items flex-1 w-full bg-cyan-500 text-white p-8 text-center  ">
          <h2 className="font-semibold text-2xl">Thought of the Day</h2>
          <h5 className="font-semibold text-xl py-5 text-justify">
            Sometimes the biggest strength can be found in how you understand
            and confront your greatest weaknesses.
          </h5>
          <h5 className="font-semibold text-2xl">
            <i>--Michael Springer--</i>
          </h5>
        </div>
        <div class="item flex-1 w-full bg-teal-400 p-8 items-center text-center ">
          <h2 className="font-semibold text-2xl">Word of the Day</h2>
          <h5 className="font-semibold text-xl py-5">कार्यात्मक</h5>
          <h5 className="font-semibold text-2xl">FUNCTIONAL</h5>
        </div>
      </section>

            <section>
                <div className="w-11/12 mx-auto  rounded-full   sm:p-4  md:p-4 lg:p-5 p-8  border-black grid md:grid-cols-1 lg:grid-cols-4   sm:grid-cols-1 gap-5  justify-center items-center   dark:bg-dpurple">
                    <div className=" ">
                        <Counter
                            initialValue={0}
                            targetValue={2000}
                            speed={0.001}
                            text="Seed"
                            textColor="text-blue-600"
                            title="First Counter"
                            color="bg-[#bd5638]"
                        />
                    </div>
                    <div className=" ">
                        <Counter
                            initialValue={20}
                            targetValue={100}
                            speed={100}
                            text="Seed"
                            textColor="text-green-700"
                            title="Second Counter"
                            color="bg-[#5a3224]"
                        />
                    </div>
                    <div className="">
                        <Counter
                            initialValue={5}
                            targetValue={15}
                            speed={200}
                            text="Seed"
                            textColor="text-red-600"
                            title="Third Counter"
                            color="bg-[#223250]"
                        />
                    </div>

                    <div className="">
                        <Counter
                            initialValue={5}
                            targetValue={15}
                            speed={200}
                            text="Seed"
                            textColor="text-red-600"
                            title="Third Counter"
                            color="bg-[#22472d]"
                        />
                    </div>
                </div>
            </section>
            <section>
                <div
                    //   
                    className="flex "
                    style={{
                        backgroundImage: "url('/HomeBg.svg')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="md:w-full lg:w-1/2 sm:w-full bg-[#393939] ">
                        <h3 className="font-bold text-3xl p-5  text-white">Ranking and Recognition &nbsp; &nbsp;&nbsp;<span className="text-sm">View All...</span></h3>
                        <Image
                            className="duration-200 min-h-[350px] max-h-[400px] rounded-lg pt-4  p-2 flex mx-auto items-center rounded-md"
                            src={images[currentSlide]}
                            alt="Hero Image"
                            width={700}
                            height={650}
                        />
                    </div>
                    <div className="md:w-full lg:w-1/2 sm:w-full  flex flex-col justify-center bg-[#393939] ">


                        <div className="w-ful rounded-md  sm:p-4  md:p-4 lg:p-5 p-8 shadow-none  border-black grid md:grid-cols-1 lg:grid-cols-2   sm:grid-cols-1 gap-5  justify-center items-center   dark:bg-dpurple">
                            <div className=" flex-col justify-center items-center inline-flex sm:w-full md:w-1/3  flex-wrap  ">
                                <Card
                                    title="Department"
                                    content="10"
                                    imageUrl="/department.png"
                                />
                            </div>
                            <div className=" flex-col justify-center items-center inline-flex sm:w-full md:w-1/3 flex-wrap ">
                                <Card
                                    title="Faculty"
                                    content=" 70+"
                                    imageUrl="/staff.png"
                                />
                            </div>
                            <div className=" flex-col justify-center items-center inline-flex sm:w-full md:w-1/3 flex-wrap ">
                                <Card
                                    title="Faculty"
                                    content="3050+"
                                    imageUrl="/student-icon.png"
                                />
                            </div>
                            <div className=" flex-col justify-center items-center inline-flex sm:w-full md:w-1/3  flex-wrap">
                                <Card
                                    title="Faculty"
                                    content="100"
                                    imageUrl="/faculty.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
<section>
  <Seminar eventData={EventsData} carouselData={ScarouselData} additionalCarouselData={additionalCarouselDataseminar}/>
</section>

            <Footer />

        </div>
    );
}






