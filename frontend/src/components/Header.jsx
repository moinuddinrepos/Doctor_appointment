import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary roun px-6 md:px-10 lg:px-20'>
      <marquee behavior="" direction=""><span className='text-red-500 bg-white rounded-md p-2'>NOTE:</span> This project is under development. Working on backend process...</marquee>
        {/* -----------left side--------------- */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Book Appointment <br /> With Trusted Doctors </p>
            <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                <img className='w-28' src={assets.group_profiles} alt="" />
                <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' />
                schedule your appointment hassle-free.</p>
            </div>
            <a className='flex items-center m-auto md:m-0 gap-4 bg-white text-black px-4 py-3 font-medium rounded-full hover:scale-110 transition-all duration-500' href="#speciality">Book Appointment 
                <img className='w-3' src={assets.arrow_icon} alt="" /></a>
        </div>

        {/* -----------right side--------------- */}
        <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header