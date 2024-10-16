import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()
  return (
    <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14  lg:px-12  my-20 md:mx-10'>
        {/* -------------left side--------------- */}
        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
            <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                <p>Book Appointment</p>
                <p className='mt-4'>With 100+ Trusted Doctors</p>
            </div>
            <div>
                <button onClick={() => {navigate('/login', scrollTo(0,0))}} className='bg-white text-sm sm:text-base text-gray-500 px-8 py-3 rounded-full mt-6 hover:scale-110 transition-all duration-500'>Create Account</button>
            </div>
        </div>
        {/* ---------------------right side-------------------------- */}
        <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
            <img className='w-full bottom-0 right-0 absolute max-w-md' src={assets.appointment_img} alt="" />
        </div>
    </div>
  )
}

export default Banner