"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import Footer from '../Footer/Footer';
export default function TIIR() {
    const [collegeNameIndex, setCollegeNameIndex] = useState(0);

    const collegeNames = [
        " LNCT ",
        "एसकेसी एलएनसीटी ",
    ];
    return (
        <div>

        


            <div
        className="w-full h-36 flex justify-center  items-center"
        style={{
          // backgroundImage: "url('/logo1.png')",
          backgroundColor: "#1889a2",
          backgroundSize: "cover",
        }}
      >
        <h1 className=" uppercase font-bold text-5xl">Technology Innovation and Industry Relations</h1>
      </div>
            <div className='grid grid-cols-3 gap-[70px] '>
                <div className='col-span-2 text-justify ml-24 mt-20 '>
                    <h4 className='text-red-900 text-[20px] mt-2 mb-2  font-bold'> Technology Innovation and Industry Relations (TIIR)</h4>
                    <p className='text-[14px]'> At Lakshmi Narain College of Technology (LNCT) Indore, the Technology Innovation and Industry Relations (TIIR) cell is a vibrant hub that fosters a culture of innovation, entrepreneurship, and collaboration with industry partners. TIIR is designed to bridge the gap between academia and industry, providing a platform for students, faculty, and industry experts to come together and develop innovative solutions to real-world problems. Through TIIR, LNCT Indore aims to promote technology-based innovation, entrepreneurship, and job creation, while also enhancing the colleges industry connect and reputation. The cell organizes various events, workshops, and challenges throughout the year, such as hackathons, ideathons, and innovation competitions, to encourage students to think out-of-the-box and develop innovative solutions. Additionally, TIIR provides resources, mentorship, and funding support to students and faculty to help them transform their ideas into successful startups, thereby creating a ecosystem that promotes innovation, entrepreneurship, and industry-academia collaboration. By leveraging the power of TIIR, LNCT Indore is poised to become a leading institution in the region, known for its innovative and industry-relevant programs, and its ability to produce talented and entrepreneurial graduates who can make a meaningful impact in the world.
                    </p>
                    <h4 className='text-red-900 text-[20px] mt-2 mb-2 font-bold'>TIIR: A New Paradigm</h4>
                    <p className='text-[14px]'>LNCT Indore proudly introduces TIIR: A New Paradigm, an innovative initiative designed to revolutionize the landscape of technology and entrepreneurship education. TIIR (Technology Innovation and Incubation Resource) embodies LNCT Indores commitment to fostering a dynamic ecosystem where students, faculty, and industry experts collaborate to transform groundbreaking ideas into viable startups and impactful solutions. By integrating cutting-edge facilities, mentorship programs, and robust industry partnerships, TIIR empowers aspiring innovators to navigate the complexities of modern technology challenges effectively. This new paradigm not only enhances the academic experience but also bridges the gap between theoretical knowledge and practical application, positioning LNCT Indore at the forefront of nurturing the next generation of pioneers and leaders in the global technology arena.
                    </p>
                    <h4 className='text-red-900 text-[20px] mt-2 mb-2 font-bold'>Functions and Scopes of TIIR</h4>
                    <ul className='m-5 mb-20 text-[14px]'>
                        <li><span>&#10003;</span>Provide facilities for translation of scientific ideas to real products or services.</li>
                        <li><span>&#10003;</span> The facilities will include laboratories, pilot plants, workshops and small production centres or factories. They will be made available to –
                            <br /> <li className='ml-20 text-[14px]'> <span>&#8594;</span> Faculty, staff and students of the institute with ideas on marketable products or processes, who would like to eventually set up their own business,</li>
                            <br /> <li className='ml-20 text-[14px]'> <span>&#8594;</span> Faculty and students of the institute collaborating with external financiers, entrepreneurs and technocrats in setting up business, </li>
                            <br /><li className='ml-20 text-[14px]'> <span>&#8594;</span> External business enterprises (with or without an internal stake holder) interested in using the intellectual resources of NITR. </li></li>
                        <li> <span>&#10003;</span>   Showcase the intellectual capital, R&D infrastructure, flexible curricula, student projects, library and ICT facilities, sports and student activities of LNCT Indore before industries, Government and Society.</li>
                        <li> <span>&#10003;</span>  nvite major industrial houses and small technical entrepreneurs to set up their R&D and product development centres in TIIR and take proactive measures to convince potential participants on the merits of joining TIIR.</li>
                        <li> <span>&#10003;</span> Coordinate with industry organizations such as CII, FICCI, Assocham and others in creating awareness among industry leaders on the merits of setting up R&D centres and incubation facilities in TIIR and thus exploit the intellectual powerhouse of NIT.</li>
                        <li> <span>&#10003;</span>  Invite and lobby with Government departments such as Defence, Space, Atomic Energy, Steel & Mines, Agriculture, Environment and Forests etc. for setting up full-fledged R&D centres in NIT campus.</li>
                        <li> <span>&#10003;</span> Liaison with Government Departments and the institute administration to ensure that these facilities function in a problem free manner.</li>
                        <li> <span>&#10003;</span> Manage facilities and provide day to day operational support to on-campus businesses located inside TIIR building or outside.</li>
                        <li> <span>&#10003;</span> Facilitate and administer faculty and student travel to industry for spending time between a week and a year for adding industrial relevance to their research.</li>
                        <li> <span>&#10003;</span> Handle all IPR issues – file and pursue patent applications, negotiate IPR sale and purchase, and receive and distribute royalties etc.</li>
                        <li> <span>&#10003;</span> Coordinate Training & Placement of NITR students, a job being presently managed by T&P Centre. The T&P Centre will form a part of the new TIIR Centre.</li>
                        <li> <span>&#10003;</span> Support student projects – B.Tech., M.Sc., M.Tech., M.Tech. (R) and Ph.D. that are linked to industry or are business oriented.</li>
                    </ul>
                </div>
                <div className=' mt-32 h-[350px] w-[270px]'>
                    <ul className='border border-gray-400 p-[15px] '>
                        <h5 className=' text-[20px] mb-3'>RELATED LINKS</h5>
                        <li className=' py-[10px] text-red-800 text-[12px] '> <a href="">About</a></li> <hr />
                        <li className=' py-[10px] text-[12px] hover:text-red-800 '><a href="">Industry Relations</a></li>       <hr />
                        <li className=' py-[10px] text-[12px] hover:text-red-800 '> <a href="">Facilities of TIIR</a></li> <hr />
                        <li className=' py-[10px] text-[12px] hover:text-red-800 '><a href="">Units of TIIR</a> </li> <hr />
                        <li className=' py-[10px] text-[12px] hover:text-red-800 '> <a href="">Policy of Incubation at TIIR</a> <hr /> </li>

                    </ul>
                </div>
            </div>
            <Footer />
        </div>

    )
}
