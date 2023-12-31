"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
const data = [
  {
    id: 1,
    title: "Always Fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "We deliver your order wherever you are in",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "The best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  //   }, 3500);
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div className="flex flex-col h-screen  xl:h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50 ">
      {/* upper text div */}
      <div className="flex-1 flex flex-col justify-center items-center gap-6  font-bold py-3 lg:w-1/2 ">
        <h1 className="text-4xl text-center uppercase p-4 md:text-6xl xl:text-7xl text-red-500">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white font-semibold rounded p-3">
          Order Now
        </button>
      </div>
      {/* lower img div */}
      <div className=" w-full flex-1 relative ">
        <Image
          src={data[currentSlide].image}
          alt="slide"
          fill
          className="object-cover"
        ></Image>
      </div>
    </div>


  );
};

export default Slider;
