import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
 return (
   <div>
     <nav className='bg-[#ccc]-600'>
       <div className='md:flex items-center justify-between bg-white py-4 md:py-5 md:px-14'>
         <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 justify-between px-5'>
           <div
             className='
          flex items-center justify-between
          '
           >
             <img src={Logo} alt='Logo' className='w-10 h-10 ml-2 mr-3' />
             <span className='text-[#317773]'>Edu</span> Library{' '}
           </div>
           <div
             onClick={handleClick}
             onKeyDown={handleClick}
             onKeyUp={handleClick}
             className='flex justify-end items-center md:hidden lg:hidden cursor-pointer text-2xl text-gray-800 hover:text-[#317773] hover:duration-500 mt-1'
           >
             {!toggleNav ? (
               <HiBars3 className='w-10 h-8' />
             ) : (
               <HiXMark className='w-10 h-8' />
             )}
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

             <NavButton
               title='Login'
               className='border-2 px-6 py-2 rounded-md mt-[-6px] font-bold hover:duration-500 hover:bg-[#317773] text-[#317773] hover:text-white'
               onClick={() => navigate('/login')}
             />

             <NavButton
               title='Register'
               className='bg-[#317773] text-white px-8 py-2 rounded-md mt-[-6px] font-bold hover:duration-500 hover:bg-[#fff] hover:text-[#317773] border-2 border-[#317773]'
               onClick={() => navigate('/register')}
             />
           </ul>
         </div>
       </div>
     </nav>
   </div>
 )
}

export default Navbar
