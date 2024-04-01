import React, { useState, useEffect } from "react";
// Reusable Hook for Auto-Incrementing Counter
const useAutoIncrement = (initialValue, targetValue, speed,text) => {
  const [count, setCount] = useState(initialValue);
  useEffect(() => {
    const incrementInterval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < targetValue) {
          return prevCount + 1;
        } else {
          clearInterval(incrementInterval);
          return prevCount;
        }
      });
    }, speed);
    return () => {
      clearInterval(incrementInterval);
    };
  }, [targetValue, speed]);
  return count;
};
// Reusable Counter Widget Component
const CounterWidget = ({
  initialValue = 0,
  targetValue = 10,
  speed = 100,
  text = '',
  textColor = "black",
  bgColor = "white",
  title = "Counter Widget",
}) => {
  const count = useAutoIncrement(initialValue, targetValue, speed);
  return (
    <div className=" flex-col justify-center items-center  bg-orange-400 rounded-full inline-flex sm:w-full md:w-1/3 lg:w-full  hover:bg-orange-500 hover:scale-105 hover:transition-all duration-700">
    <div
      className={`p-16 self-stretch text-black text-2xl font-bold     `}
    >
      +{count}
      <p>{text}</p>
    </div>
    </div>
  );
};
export default CounterWidget;
