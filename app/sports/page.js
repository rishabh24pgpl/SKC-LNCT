import React from 'react'
import Sports from '../components/Sports/sports'

import SliderMain from '../components/SliderMain/SliderMain'

export default function page() {
    const images = ["/baggi.jpg", "/mainImg.jpeg", "/baggi.jpg"];
  return (
    <>
    <SliderMain images={images} heading="Contact Us" />
    
    <Sports/>
    </>
  )
}
