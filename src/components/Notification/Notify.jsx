import React from 'react'
import { notifyData } from '../../utils/notificationData';

const Notify = () => {
  return (
    // <div className='bg-red-300 '>
    //     <div>
    //         <div >

    //         </div>



    //     </div>
      
    // </div>
  
        <div className="shadow-md bg-white rounded-lg p-6  w-[82%]">
          <div className="flex justify-between items-center mb-4 ">
            <h2 className="text-xl font-semibold">Notifications</h2>
            <select className="border border-gray-300 rounded px-3 py-1">
              <option>Last 30 Day</option>
              <option>Last 7 Days</option>
              <option>Last 24 Hours</option>
            </select>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="pb-2">Time</th>
                <th className="pb-2">Type</th>
                <th className="pb-2">Message</th>
              </tr>
            </thead>
            <tbody>
              {notifyData.map((notification, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="py-3">{notification.time}</td>
                  <td className="py-3">
                    <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm">
                      {notification.type}
                    </span>
                  </td>
                  <td className="py-3">{notification.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
            {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-blue-500 cursor-pointer">Showing: 32 ▼</span>
        <div className="flex space-x-3">
          <button className="text-gray-400">&lt;</button>
          <button className="text-blue-500 font-bold">1</button>
          <button className="text-blue-500 font-bold">2</button>
          <button className="text-blue-500 font-bold">3</button>
          <button className="text-blue-500 font-bold">4</button>
          <button className="text-gray-400">&gt;</button>
        </div>
      </div>
    </div>
  );
};
    

export default Notify
