import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
  return (
    <main className='w-screen min-h-screen absolute'>
      <Navbar />
        <Outlet />
        <Footer />
    </main>
  )
}

export default Layout