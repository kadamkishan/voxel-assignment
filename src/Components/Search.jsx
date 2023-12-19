import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import banner from '../assets/startup-india.jpeg';

const Search = ({selectedTag}) => {

  // Consumer Internet ,eCommerce ,Logistics ,Others ,Healthcare ,Food & Beverage ,Finance ,Education

  const tags=[
    {
      id:1,
      name:'All',
    },
    {
      id:2,
      name:'eCommerce',
    },
    {
      id:3,
      name:'Logistics',
    },
    {
      id:4,
      name:'FMCG',
    },
    {
      id:5,
      name:'Healthcare',
    },
    {
      id:6,
      name:'Food & Beverage',
    },
    {
      id:7,
      name:'Finance',
    },
    {
      id:8,
      name:'Consumer Internet',
    }
  ]

  const [activeIndex,setActiveIndex]=useState(0);

  return (
    <div className='flex justify-center mt-[8px] flex-col px-[70px] md:px-[150px]'>
      <div className=' items-center  '>
        <img src={banner} alt="banner-startup" className='rounded-2xl border-solid border-2 border-black' />

        <div className='bg-white shadow-xl p-3 rounded-lg mt-[-20px] mx-[25%] flex items-center'>
          <CiSearch className='text-[20px] text-gray-400' />
          <input type='text' placeholder='Search' className='outline-none ml-2'/>
        </div>
      </div>
      <div className='flex gap-10 justify-center mt-5'>
         {tags.map((item,index)=>(
          <ul key={index} onClick={()=>{setActiveIndex(index);selectedTag(item.name)}} 
          className={`${index===activeIndex? 'bg-red-500 text-white' :null } p-1 pb-2 rounded-sm md:rounded-full cursor-pointer md:px-4 transition-all duration-100 ease-in-out`}>
            <li>{item.name}</li>
          </ul>
         ))}
      </div>
    </div>
  )
}

export default Search