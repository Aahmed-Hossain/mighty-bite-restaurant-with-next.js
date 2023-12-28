import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
  return (
    <Link href={'/cart'} className='flex items-center gap-1 '>
        <div className='w-5  h-5 relative'><Image src={'/cart.png'} alt='' fill></Image></div>
        <span>Cart(3)</span>
    </Link>
  )
}

export default CartIcon