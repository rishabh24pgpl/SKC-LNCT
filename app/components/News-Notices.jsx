import React, { useState, useEffect } from 'react';

const noticesData = [
  "Notice 1",
  "Notice 2",
  "Notice 3",
  // Add more notices as needed
];

const newsData = [
  { id: 1, title: "News 1" },
  { id: 2, title: "News 2" },
  { id: 3, title: "News 3" },
  { id: 4, title: "News 4" },
  // Add more news items as needed
];

const AutoScrollNotices = ({ notices }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % notices.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [notices]);

  return (
    <div className="flex-1">
      <marquee direction="up" scrollamount="2" className="notices">
        {notices.map((notice, index) => (
          <div key={index} className="text-blue-700">{notice}</div>
        ))}
      </marquee>
    </div>
  );
};

const NewsCarousel = ({ news }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevIndex = (currentIndex - 1 + news.length) % news.length;
  const nextIndex = (currentIndex + 1) % news.length;

  return (
    <div className="flex-1">
      <div className="flex items-center justify-center h-full">
        <div className="w-64 overflow-hidden bg-gray-200 rounded-lg shadow-md">
          <div className="relative flex">
            <div className="w-full flex">
              <div className="w-1/3">
                <div className="p-4">{news[prevIndex].title}</div>
              </div>
              <div className="w-1/3">
                <div className="p-4">{news[currentIndex].title}</div>
              </div>
              <div className="w-1/3">
                <div className="p-4">{news[nextIndex].title}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Notices = () => {
  return (
    <div className="flex">
      <AutoScrollNotices notices={noticesData} />
      <NewsCarousel news={newsData} />
    </div>
  );
};

export default Notices;
