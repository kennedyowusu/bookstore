import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
 return (
   <div>
     <nav className='navbar navbar-expand-lg navbar-light bg-light'>
       <Link className='navbar-brand' to='/'>
         <h2></h2>
       </Link>
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
             Book
           </NavLink>
           <NavLink className='nav-item nav-link' to='/categories'>
             Categories
           </NavLink>
          
         </div>
       </div>
     </nav>
   </div>
 )
}

export default Navbar
