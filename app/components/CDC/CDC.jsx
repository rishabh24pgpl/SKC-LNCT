import Image from 'next/image'
import React from 'react'
import SliderMain from '../SliderMain/SliderMain'

export default function CDC() {
    const images = ["/cdc-1.jpg.webp"];
  return (
   <>
   <SliderMain images={images} heading="CDC" />
   <h1 className=" p-10 text-4xl text-center  text-blue-700  font-semibold ">
         Career Development Cell<span className="text-red-500"> At SKC LNCT</span>
        </h1>
    <div className="flex  justify-around pt-10 pb-20 ">
        <div className=" shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-80  flex-col flex  items-center p-2 ">
          
          <Image src="/logo1.jpeg" alt="" width={200} height={200} />
          <Image src="/founder.png" alt="" width={200} height={200} />
          <h1 className="text-2xl p-1">Founder</h1>
          <h1 className=" border-2 w-3/4 rounded-md p-1 text-center text-white bg-gradient-to-r from-indigo-400 to-blue-400  text-3xl" >12 LPA.</h1>
        </div>
        <div className=" shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-80  flex-col flex  items-center p-2 ">
          
          <Image src="/ibm.png" alt="" width={200} height={200} />
          <Image src="/founder.png" alt="" width={200} height={200} />
          <h1 className="text-2xl p-1">Founder</h1>
          <h1 className=" border-2 w-3/4 rounded-md p-1 text-center text-white bg-gradient-to-r from-indigo-400 to-blue-400  text-3xl" >12 LPA.</h1>
        </div>
        <div className=" shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-80  flex-col flex  items-center p-2 ">
          
          <Image src="/ibm.png" alt="" width={200} height={200} />
          <Image src="/founder.png" alt="" width={200} height={200} />
          <h1 className="text-2xl p-1">Founder</h1>
          <h1 className=" border-2 w-3/4 rounded-md p-1 text-center text-white bg-gradient-to-r from-indigo-400 to-blue-400  text-3xl" >12 LPA.</h1>
        </div>
        <div className=" shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-80  flex-col flex  items-center p-2 ">
          
          <Image src="/ibm.png" alt="" width={200} height={200} />
          <Image src="/founder.png" alt="" width={200} height={200} />
          <h1 className="text-2xl p-1">Founder</h1>
          <h1 className=" border-2 w-3/4 rounded-md p-1 text-center text-white bg-gradient-to-r from-indigo-400 to-blue-400  text-3xl" >12 LPA.</h1>
        </div>
      </div>
   </>
  )
}
