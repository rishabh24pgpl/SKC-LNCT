'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Carousel from "@/app/components/Carousel";
import Navbar from "@/app/components/Navbar";

export default function Home() {


    const [collegeNameIndex, setCollegeNameIndex] = useState(0);
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


    // Function to toggle submenu

    const images = [
        '/logo1.png',
        '/logo1.png',
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
                    <img src="/yt.png"  className="rounded-full"></img>
                    {/* <img src="/insta.png"  className="rounded-full"></img> */}
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

            <Navbar />

            <div>

                <Carousel images={images} />
            </div>
        </div>
    );
}




