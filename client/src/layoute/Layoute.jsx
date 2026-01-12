import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import AboutUs from '../components/AboutUs'
import FoodCategory from '../components/FoodCategory'
import WhyChooseUs from '../components/WhyChooseUs'

const Layoute = () => {
  return (
    <>
     <div className='bg-[#0D0D0D]'>
        <Navbar/>
        <AboutUs/>
        <FoodCategory/>
        <WhyChooseUs/>
        <Outlet/>
     </div> 
    </>
  )
}

export default Layoute
