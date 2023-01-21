import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import navLink from '../utils/constants'

const Navbar = () => {
 return (
   <div>
     <nav className='bg-teal-600'>
       <div className='md:flex items-center justify-between bg-white py-4 md:py-5 md:px-14'>
         <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 justify-between px-5'>
           <div
             className='
          flex items-center justify-between
          '
           >
             <h2>BookStore CMS</h2>
           </div>
         </div>

         <div className='flex items-center justify-end w-full'>
           <ul className='md:items-center gap-4 hidden md:flex lg:flex'>
             {navLink.map((link) => (
               <li key={link.name} className='md:ml-8 text-xl'>
                 <a
                   href={link ? link.link : '/'}
                   className='text-gray-800 font-medium text-lg hover:border-solid border-2 p-2 rounded-lg
                border-transparent hover:border-[#ccc] hover:text-bold hover:duration-500
                '
                 >
                   {link.name}
                 </a>
               </li>
             ))}
           </ul>
         </div>
       </div>
     </nav>
   </div>
 )
}

export default Navbar
