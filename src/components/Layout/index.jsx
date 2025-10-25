import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
const Layout = () => {
  return (
    <div>
      <Header />
      <div className='container mx-auto px-4 py-12'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout