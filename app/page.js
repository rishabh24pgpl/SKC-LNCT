'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="bg-black text-white">
    <div className="flex items-center justify-between p-4">
      <div className="items-center flex gap-4">
      <p>Admissions</p> 
      <p>Placement</p> 
      <p>Careers</p> 
      </div>

      <div className="items-center flex">
      <p>Admissions</p> 
      <p>Placement</p> 
      <p>Careers</p> 

        {/* <Image>j</Image>
        <Image>j</Image>
        <Image>j</Image>
         <Image>j</Image> */}
      </div>


      {/* Login button */}
      <div className="flex">
        <Link
          className="text-xs px-4 py-2 leading-none rounded-full hover:bg-green-300 hover:text-black border-2"
          href="\loginPage"
        >
          STAFF LOGIN
        </Link>
      </div>

    </div>

  </div>
  );
}




