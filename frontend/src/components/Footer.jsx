import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
             {/* left div */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6 text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, dignissimos. Enim natus consequatur, fugit corrupti laborum ducimus a incidunt doloremque nostrum excepturi esse debitis maxime sed dolor inventore dolores reprehenderit?</p>
        </div>

            {/* center div */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

            {/* right div */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+91 630111 ****</li>
                <li>doctors@gmail.com</li>
            </ul>
        </div>
        </div>
        {/* ---------copy right text */}
        <div>
            <hr />
            <p  className='text-gray-600 text-center py-5 text-sm'>&copy; Copyright 2024 @ moinuddin.dev - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer