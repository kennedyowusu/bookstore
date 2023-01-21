import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
 return (
   <div>
   <nav className='bg-[#ccc]-600'>
    <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
     <div className='relative flex items-center justify-between h-16'>
      <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
       {/* Mobile menu button*/}
       <button
        type='button'
        className='inline-flex items-center justify-center p-2 rounded-md text-[#ccc]-600 hover:text-white hover:bg-[#ccc]-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
        aria-controls='mobile-menu'
        aria-expanded='false'
       >
        <span className='sr-only'>Open main menu</span>
        {/* Icon when menu is closed. */}
        {/* Menu open: "hidden", Menu closed: "block" */}
        <svg
         className='block h-6 w-6'
         xmlns='http://www.w3.org/2000/svg'
         fill='none'
         viewBox='0 0 24 24'
         stroke='currentColor'
         aria-hidden='true'
        >
         <path
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
         
   </div>
 )
}

export default Navbar
