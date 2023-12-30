// import Link from 'next/link';
// import React from 'react';

// const Footer = () => {
//     return (
//         <div className='h-12 mt-12 md:my-8 lg:my-8 px-1 md:px-8 lg:px-8 mx-auto text-red-500 flex sm:flex-col md:justify-between lg:justify-between items-center text-center'>
//             <Link href={'/'} className='font-bold my-2 lg:text-2xl' >Mighty Bite Café</Link>
//             <p className='sm:text-xs'>Copyright© 1996-2023 Ahmed®. All rights reserved.</p>
//         </div>
//     );
// };

// export default Footer;



import Link from 'next/link';
import React from 'react';
import { FaReddit, FaFacebook, FaGithub } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-fuchsia-50 dark:bg-gray-900 pt-8 lg:py-4">
        <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <Link href={'/'} className='font-bold text-2xl text-red-500'> Mighty Bite Cafe</Link>
          <p className="text-sm text-gray-600 dark:text-gray-300"> 
          </p>
  
          <div className="flex -mx-2">
            <a
              href="#"
              className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400"
              aria-label="Reddit"
            >
              <FaReddit className="w-8 h-8 fill-current" />
            </a>
  
            <a
              href="#"
              className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400"
              aria-label="Facebook"
            >
              <FaFacebook className="w-8 h-8 fill-current" />
            </a>
  
            <a
              href="#"
              className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400"
              aria-label="Github"
            >
              <FaGithub className="w-8 h-8 fill-current" />
            </a>
          </div>
        </div>
      </footer>
    );
};

export default Footer;