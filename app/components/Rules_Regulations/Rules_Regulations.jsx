import React from 'react'
import SliderMain from '@/app/components/SliderMain/SliderMain'
import FacultyCard from '../FacultyCard/FacultyCard';
import Image from 'next/image';
import RuleCard from '../RuleCard/RuleCard';

export default function Rules_Regulations() {
    const images = ["/ar-3.jpg"];
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
        <h1 className=" uppercase font-bold text-5xl">Rules And Regulations</h1>
      </div>
     <div className="w-full mx-auto flex relative">
        <div className="w-2/3 px-10 pt-[36px]  grid grid-cols-3  gap-5 justify-evenly pb-10 ">
        <RuleCard bgcolor="bg-red-200" link="https://dte.mponline.gov.in/Portal/Services/OnlineCounselling/NW/Utilities/CommonView.aspx?src=n90zMM8CLEGjqNHJ0%2f1mmZiUg9FWfHHHNEbBjO4KwFpcB%2f3cncHwXY5tXql1tg2ZoIYoDYMeLL46c7AE480pWg%3d%3d&UserType=aQflB8jTbn4YSev8TQomPw%3d%3d" heading="B.Tech Rules And Regulations"/>
        <RuleCard bgcolor="bg-green-200" link="https://dte.mponline.gov.in/Portal/Services/OnlineCounselling/NW/Utilities/CommonView.aspx?src=n90zMM8CLEGjqNHJ0%2f1mmZiUg9FWfHHHNEbBjO4KwFrN0GzAgi302Bo4F8eosGX244PjEZ7JJPjCw1saps%2fWvA%3d%3d&UserType=aQflB8jTbn4YSev8TQomPw%3d%3d" heading="M.Tech Rules And Regulations"/>
        <RuleCard bgcolor="bg-gray-200" link="https://dte.mponline.gov.in/Portal/Services/OnlineCounselling/NW/Utilities/CommonView.aspx?src=n90zMM8CLEGjqNHJ0%2f1mmZiUg9FWfHHHNEbBjO4KwFpNta2S2DI2vm9wBXaNAlxcY17PhGbnirlKvab0VM9lPw%3d%3d&UserType=aQflB8jTbn4YSev8TQomPw%3d%3d" heading="Diploma Rules And Regulations"/>
        <RuleCard bgcolor="bg-cyan-200" link="https://dte.mponline.gov.in/Portal/Services/OnlineCounselling/NW/Utilities/CommonView.aspx?src=n90zMM8CLEGjqNHJ0%2f1mmZiUg9FWfHHHNEbBjO4KwFproh3jgQLHrRK%2fllJpe8ZOdS%2f3zifZursDNoCaSHoWlA%3d%3d&UserType=aQflB8jTbn4YSev8TQomPw%3d%3d" heading="MBA Rules And Regulations"/>
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
