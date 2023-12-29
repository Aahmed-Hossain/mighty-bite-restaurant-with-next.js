import Image from 'next/image'
import React from 'react'

const CartPage = () => {
  return (
    <div className=' text-red-500 flex flex-col justify-center items-center lg:flex-row lg:min-h-screen '>
      {/* products container */}
      <div className="h-1/2 w-full flex flex-col justify-center p-4 lg:h-min-screen  lg:w-2/3 lg:px-12">
        {/* single items */}
        <div className='flex justify-between items-center mb-2'>
        <Image alt='' src={'/temporary/p1.png'} width={80} height={80}/>
        <div className='flex flex-col justify-center'>
          <h1 className='text-xl font-bold mr-2'>Title here</h1>
          <span>Large</span>
        </div>
        <h1 className='font-bold'>79.90$</h1>
        <button className='hover:text-red-600 cursor-pointer'>X</button>
        </div>
        {/* single items */}
        <div className='flex justify-between items-center  mb-2'>
        <Image alt='' src={'/temporary/p1.png'} width={80} height={80}/>
        <div className='flex flex-col justify-center'>
          <h1 className='text-xl font-bold mr-2'>Title here</h1>
          <span>Large</span>
        </div>
        <h1 className='font-bold'>79.90$</h1>
        <button className='hover:text-red-600 cursor-pointer'>X</button>
        </div>
        {/* single items */}
        <div className='flex justify-between items-center  mb-2'>
        <Image alt='' src={'/temporary/p1.png'} width={80} height={80}/>
        <div className='flex flex-col justify-center'>
          <h1 className='text-xl font-bold mr-2'>Title here</h1>
          <span>Large</span>
        </div>
        <h1 className='font-bold'>79.90$</h1>
        <button className='hover:text-red-600 cursor-pointer'>X</button>
        </div>

      </div>

      {/* payment  container */}
      <div className="h-1/2 w-full flex flex-col justify-center bg-fuchsia-50 gap-3 p-4 lg:w-1/3 lg:px-12 lg:h-full">
<div className='flex justify-between'>
<span className="">Subtotal(3items)</span>
<span className="">81.70 $</span>
</div>

<div className='flex justify-between'>
<span className="">Service Cost</span>
<span className="">00.00 $</span>
</div>

<div className='flex justify-between'>
<span className="">Delivery Cost</span>
<span className="text-green-500">FREE!</span>
</div>
<hr className="my-3" />

<div className='flex justify-between'>
<span className="">Total (INCL. VAT)</span>
<span className="">81.70 $</span>
</div>

<button className='text-white bg-red-500 font-semibold px-3 py-1 rounded-md w-1/2 mx-auto uppercase'>CheckOut</button>
      </div>
    </div>
  )
}

export default CartPage