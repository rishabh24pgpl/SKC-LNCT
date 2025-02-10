import React from 'react'
import SliderMain from '@/app/components/SliderMain/SliderMain'

import Image from 'next/image';
import RuleCard from '@/app/components/RuleCard/RuleCard';

export default function page() {
    const images = ["/ar-3.jpg"];
  return (
    <div>
     {/* <SliderMain images={images} heading="Ac"/> */}

     <div
        className="w-full h-36 flex justify-center  items-center"
        style={{
          // backgroundImage: "url('/logo1.png')",
          backgroundColor: "#1889a2",
          backgroundSize: "cover",
        }}
      >
        <h1 className=" uppercase font-bold text-5xl">Academic Calendar</h1>
      </div>
     <div className="w-full mx-auto flex relative">
        <div className="w-2/3 px-10 pt-[36px]  grid grid-cols-3  gap-5 justify-evenly pb-10 ">
        <RuleCard bgcolor="bg-red-200" link="https://www.rgpv.ac.in/Academics/frm_AcademicCalender.aspx" heading="B.Tech,M.Tech Academic calendar"/>
        <RuleCard bgcolor="bg-green-200" link="https://www.rgpvdiploma.in/Academics/Acadmic_calander.aspx" heading="Diploma Academic calendar"/>
        {/* <RuleCard bgcolor="bg-gray-200" link="https://dte.mponline.gov.in/Portal/Services/OnlineCounselling/NW/Utilities/CommonView.aspx?src=n90zMM8CLEGjqNHJ0%2f1mmZiUg9FWfHHHNEbBjO4KwFpNta2S2DI2vm9wBXaNAlxcY17PhGbnirlKvab0VM9lPw%3d%3d&UserType=aQflB8jTbn4YSev8TQomPw%3d%3d" heading="Diploma Rules And Regulations"/> */}
        <RuleCard bgcolor="bg-cyan-200" link="https://www.dauniv.ac.in/public/adminassets/pdf/07-31-2024_0620pm10950.pdf" heading="MBA Academic Calendar"/>
        {/* <RuleCard bgcolor="bg-pink-200" link="/" heading="heading"/>
        <RuleCard bgcolor="bg-cyan-200" link="/" heading="heading"/>
        <RuleCard bgcolor="bg-lime-200" link="/" heading="heading"/>
        <RuleCard bgcolor="bg-cyan-200" link="/" heading="heading"/> */}
      
        
        </div>
        <div className="w-1/3 h-[600px] sticky top-20 left-0 p-10 ">
        <div className="relative h-full ">
              <Image
                src="/welcome.jpeg"
                alt="foddiesssss"
                layout="fill"
                objectFit="cover"
              />
            </div>
        </div>
      </div>
    </div>
    
  )
}
