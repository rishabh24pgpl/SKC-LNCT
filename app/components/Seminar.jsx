import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <h1 className="font-semibold text-4xl text-black text-center p-6">Seminar & Upcoming events</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-2">
        <div className="overflow-auto border border-gray-200 rounded-md">
          {/* <h2 className="text-2xl font-bold text-black text-center">Notices</h2> */}
          <ul
            ref={listRef}
            className="grid grid-cols-1 gap-6 max-w-[700px] max-h-[500px] overflow-scroll"
          >
            {eventData.map((item, index) => (
              <ListItem key={index} item={item} />
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[400px] h-full border-2 rounded-xl">
            <Slider {...settings} asNavFor={slider2} ref={(slider) => setSlider1(slider)}>
              {carouselData.map((item, index) => (
                <div key={index}>
                  <img src={item.imageUrl} alt={item.title} className="w-[400px]" />
                  <p className="legend text-black font-bold p-2">{item.title}</p>
                  <p className="p-2 text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit!</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="flex justify-center items-center">
        <div className="w-[400px] h-full border-2 rounded-xl">
            <Slider {...settings} asNavFor={slider2} ref={(slider) => setSlider1(slider)}>
              {carouselData.map((item, index) => (
                <div key={index}>
                  <img src={item.imageUrl} alt={item.title} className="w-[400px]" />
                  <p className="legend text-black font-bold p-2">{item.title}</p>
                  <p className="p-2 text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit! &nbsp; Read More...</p>
                </div>
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
          <div className="p-4 bg-blue-400 text-center">
            <p>9 April</p>
          </div>
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
