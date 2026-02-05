import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../pages/shared/Navbar/Navbar'
import Footer from '../pages/shared/Footer/Footer'

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='max-w-[95%] lg:max-w-[90%] mx-auto my-10 mt-[90px]'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default RootLayout
