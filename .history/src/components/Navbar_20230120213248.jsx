import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
 return (
   <div>
     <nav className='navbar navbar-expand-lg navbar-light bg-light'>
       <a className='navbar-brand' href='#'>
         <img
           src='https://i.imgur.com/4Q1QqQy.png'
           width='30'
           height='30'
           alt=''
         />
       </a>
       <button
         className='navbar-toggler'
         type='button'
         data-toggle='collapse'
         data-target='#navbarNavAltMarkup'
         aria-controls='navbarNavAltMarkup'
         aria-expanded='false'
         aria-label='Toggle navigation'
       >
         <span className='navbar-toggler-icon'></span>
       </button>
       <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
         <div className='navbar-nav'>
           <NavLink className='nav-item nav-link' to='/'>
             Home
           </NavLink>
           <NavLink className='nav-item nav-link' to='/about'>
             About
           </NavLink>
           <NavLink className='nav-item nav-link' to='/contact'>
             Contact
           </NavLink>
         </div>
       </div>
     </nav>
   </div>
 )
}

export default Navbar
