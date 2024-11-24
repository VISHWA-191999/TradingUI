import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { GiProfit } from 'react-icons/gi'

const Loss = () => {
  return (
    <div className='p-3 w-[55%] bg-white rounded-lg'>
      <div className='flex justify-between items-center  gap-8' >
        <div className='flex justify-center items-center gap-4 '>
            <div className='bg-red-700 h-8 w-8 flex items-center justify-center rounded-full '>
            <GiProfit/>
            </div>
           
            <div>
            <h2>Daily Loss Limit</h2>
            <p>Of $12,80.90</p>
            </div>
           
        </div>
        <div>
            <BsThreeDotsVertical/>
        </div>
      </div>

      <h2 className='font-semibold text-xl my-3 '>$12,908.99</h2>

      <hr className='text-white' />
      <p>Equity Breach Level <span className='text-red-500'>$124,900.00</span></p>
    </div>
  )
}

export default Loss
