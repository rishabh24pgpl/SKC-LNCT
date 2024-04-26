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
                 
                 key={index} // Ensure each card has a unique key
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

<ul class="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
    <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
        <div class="order-1 sm:ml-6 xl:ml-0">
            <h3 class="mb-1 text-slate-900 font-semibold">
                <span class="mb-1 block text-sm leading-6 text-indigo-500">Headless UI</span>Completely unstyled, fully
                accessible UI components
            </h3>
            <div class="prose prose-slate prose-sm text-slate-600">
                <p>Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind
                    CSS.</p>
            </div><a
                class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                href="">Learn
                more<span class="sr-only">, Completely unstyled, fully accessible UI components</span>
                <svg class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M0 0L3 3L0 6"></path>
                </svg></a>
        </div>
        <img src="https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg" alt="" class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640"></img>
    </li>
    <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
        <div class="order-1 sm:ml-6 xl:ml-0">
            <h3 class="mb-1 text-slate-900 font-semibold">
                <span class="mb-1 block text-sm leading-6 text-purple-500">Heroicons</span>Beautiful hand-crafted SVG
                icons, by the makers of Tailwind CSS.
            </h3>
            <div class="prose prose-slate prose-sm text-slate-600">
                <p>A set of 450+ free MIT-licensed SVG icons. Available as basic SVG icons and via first-party React and
                    Vue libraries.</p>
            </div><a
                class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                href="">Learn
                more<span class="sr-only">, Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.</span>
                <svg class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M0 0L3 3L0 6"></path>
                </svg></a>
        </div>
        <img src="https://tailwindcss.com/_next/static/media/heroicons@75.4a558f35.jpg" alt="" class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640"></img>
    </li>
    <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
        <div class="order-1 sm:ml-6 xl:ml-0">
            <h3 class="mb-1 text-slate-900 font-semibold">
                <span class="mb-1 block text-sm leading-6 text-cyan-500">Hero Patterns</span>Seamless SVG background
                patterns by the makers of Tailwind CSS.
            </h3>
            <div class="prose prose-slate prose-sm text-slate-600">
                <p>A collection of over 100 free MIT-licensed high-quality SVG patterns for you to use in your web
                    projects.</p>
            </div><a
                class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                href="">Learn
                more<span class="sr-only">, Seamless SVG background patterns by the makers of Tailwind CSS.</span>
                <svg class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M0 0L3 3L0 6"></path>
                </svg></a>
        </div>
        <img src="https://tailwindcss.com/_next/static/media/heropatterns@75.82a09697.jpg" alt="" class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640"></img>
    </li>
</ul>
    </section>
    </>
    );
};

export default MyComponent;
