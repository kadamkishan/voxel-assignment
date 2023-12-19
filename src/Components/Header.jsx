import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/voxel-buster.png'

const Header = () => {
  return (
    <div className='flex justify-between items-center bg-'>
        <img src={logo} className="w-[100px]  " alt="img"/>
  
        <ul className='flex gap-4 md:gap-14'>
          <Link to='/'>
            <li className='font-bold text-2xl hover:text-sky-500 cursor-pointer'>Home</li>
          </Link>
            <li className='font-bold text-2xl hover:text-sky-500  cursor-pointer'>About</li>
            <li className='font-bold text-2xl hover:text-sky-500  cursor-pointer'>Contact Us</li>
        </ul>

        <button className='bg-gray-600 rounded-2xl text-white p-2 mr-2% '>User</button>
    </div>
  )
}

export default Header