"use client";
import React, { useEffect, useState } from "react";
type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};
const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);
  
  useEffect(()=>{
    setTotal(quantity * (options ? price + options[selected]?.additionalPrice : price))
  },[options, price,quantity,selected]);

  return (
    <div className="flex flex-col gap-4 ">
      <h1 className="text-2xl font-bold">{total.toFixed(2)} $</h1>
      {/* options container */}
      <div className="flex gap-4 ">
        {options?.map((option, index) => (
          <button
            onClick={() => setSelected(index)}
            className=" p-2 ring-1 ring-red-400 rounded-md w-[5.5rem] font-semibold"
            style={{
              background: selected === index ? "rgb(248 113 113)" : "white",
              color: selected === index ? "white" : "red",
            }}
            key={option.title}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* quantity and add button */}
      <div className="flex gap-4 items-center ring-1 justify-between ring-red-400 rounded">
        <span className="font-bold ml-2">Quantity</span>
        <div className="flex gap-2 items-center font-semibold">
          <button
            onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
          >
            {"<"}
          </button>
          <span className="text-2xl">{quantity}</span>
          <button
            onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
          >
            {">"}
          </button>
        </div>
        <button className="bg-red-500 p-2 text-white font-semibold">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
