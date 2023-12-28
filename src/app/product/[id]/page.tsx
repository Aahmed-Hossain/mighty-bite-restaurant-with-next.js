import Price from '@/components/Price'
import { singleProduct } from '@/data'
import Image from 'next/image'
import React from 'react'

const SingleProduct = () => {
  return (
    <div className='p-4 lg:px-16 flex flex-col justify-around text-red-500 md:flex-row items-center'>
    {/* image container */}
    {singleProduct.img && 
    <div className='w-full h-1/2'>
    <Image className='' src={singleProduct.img} width={350} height={350} alt=''/>
    </div>}
    {/* text container */}
    <div className='w-full h-1/2 flex flex-col gap-4 '>
      <h1 className='text-2xl font-bold lg:text-4xl md:text-3xl'>{singleProduct.title}</h1>
      <p className='text-sm'> {singleProduct.desc}</p>
      <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/>
    </div>
    </div>
  )
}

export default SingleProduct