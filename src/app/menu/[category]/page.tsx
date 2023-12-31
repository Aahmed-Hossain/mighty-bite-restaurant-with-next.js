import { ProductType } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const getData = async(category:string)=>{
  const res = await fetch(`https://mighty-bite-server.vercel.app/products?category=${category}`,{cache:"no-store"});
  return res.json();
};

type Props = { params: {category:string} }
const CategoryPage = async({params}:Props) => {
const products:ProductType[] = await getData(params.category);

  return (
    <div className='flex flex-wrap justify-center text-red-500 '>
      {
        products.map(item =>(<Link className='border-b border-r border-l border-red-500 w-full md:w-1/2 lg:w-1/3 group hover:bg-fuchsia-50 odd:bg-fuchsia-50' key={item._id} href={`/product/${item._id}`}>
          {/*image container*/}
         {item.img && <div>
          <Image className='mx-auto sm:w-3/4' src={item.img} height={300} width={300} alt='' />
          </div>}
          {/* text container */}
          <div className='flex justify-between px-2 my-2'>
            <h1 className='text-xl  font-bold p-2'>{item.title}</h1>
            <p className='font-semibold text-xl group-hover:hidden'>{item.price}$</p>
            <button className='bg-red-500 font-semibold p-2 rounded-md text-white hidden group-hover:block'>Add to Card</button>
          </div>
        </Link>))
      }
    </div>
  )
}
export default CategoryPage;