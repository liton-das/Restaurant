import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import AboutUs from '../components/AboutUs'

const Layoute = () => {
  return (
    <>
     <div className='bg-[#0D0D0D]'>
        <Navbar/>
        <AboutUs/>
        <Outlet/>
     </div> 
    </>
  )
}

export default Layoute
