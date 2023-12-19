import React from 'react'
import logo from '../assets/voxel-buster.png'

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
        <img src={logo} className="w-[100px] " />
        <ul className='flex gap-4 md:gap-14'>
            <li className='hover:font-bold cursor-pointer'>Home</li>
            <li className='hover:font-bold cursor-pointer'>About</li>
            <li className='hover:font-bold cursor-pointer'>Contact Us</li>
        </ul>

        <button className='bg-gray-600 rounded-2xl text-white p-2 mr-2% '>User</button>
    </div>
  )
}

export default Header