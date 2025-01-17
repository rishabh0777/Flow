import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <main className='w-screen min-h-screen absolute'>
      <Navbar />
        <Outlet />
    </main>
  )
}

export default Layout