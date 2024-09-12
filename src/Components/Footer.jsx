import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 text-sm'>
      <div>
        <img src={assets.logo} className='mb-5 w-32' alt="" />
        <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae eius provident ea autem cupiditate, reprehenderit aperiam ullam. Quisquam sequi similique, sed neque cupiditate sint dignissimos quia explicabo unde! Suscipit, perferendis!</p>
      </div>
      <div>
        <p className='text-xl font-medium mb-5 '>COMPANY</p>
        <ul className='fllex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delievery</li>
            <li>Privacy policy</li>
        </ul>
      </div>
      <div>
        <p className='text-xl font-medium mb-5 '>Get in touch</p>
        <ul className='fllex flex-col gap-1 text-gray-600'>
            <li>+91 80096 03004</li>
            <li>mujumaleapeksha03@gmail.com</li>
        </ul>
      </div>
      <div>
        <hr/>
        <p className='py-5 text-sm text-center justify-center flex'> © Copyright 2024 forever.com all rights reserved </p>
      </div>
    </div>
  
  )
}

export default Footer
