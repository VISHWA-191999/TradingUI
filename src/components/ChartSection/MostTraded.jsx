import React from 'react';
import HalfCircleChart from './HalfCircleChart';
import { BsThreeDotsVertical } from 'react-icons/bs';

const MostTraded = () => {
  const trades = [
    { name: 'NZDUSD', color: 'bg-blue-500' },
    { name: 'GBPUSD', color: 'bg-orange-500' },
    { name: 'AUDCHF', color: 'bg-sky-400' },
    { name: 'USDCHF', color: 'bg-indigo-300' },
    { name: 'XAUUSD', color: 'bg-amber-200' },
    { name: 'AUDNZD', color: 'bg-cyan-300' },
  ];

  return (
    
    <div className="bg-white shadow-lg rounded-lg p-4  justify-between items-center w-full my-4 ">

   
    <div className='flex items-center justify-between  mx-1'>
    <h2 className='font-semibold text-lg'>Most Traded</h2>
    <BsThreeDotsVertical size={24}  className='font-semibold text-lg cursor-pointer'/>
    </div>
    <div className='flex' >
       
      <div className="flex flex-wrap w-2/3 gap-4">
        {trades.map((trade, index) => (
          <div key={index} className="flex items-center gap-2 w-1/3">
            <div className={`w-2 h-2 rounded-full ${trade.color}`}></div>
            <span className="text-gray-700 font-medium">{trade.name}</span>
          </div>
        ))}
      </div>
      <HalfCircleChart />
    </div>
    </div>
   
  );
};

export default MostTraded;
