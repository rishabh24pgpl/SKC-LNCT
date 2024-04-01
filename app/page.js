'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Carousel from "@/app/components/Carousel";
import Navbar from "@/app/components/Navbar";
import Counter from '@/app/components/Counter'
import Card from "./components/Card";


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
        '/yt.png',
        '/twitter.png',
        '/logo1.png',
    ];
    return (
        <div className=" text-white">
            <div className="flex items-center justify-between p-4 bg-orange-600">
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
                        <Image src="/logo1.png" layout="fill" objectFit="contain" alt="Logo" />
                    </div>
                    <h1 className="text-3xl font-semibold">{collegeNames[collegeNameIndex]}</h1>
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
            <div>    <Navbar /></div>


           <div className="md:w-full lg:w-full sm:w-full w-full">
            <Image
              className="duration-500 w-full min-h-[500px] max-h-[500px]"
              src={images[currentSlide]}
              alt="Hero Image"
              width={700}
              height={650}
            />
          </div>



            <section className="academic-programe h-[400px] bg-white">
                <div className="container mx-auto flex flex-col lg:flex-row items-center ">
                    <nav className="nav flex-col lg:w-1/4 p-4">
                        <h2 className="text-lg font-semibold mb-4">Academic Programme</h2>
                        <ul className="space-y-2 bg-orange-400 p-4">
                            <li className="p-4 bg-white rounded-lg text-black">
                                <button onClick={() => handleTabClick('undergraduate')} className={`nav-link ${activeTab === 'undergraduate' ? 'active' : ''}`} role="tab">UNDERGRADUATE</button>
                            </li>
                            <li className="p-4 bg-white rounded-lg text-black">
                                <button onClick={() => handleTabClick('postgraduate')} className={`nav-link ${activeTab === 'postgraduate' ? 'active' : ''}`} role="tab">POSTGRADUATE</button>
                            </li>
                            <li className="p-4 bg-white rounded-lg text-black">
                                <button onClick={() => handleTabClick('doctoral')} className={`nav-link ${activeTab === 'doctoral' ? 'active' : ''}`} role="tab">DOCTORAL</button>
                            </li>
                            <li className="p-4 bg-white rounded-lg text-black">
                                <button onClick={() => handleTabClick('executive')} className={`nav-link ${activeTab === 'executive' ? 'active' : ''}`} role="tab">EXECUTIVE PH.D.</button>
                            </li>
                            <li className="p-4 bg-white rounded-lg text-black">
                                <button onClick={() => handleTabClick('parttime')} className={`nav-link ${activeTab === 'parttime' ? 'active' : ''}`} role="tab">PART TIME PROGRAMMES</button>
                            </li>
                        </ul>
                    </nav>
                    <div className="tab-content lg:w-3/4 p-4 ">
                        {activeTab === 'undergraduate' && (
                            <article className="tab-pane fade text-black" id="category_tab1" role="tabpanel">
                                <h2 className="text-black font-bold">UNDERGRADUATE</h2>
                                <p>Admission to undergraduate courses is made in the autumn semester at the first-year level through JEE (Main) or similar test approved by NIT Council,
                                    the counselling for which is done by Joint Seat Allocation Authority (<a href="https://josaa.nic.in/" className="outside-link" target="_blank" rel="noreferrer">JoSAA</a>)
                                    and Central Seat Allocation Board (CSAB) or its equivalent approved by the NIT Council and/or
                                    Central Government. Besides, a specified number of foreign nationals selected under the policy of the Government of India may be admitted directly to the 1st-year of any
                                    of the programmes.</p>
                            </article>
                        )}
                        {activeTab === 'postgraduate' && (
                            <article className="tab-pane fade active show text-black" id="category_tab2" role="tabpanel">
                                <h2 className="text-black font-bold">POSTGRADUATE</h2>
                                <h4 className="text-black mt-5">M. Tech.</h4>
                                <p>The courses leading to M. Tech. degree are open to candidates who have obtained the requisite qualification with 60% marks or 6.50 CGPA in aggregate in the qualifying examination.
                                    Admission for the GATE qualified candidates is made through Common Admission Process called Central Counselling for Master’s of Technology (CCMT).  Relaxation up to 5% of marks
                                    or 0.5 CGPA is allowed by senate for sponsored candidates with proven research or profession experience.</p>
                                {/* Add content for other postgraduate programs */}
                            </article>
                        )}
                        {activeTab === 'doctoral' && (
                            <article className="tab-pane fade text-black" id="category_tab3" role="tabpanel">
                                <h2 className="text-black font-bold">DOCTORAL</h2>
                                <p>The institute offers various research centric courses in various departments/ Centers like Post Doc, PhD, M.Tech research under various schemes with fellowship and sponsored programs like QIP and self financed.</p>
                                <h4 className="text-black font-bold">Doctor of Philosophy (Ph.D.)</h4>
                                <p>
                                    The Institute provides facilities for research leading to the Degree of Doctor of Philosophy (PhD) in Engineering, Science, Management,
                                    Planning and Architecture, Humanities and Social Sciences in various disciplines. Candidates except the members of the Institute faculty, QIP scholars and
                                    scholars nominated by the Central Government have to be selected by Departmental Research Committee (DRC) on the basis of their academic background,
                                    performance in written test and/or interview.
                                </p>
                            </article>
                        )}
                        {activeTab === 'executive' && (
                            <article className="tab-pane fade text-black" id="category_tab4" role="tabpanel">
                                <h2 className="text-black font-bold">EXECUTIVE PH.D.</h2>
                                <p>NIT Rourkela has opened its doors for working professionals by offering programmes which are designed to enable them to pursue their doctorate degree while continuing in their Job/Profession in order to help them to accelerate their career. Candidates with minimum eligibility criteria as per NIT guidelines can apply and they will be selected based upon their academic background, performance in written test and/or interview.</p>
                            </article>
                        )}
                        {activeTab === 'parttime' && (
                            <article className="tab-pane fade text-black" id="category_tab5" role="tabpanel">
                                <h2 className="text-black font-bold">PART TIME PROGRAMMES</h2>
                                <p>NIT Rourkela has opened its doors for working professionals. These programmes are designed to enable them to pursue higher study while continuing in their Job/Profession in order to help them to accelerate their career.</p>
                            </article>
                        )}
                    </div>
                </div>
            </section>


            <section class="bottom-section flex">
                <div class="item flex-1 bg-blue-500 text-white p-28 text-center ">
                    <h2 className="font-semibold text-2xl">Thought of the Day</h2>
                    <h5 className="font-semibold text-xl py-5">Sometimes the biggest strength can be found in how you understand and confront your greatest weaknesses.</h5>
                    <h5 className="font-semibold text-2xl"><i>--Michael Springer--</i></h5>
                </div>
                <div class="item flex-1 bg-blue-300 p-28 text-center">
                    <h2 className="font-semibold text-2xl">Word of the Day</h2>
                    <h5 className="font-semibold text-xl py-5">कार्यात्मक</h5>
                    <h5 className="font-semibold text-2xl">FUNCTIONAL</h5>
                </div>
            </section>



            <section>

                <div className="w-full mt-10 rounded-md border-2 sm:p-4  md:p-4 lg:p-5 p-4 shadow-none lg:shadow-[7px_8px_4px_2px_#00A76F] border-black grid md:grid-cols-1 lg:grid-cols-4   sm:grid-cols-1 gap-5  justify-center items-center bg-[url('/greenBg.svg')]  dark:bg-dpurple">
                    <div className=" flex-col justify-center items-center inline-flex sm:w-full md:w-1/3 lg:w-full ">
                        <Counter
                            initialValue={0}
                            targetValue={2000}
                            speed={0.001}
                            textColor="text-blue-600"
                            title="First Counter"
                        />
                        <div className="self-stretch text-black  font-medium text-xs">
                            Students Passed Out
                        </div>
                    </div>
                    <div className=" flex-col justify-center items-center inline-flex sm:w-full md:w-1/3 lg:w-full ">
                        <Counter
                            initialValue={20}
                            targetValue={100}
                            speed={100}
                            text="Seed"
                            textColor="text-green-700"
                            title="Second Counter"
                        />
                        <div className="self-stretch text-black  font-medium text-xs">
                            Award & Recognitions
                        </div>
                    </div>
                    <div className=" flex-col justify-center items-center inline-flex sm:w-full md:w-1/3 lg:w-full ">
                        <Counter
                            initialValue={5}
                            targetValue={15}
                            speed={200}
                            textColor="text-red-600"
                            title="Third Counter"
                        />
                        <div className="self-stretch text-black  font-medium text-xs">
                            Experience Educators
                        </div>
                    </div>

                    <div className=" flex-col justify-center items-center inline-flex sm:w-full md:w-1/3 lg:w-full ">
                        <Counter
                            initialValue={5}
                            targetValue={15}
                            speed={200}
                            textColor="text-red-600"
                            title="Third Counter"
                        />
                        <div className="self-stretch text-black  font-medium text-xs">
                            Experience Educators
                        </div>
                    </div>
                </div>
            </section>

            <section>
            <div
          className="md:flex md:flex-col lg:flex-row  md:p-4 lg:p-4 sm:p-4 sm:flex-col mt-2  border border-gray-200 rounded-lg  shadow-none lg:shadow-[7px_8px_4px_2px_#00A76F] dark:bg-dpurple"
          style={{
            backgroundImage: "url('/HomeBg.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="md:w-full lg:w-1/2 sm:w-full w-full">
            <h3 className="font-bold text-3xl text-black">Ranking and Recognition &nbsp; <span className="text-lg">View All</span></h3>
            <Image
              className="duration-200 min-h-[300px] max-h-[300px] rounded-lg pt-4"
              src={images[currentSlide]}
              alt="Hero Image"
              width={700}
              height={650}
            />
          </div>
          <div className="md:w-full lg:w-1/2 sm:w-full  flex flex-col justify-center ">
        

            <div className="w-full  rounded-md  sm:p-4  md:p-4 lg:p-5 p-4 shadow-none  border-black grid md:grid-cols-1 lg:grid-cols-3   sm:grid-cols-1 gap-5  justify-center items-center   dark:bg-dpurple">
              <div className=" flex-col justify-center items-center inline-flex sm:w-full md:w-1/3 lg:w-full flex-wrap ">
                <Card
                    title="Faculty"
                    content="Tailwind CSS."
                    imageUrl="https://via.placeholder.com/300"
                />
              </div>
              <div className=" flex-col justify-center items-center inline-flex sm:w-full md:w-1/3 lg:w-full ">
                <Card
                 title="Faculty"
                 content=" Tailwind CSS."
                 imageUrl="https://via.placeholder.com/300"
                />
              </div>
              <div className=" flex-col justify-center items-center inline-flex sm:w-full md:w-1/3 lg:w-full ">
                <Card
                   title="Faculty"
                   content=" Tailwind CSS."
                   imageUrl="https://via.placeholder.com/300"
                />
              </div>
              <div className=" flex-col justify-center items-center inline-flex sm:w-full md:w-1/3 lg:w-full ">
                <Card
                   title="Faculty"
                   content="Tailwind CSS."
                   imageUrl="https://via.placeholder.com/300"
                />
              </div>
            </div>
          </div>
        </div>
            </section>


        </div>
    );

}





