import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DeptCounter from "./DeptCounter/DeptCounter";
import FacultyCard from "./FacultyCard/FacultyCard";
import NoticeCard from "./NoticeCard/NoticeCard";

const Seminar = ({ eventData, carouselData, additionalCarouselData }) => {
  const listRef = useRef(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    const listElement = listRef.current;
    const autoScroll = () => {
      listElement.scrollTop += 1;
      if (
        listElement.scrollTop + listElement.clientHeight >=
        listElement.scrollHeight - 1
      ) {
        listElement.scrollTop = 0; // Reset to the top
      }
    };
    let scrollInterval = setInterval(autoScroll, 50);
    listElement.addEventListener("mouseover", () => {
      clearInterval(scrollInterval);
    });
    listElement.addEventListener("mouseout", () => {
      clearInterval(scrollInterval);
      scrollInterval = setInterval(autoScroll, 50);
    });

    return () => clearInterval(scrollInterval);
  }, []);

  const handleCarouselScroll = (slider, index) => {
    if (index === 0) {
      slider2.slickGoTo(slider.currentSlide);
    } else {
      slider1.slickGoTo(slider.currentSlide);
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    afterChange: (current, index) => handleCarouselScroll(slider1, index),
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:flex lg:gap-10 gap-4 h-full w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-2">
        <div className="lg:w-[720px] overflow-auto border border-gray-200 rounded-md">
          <h2 className="text-2xl font-bold text-black text-center">Notices</h2>
          <ul
            ref={listRef}
            className="grid grid-cols-1 gap-6 max-h-[600px] overflow-scroll"
          >
            {eventData.map((item, index) => (
              <ListItem key={index} item={item} />
            ))}
          </ul>
        </div>
        <div className="lg:w-[300px] flex justify-center items-center">
          <div className="w-full h-auto ">
            <Slider
              {...settings}
              asNavFor={slider2}
              ref={(slider) => setSlider1(slider)}
            >
              {carouselData.map((item, index) => (
                <NoticeCard />
              ))}
            </Slider>
          </div>
        </div>
        <div className="lg:w-[300px] flex justify-center items-center">
          <div className="w-full h-auto ">
            <Slider
              {...settings}
              asNavFor={slider1}
              ref={(slider) => setSlider2(slider)}
            >
              {additionalCarouselData.map((item, index) => (
                 <NoticeCard />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

const ListItem = ({ item }) => {
  const { title, type, uuid } = item;

  return (
    <li className="border-gray-400 flex flex-col">
      <Link href={`/events/${uuid}`}>
        <div className="w-full flex gap-2 px-2 ">
          <div className="w-full justify-center p-2 items-start flex flex-col">
            <h1 className="text-sm font-bold text-black hover:text-gray-600">
              {title}
            </h1>
            <div className="flex justify-start py-4 items-center text-sm font-semibold">
              <h1 className="px-2 p-1 font-semibold rounded-lg capitalize bg-blue-200">
                {type}
              </h1>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Seminar;
