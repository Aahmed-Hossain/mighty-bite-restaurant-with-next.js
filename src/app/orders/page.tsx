import React from 'react'

const OrdersPage = () => {
  return (
    <div className='p-4'>
      <div className="">
        <table className='w-full border-separate border-spacing-2'>
        <thead>
          <tr className='text-left'>
            <th className='hidden md:block '>Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className='hidden md:block '>Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-sm lg:font-medium  bg-red-50'>
            <td className='hidden md:block py-4 px-1'>22324343434</td>
            <td className='py-4 px-1'>12.30.23</td>
            <td className='py-4 px-1'> 89.00 </td>
            <td className='hidden md:block py-4 px-1 '>Big Burger(2), Veggie Pizza(2), Cocacola 1L(3)</td>
            <td className='py-4 px-1'>On the Way(Approx. 19mins)</td>
          </tr>

          <tr className='text-sm lg:font-medium  odd:bg-gray-100'>
            <td className='hidden md:block py-4 px-1'>22324343434</td>
            <td className='py-4 px-1'>12.30.23</td>
            <td className='py-4 px-1'> 89.00 </td>
            <td className='hidden md:block py-4 px-1 '>Big Burger(2), Veggie Pizza(2), Cocacola 1L(3)</td>
            <td className='py-4 px-1'>On the Way(Approx. 19mins)</td>
          </tr>


          <tr className='text-sm lg:font-medium odd:bg-gray-100'>
            <td className='hidden md:block py-4 px-1'>22324343434</td>
            <td className='py-4 px-1'>12.30.23</td>
            <td className='py-4 px-1'> 89.00 </td>
            <td className='hidden md:block py-4 px-1 '>Big Burger(2)</td>
            <td className='py-4 px-1'>Delivered</td>
          </tr>
        </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrdersPage