import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown'

const Offer = () => {
  return (
    <div className='bg-black h-screen text-white flex flex-col md:flex-row lg:flex-row pt-3 gap-6 items-center'
    style={{ backgroundImage: 'url("/offerBg.png")', backgroundSize: 'cover' }}
    >
      {/* text container  */}
      <div className='flex-1 flex flex-col items-center justify-center text-center gap-4  px-3'>
        <h1 className='text-4xl lg:text-6xl  font-bold'>Delicious Burger <br />& French Fry
        </h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio maxime quo, maiores amet consectetur
        </p>
        <CountDown></CountDown>
        <button className='bg-red-500 p-3 rounded font-semibold'>Offer Now</button>
      </div>
      {/* image container  */}
      <div className='flex-1 flex justify-end '>
        <Image
        className='object-contain bg-black'
         src={'/offerProduct.png'}
         alt='' width={550} height={550} />
      </div>
    </div>
  )
}

export default Offer