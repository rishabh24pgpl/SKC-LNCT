import React from 'react'
import ImgSlider from "@/app/components/ImgSlider/ImgSlider.jsx"

export default function EminmentSlider() {
    const images = [
        {
            id:1,
            url:"/teach1.jpg"
        },
        {
            id:1,
            url:"/teach1.jpg"
        },
        {
            id:1,
            url:"/teach1.jpg"
        },
        {
            id:1,
            url:"/teach1.jpg"
        },
        {
            id:1,
            url:"/teach1.jpg"
        },
        {
            id:1,
            url:"/teach1.jpg"
        },
        {
            id:1,
            url:"/teach1.jpg"
        },
        {
            id:1,
            url:"/teach1.jpg"
        },
    ]
  return (
    <div>
      
      <h2 className='text-3xl text-center font-bold'>Our Leaders</h2>
        <ImgSlider images={images}/>

        <h2 className='text-3xl text-center font-bold'>Our Leaders</h2>
        <ImgSlider images={images}/>

        <h2 className='text-3xl text-center font-bold'>Our Leaders</h2>
        <ImgSlider images={images}/>

        <h2 className='text-3xl text-center font-bold'>Our Leaders</h2>
        <ImgSlider images={images}/>

        <h2 className='text-3xl text-center font-bold'>Our Leaders</h2>
        <ImgSlider images={images}/>
    </div>
  )
}
