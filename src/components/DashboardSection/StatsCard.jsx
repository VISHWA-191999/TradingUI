import React from 'react';

const StatsCard = ({data}) => {
    // console.log({ icon, title, value, change, changeColor });
    const { icon, title, value, change, changeColor } = data;
    // console.log(data.title)
    


  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-2  h-auto">
      <div className="flex justify-between items-center h-full">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="text-gray-700 font-semibold">{title}</h3>
        </div>
        {change && (
          <span className={`text-sm font-medium ${changeColor}`}>
            {change}
          </span>
        )}
      </div>
      <p className="text-xl font-bold text-gray-800">{value}</p>
    </div>
  );
};

export default StatsCard;
