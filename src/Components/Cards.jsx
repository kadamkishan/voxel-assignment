import React, { useEffect, useState } from 'react'
import imporrecords from '../assets/startup_funding l.json';
import { Navigate, useNavigate } from 'react-router-dom';

const Cards = ({selectedRecord}) => {
  const [requRecord,setRequRecord]=useState([]);

  useEffect(()=>{
    setRequRecord(selectedRecord);
  },[])

  if(requRecord &&requRecord.length === 0){
   setRequRecord(imporrecords);
  }




  const navigate=useNavigate();
  return (
      <div className='grid gap-4 lg:grid-cols-4 p-5 mt-[5%]  '>
      {imporrecords.map(record => (
        <div className='w-full rounded-lg overflow-hidden shadow-md lg:max-w-sm bg-white p-3 flex flex-col text-xl transition-transform transform hover:scale-105' key=
        {record.SNo}>

          <div className='text-xl font-semibold text-blue-600 justify-center flex' style={{ fontFamily :'cursive'}}>
            {record.StartupName}<br />
          </div>

          <div className='p-4 '>
            <div className='text-gray-600'>
              City : {record.CityLocation}
            </div>
            <div className='text-gray-600'>
              Start Date : {record.Date}
            </div>

            <div className='text-gray-600'>
              Startup Year : 
              <span className='text-xl'>
                {record.AmountInUSD === "" ? " N.A" :` $ ${record.AmountInUSD}`}
              </span>
            </div>
          </div>

          <button onClick={()=>navigate('blog-detail/'+record.SNo)}  className="px-4 py-2 text-sm text-white bg-orange-600 rounded shadow hover:bg-orange-900 transition-colors">
            Read More
          </button>
        </div>
    ))}
    </div>
  )
}

export default Cards