import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500 "
    style={{
      scrollbarWidth: "thin",
      msOverflowStyle: "none",
      overflowY: "hidden",
    }}
    >
      {/* wrapper */}
      <div className="w-max flex">
        {/* single item */}
        {
          featuredProducts.map(item =>(
          <div 
            key={item.id}
          className="w-screen h-screen  flex flex-col items-center justify-around px-3 py-2 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] lg:w-[33vw]"
        
          >
          {/* image container */}
          {item.img && 
          <div className="flex-1 hover:rotate-[45deg] transition-all duration-500">
            <Image src={item.img} alt="" width={200} height={200}
            className="object-cover "/>
          </div>}
          {/* text container */}
          <div className="flex-1 flex flex-col  gap-2 items-center text-center">
            <h1 className="text-xl font-bold uppercase">{item.title}</h1>
            <p className="text-sm">{item.desc}</p>
            <span className="text-xl font-bold "> {item.price} $</span>
            <button className="bg-red-500 text-white font-semibold p-2 rounded-md">Add to Cart</button>
          </div>
        </div>))
        }
      </div>
    </div>
  );
};

export default Featured;

