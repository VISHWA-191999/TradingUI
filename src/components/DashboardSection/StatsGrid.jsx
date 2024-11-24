import React from 'react';

import { BsGraphUp, BsGraphDown, BsBarChart } from 'react-icons/bs';
import { AiOutlineRise, AiOutlineFall } from 'react-icons/ai';
import { RiMedalLine } from 'react-icons/ri';
import StatsCard from './StatsCard';

const StatsGrid = () => {

  const stats = [
    { title: 'Average Win', value: '$642.00', icon: <BsGraphUp size={24} className="text-blue-500" />, change: '^ 7%', changeColor: 'text-blue-500' },
    { title: 'Average Loss', value: '$0.00', icon: <BsGraphDown size={24} className="text-orange-500" />, change: '0%', changeColor: 'text-orange-500' },
    { title: 'Profit Factor', value: '6.4', icon: <AiOutlineRise size={24} className="text-blue-500" /> },
    { title: 'Best Trade', value: '$8,908.99', icon: <RiMedalLine size={24} className="text-sky-500" /> },
    { title: 'Win Ratio', value: '-$4,800.90', icon: <AiOutlineFall size={24} className="text-green-500" /> },
    { title: 'Risk Reward', value: '$3,490.00', icon: <BsBarChart size={24} className="text-red-500" /> },
  ];

  stats.map((stat)=> {
    console.log(stat)

  })
  return (
    // { icon, title, value, change, changeColor }
    <div className="grid grid-cols-3 gap-4 rounded-lg shadow  w-[100%] ">
      {stats.map((stat, index) => (
        <StatsCard key={index} data={stat}  />
      ))}
    </div>
  );
};

export default StatsGrid;
