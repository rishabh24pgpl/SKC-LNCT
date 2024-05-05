'use client'
import React from 'react';
import Counter from '@/app/components/Counter'
import Image from "next/image";
import AlumniCard from '@/app/components/AlumniCard';
import AlumniNewsCard from '@/app/components/AlumniNewsCard'
const MyComponent = () => {

    const cardData = [
        {
          title: "Need help with Claim?",
          content: "Go to this step by step guideline process on how to certify for your weekly benefits.",
          buttonText: "See our guideline",
          buttonLink: "#",
          imageSource: "/mission-icon.png"
        },
        {
          title: "Another Title",
          content: "Some content here.",
          buttonText: "Click here",
          buttonLink: "#",
          imageSource: "/mission-icon.png"
        },
        {
            title: "Another Title",
            content: "Some content here.",
            buttonText: "Click here",
            buttonLink: "#",
            imageSource: "/mission-icon.png"
          },
          {
            title: "Another Title",
            content: "Some content here.",
            buttonText: "Click here",
            buttonLink: "#",
            imageSource: "/mission-icon.png"
          },
          {
            title: "Another Title",
            content: "Some content here.",
            buttonText: "Click here",
            buttonLink: "#",
            imageSource: "/mission-icon.png"
          },
          {
            title: "Another Title",
            content: "Some content here.",
            buttonText: "Click here",
            buttonLink: "#",
            imageSource: "/mission-icon.png"
          },
        // Add more card data objects as needed
      ];

      const newsCard = [
        {
          title: "Need help with Claim?",
          content: "Go to this step by step guideline process on how to certify for your weekly benefits.",
          lastUpdated:'23/33/33',
          buttonLink: "#",
          imageUrl: "/News.jpg"
        },
        {
          title: "Another Title",
          content: "Some content here.",
          lastUpdated:'23/33/33',
          buttonLink: "#",
          imageUrl: "/News.jpg"
        },
        {
            title: "Another Title",
            content: "Some content here.",
            lastUpdated:'23/33/33',
            buttonLink: "#",
            imageUrl: "/News.jpg"
          },
          {
            title: "Another Title",
            content: "Some content here.",
            lastUpdated:'23/33/33',
            buttonLink: "#",
            imageUrl: "/News.jpg"
          },
         
        // Add more card data objects as needed
      ];
    return (
        <>
        <div className="flex">
            <div className="w-[30%] p-4">
                {/* Left 30% width */}
                <ul className="bg-gray-200 p-8 rounded-lg">
                    {/* Elementor widget list */}
                    <li className="mb-14">AIC</li>
                    <li className="mb-14">Message From Head</li>
                    <li className="mb-14">Alumni Affairs</li>
                    <li className="mb-14">Services</li>
                    <li className="mb-14">News</li>
                    <li className="mb-14">Success Stories</li>
                    <li className="mb-14">Reunions</li>
                    <li className="mb-14">Contact Us</li>
                </ul>
            </div>
            <div className="w-[70%] p-4">
                {/* Left 70% width */}
                <h1 className="text-4xl font-bold mb-4">About Alumni Cell LNCT</h1>
                {/* Heading */}
                <div className="text-lg mt-8">
                    {/* Sentence */}
                    <p className='mb-10'> LNCT Group is proud to have its alumnus, as a group of 50,000+ engineers, technologists, scientists, managers, and entrepreneurs and more.
                        Established in 1994, Lakshmi Narain College of Technology has cultivated a vibrant and enduring relationship with its alumni community over the years. LNCT understands that the journey of education extends far beyond graduation, and thus, it is committed to nurturing lifelong connections with its former students.</p> <br></br>

                    <p className='mb-10'>The institute wholeheartedly acknowledges and takes immense pride in the pivotal role played by its esteemed alumni in our notable achievements. As we chart a path forward, our institution’s growth strategy is dedicated to internationalization, fostering interdisciplinary research, and nurturing valuable industrial relationships. Our aim is to transform untapped potential into tangible, meaningful advantages for individuals, society, and our nation.</p><br></br>

                    About the Alumni Cell : The Alumni Cell Office at LNCT consists of a dedicated team headed by Prof. Sherin Felix. In addition, a team of enthusiastic student volunteers assists the office with various activities and events. Please feel free to get in touch with us. Your engagement is highly valued.
                </div>
            </div>

        </div>
        
            

        <section>
        <div className=" rounded-full   sm:p-4  md:p-4 lg:p-5 p-4  border-black grid md:grid-cols-1 lg:grid-cols-4   sm:grid-cols-1 gap-5  justify-center items-center   dark:bg-dpurple  mb-8">
            <div className=" ">
                <Counter
                    initialValue={0}
                    targetValue={2000}
                    speed={0.001}
                    text="Seed"
                    textColor="text-blue-600"
                    title="First Counter"
                    color="bg-[#bd5638]"
                />
            </div>
            <div className=" ">
                <Counter
                    initialValue={20}
                    targetValue={100}
                    speed={100}
                    text="Seed"
                    textColor="text-green-700"
                    title="Second Counter"
                    color="bg-[#5a3224]"
                />
            </div>
            <div className="">
                <Counter
                    initialValue={5}
                    targetValue={15}
                    speed={200}
                    text="Seed"
                    textColor="text-red-600"
                    title="Third Counter"
                    color="bg-[#223250]"
                />
            </div>

            <div className="">
                <Counter
                    initialValue={5}
                    targetValue={15}
                    speed={200}
                    text="Seed"
                    textColor="text-red-600"
                    title="Third Counter"
                    color="bg-[#22472d]"
                />
            </div>
        </div>
        <div className=" rounded-full   sm:p-4  md:p-4 lg:p-5 p-4  border-black grid md:grid-cols-1 lg:grid-cols-4   sm:grid-cols-1 gap-5  justify-center items-center   dark:bg-dpurple  mb-12">
            <div className=" ">
                <Counter
                    initialValue={0}
                    targetValue={2000}
                    speed={0.001}
                    text="Seed"
                    textColor="text-blue-600"
                    title="First Counter"
                    color="bg-[#bd5638]"
                />
            </div>
            <div className=" ">
                <Counter
                    initialValue={20}
                    targetValue={100}
                    speed={100}
                    text="Seed"
                    textColor="text-green-700"
                    title="Second Counter"
                    color="bg-[#5a3224]"
                />
            </div>
            <div className="">
                <Counter
                    initialValue={5}
                    targetValue={15}
                    speed={200}
                    text="Seed"
                    textColor="text-red-600"
                    title="Third Counter"
                    color="bg-[#223250]"
                />
            </div>

            <div className="">
                <Counter
                    initialValue={5}
                    targetValue={15}
                    speed={200}
                    text="Seed"
                    textColor="text-red-600"
                    title="Third Counter"
                    color="bg-[#22472d]"
                />
            </div>
        </div>
    </section>
    <section className='flex flex-wrap gap-8 m-auto justify-center'>
    {cardData.map((card, index) => (
        <AlumniCard
          key={index} // Ensure each card has a unique key
          title={card.title}
          content={card.content}
          buttonText={card.buttonText}
          buttonLink={card.buttonLink}
          imageSource={card.imageSource}
        />
      ))}
    </section>

    <div className='flex justify-center m-8 '>
        <div className=' w-[70%] flex flex-col gap-4 p-2'>
            <h1 className='text-2xl '>News & Events</h1>
            {newsCard.map((news,index)=>(
                 <AlumniNewsCard
                 key={index}
                 title={news.title}
                 content={news.content}
                 lastUpdated={news.lastUpdated}
                 imageUrl={news.imageUrl}/>
            ))}
           

        </div>
        <div className='w-[30%]'>
            <h1 className='text-2xl p-4'>NewsLetter</h1>
             <Image src='/News.jpg' width={300} height={200}/>
             <Image src='/News.jpg' width={300} height={200}/>
             <Image src='/News.jpg' width={300} height={200}/>
        </div>
    </div>
    <section className=''>
    <div class="flex sm:w-full md:w-1/3 mb-8 md:mb-0 p-5 shadow-md rounded-xl mr-3 ml-3">
    <div class="w-full text-left">
        <span class="flex item-center">
            <img src="https://www.svgrepo.com/show/497628/user-square.svg"  class="rounded-md mr-3 h-14 w-14" /> 
            <div>
                <p class="text-sm text-gray-600">Leon Bachmann </p> 
                <p class="text-sm text-gray-400">Profession</p>
            </div>
        </span>
        
    </div>
  
</div>
    </section>
    <section>
        <div>
          <div className=''> </div>
        </div>
    </section>
    </>
    );
};

export default MyComponent;
