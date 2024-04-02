import Image from 'next/image'
import React from 'react'

export default function CampusMap({heading, paragraph ,img}) {
  return (
    <>
    
    <div className='flex justify-around w-11/12 mx-auto p-2 '>
        <div className='w-full text-center items-center justify-center  bg-amber-600 flex flex-col'>
            <h1 className=' text-3xl border-b-2 p-2 text-white'>{heading}</h1>
           
            <p className='p-10 text-white text-justify '>{paragraph}
            
            </p>
        </div>
        <div className=' border-2 hover:animate-pulse '>
                  <Image
                  src={img}
                  alt='img'
                  width={700}
                  height={200}
                  />
        </div>
    </div>

    <div className='flex justify-around w-11/12 mx-auto '>
    <div className=' border-2   hover:animate-pulse '>
                  <Image
                  src={img}
                  alt='img'
                  width={700}
                  height={200}
                  />
        </div>
        <div className='w-full text-center items-center justify-center bg-amber-900 flex flex-col'>
            <h1 className=' text-3xl text-white border-b-2 p-2'>{heading}</h1>
           
            <p className='p-10 text-white text-justify '>{paragraph}
            
            </p>
        </div>
       
    </div>
    
    
    </>
  )
}
