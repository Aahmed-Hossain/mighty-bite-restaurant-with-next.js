
import React from 'react'
import {menu} from '@/data'
import Link from 'next/link'
const MenuPage = () => {
  return (
    <div className='p-4 h-screen md:[calc(100vh - 6rem)]  flex flex-col md:flex-row lg:flex-row items-center my-auto'>
      {
        menu.map(item=>(
          <Link href={`/menu/${item.slug}`}
          key={item.id}
          className='w-full h-full lg:h-1/2  md:h-1/2  bg-cover p-3 flex items-center'
          style={{backgroundImage:`url(${item.img}) `}}
          >
            <div className={`text-${item.color} w-3/4`}>
              <h1 className='uppercase text-2xl font-bold'>{item.title}</h1>
              <p className='text-xs my-4'>{item.desc}</p>
              <button className={`hidden lg:block bg-${item.color} p-2 rounded-md font-semibold  text-${item.color=== 'black' ? 'white' : 'red-500'}`}>Explore Now</button>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default MenuPage