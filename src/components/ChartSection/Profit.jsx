import React from 'react'
import { GiProfit } from "react-icons/gi";
import { BsThreeDotsVertical } from "react-icons/bs";

const Profit = () => {
  return (
    <div className='p-3 w-[55%] bg-white  rounded-lg'>
      <div className='flex justify-between items-center gap-8' >
        <div className='flex justify-center items-center gap-4 '>
            <div className='bg-blue-700 h-8 w-8 flex items-center justify-center rounded-full '>
            <GiProfit/>
            </div>
           
            <div>
            <h2>Profit Target</h2>
            <p>Of $12.00.90</p>
            </div>
           
        </div>
        <div>
            <BsThreeDotsVertical/>
        </div>
      </div>

      <h2 className='font-semibold text-xl my-3 '>$8,908.99</h2>

      <hr className='text-white' />
      <p>Equity Pass Level <span className='text-blue-500'>$124,900</span></p>
    </div>
  )
}

export default Profit;
