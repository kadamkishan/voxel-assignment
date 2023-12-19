import React from 'react';
import record from "../assets/startup_funding l.json";
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const selected = record[id];

  return (
    <div className='p-6 border rounded-lg shadow-lg bg-white text-xl'>
      <div className='text-3xl font-bold text-blue-600 mb-4' style={{ fontFamily: 'cursive' }}> Startup-Name:
        {selected.StartupName}
      </div>

      <div className='text-gray-600 border-t-4'>
        <div className='text-gray-600 mt-3 mb-3'>Startup History:</div>
        <div className='mb-2'>City: {selected.CityLocation}</div>
        <div>Start Date: {selected.Date}</div>
      </div>

      <div className='mt-4 border-t'>
        <div className='text-gray-600 mt-3'>Industry Overview:</div>
        <div className='text-gray-600 mt-3 mb-2'>Industry-Type:{selected.IndustryVertical}</div>
        <div className='text-gray-600'>Industry-SubType{selected.SubVertical}</div>
      </div>

      <div className='mt-6 border-t pt-4'>
        <div className='text-gray-600 mb-3'>Investment Overview:</div>
        <div className='text-gray-600 mb-2'>Investors: {selected.InvestorsName}</div>
        <div className='text-gray-600 mb-2'>Investment Type: {selected.InvestmentType}</div>
        <div className='text-gray-600'>Amount: {selected.AmountInUSD==""?'N.A':selected.AmountInUSD}</div>
      </div>
    </div>
  );
}

export default BlogDetail;
