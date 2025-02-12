import RelatedLink from '@/app/components/RelatedLink/RelatedLink'
import SliderMain from '@/app/components/SliderMain/SliderMain'
import Image from 'next/image';
import React from 'react'

export default function page() {
    const images = ["/baggi.jpg", "/mainImg.jpeg", "/baggi.jpg"];
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
        <h1 className=" uppercase font-bold text-5xl">Central Workshop</h1>
      </div>
      {/* <SliderMain images={images}/> */}
      <div className="w-full mx-auto flex relative mt-2  font-semibold text-lg">
          <div className="w-2/3 px-20 ">
            
          <div className=" w-full mx-auto  p-3">
            <h1 className="text-4xl font-bold py-2 border-b-4 border-red-500 inline-block ">
              About Us
            </h1>
            <div className="w-[430px] h-[440px]  relative my-8">
              <Image src="/a-o.png" alt="image" fill />
              <div className=" absolute w-[500px] h-[400px]  top-5 left-[230px] bg-cyan-100 p-8">
                <h1 className="text-2xl font-bold">
                 Welcome to Central Workshop
                </h1>
                <p className=" py-3 text-sm">
                The Central Workshop at Lakshmi Narain College of Technology (LNCT) is a state-of-the-art facility designed to provide students and faculty with a comprehensive hands-on learning environment. Equipped with the latest machinery and tools, the workshop supports a wide range of engineering disciplines, including mechanical, electrical, and electronics. It serves as a critical hub for practical training, where students can apply theoretical knowledge to real-world problems, fostering innovation and creativity. The workshop is staffed by experienced technicians and instructors who guide students through various projects, from basic fabrication and assembly to advanced prototyping and testing. Additionally, the Central Workshop plays a vital role in the colleges research activities, offering a collaborative space for interdisciplinary projects and industry partnerships.
                </p>
              </div>
            </div>
          </div>

          <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Workshops Offered</h2>
          <p className="mb-6">Here, we showcase the variety of workshops available to students. From robotics and electronics to woodworking and metalworking, theres something for everyone. Each workshop is led by experienced instructors and provides participants with valuable skills and knowledge.</p>
          <div className="relative w-full h-96">
            <Image src="/ar-1.jpg" alt="Workshops Offered Image" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Student Projects</h2>
          <p className="mb-6">In this section, we highlight the incredible projects that students have completed during our workshops. From innovative gadgets to artistic creations, these projects demonstrate the talent and creativity of our students.This Buggy was designed and made by our talented students of mechanical and electrical department students under the guidance of faculty and experts.</p>
          <div className="relative w-full h-96">
            <Image src="/baggi.jpg" alt="Student Projects Image" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
        </section>

            
          </div>
          <div className="w-1/3 h-[600px] sticky top-20 left-0 py-10 ">
            <RelatedLink/>
          </div>
        </div>
    </div>
  )
}
