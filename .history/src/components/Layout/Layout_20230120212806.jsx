import React from 'react'
import { Outlet } from 'react-router'

const Layout = () => {
 return (
  <div>
   <Navbar></Navbar>
   <Outlet />
  </div>
 )
}

export default Layout
