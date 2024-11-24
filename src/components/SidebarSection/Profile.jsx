import React from 'react'
import profile from './../../assets/profile.jpg'
import { IoIosArrowDown } from "react-icons/io";

const Profile = () => {
  return (
    <div className='flex justify-between items-center mb-1'>
      <div className='flex items-center gap-2 mx-2 '>
        <img src={profile} alt="profileImg" className='h-11 w-12 rounded-lg' />
        <div>
            <h3>Daniel Sullivan</h3>
            <p>alex@gmail.com</p>
        </div>
      </div>
      <IoIosArrowDown/>
    </div>
  )
}

export default Profile
