import React from 'react'
import { Outlet } from 'react-router'

const Layout = () => {
 return (
  <div>
   Nav
   <Outlet />
  </div>
 )
}

export default Layout
