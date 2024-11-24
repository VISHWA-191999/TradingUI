import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { value: 4 }, // Blue section
  { value: 3 }, // Orange section
  { value: 2 }, // Cyan section
];

const COLORS = ['#3366FF', '#FF5733', '#33C4FF'];

const HalfCircleChart = () => {
  return (
    <div className="relative w-24 h-24">
      <PieChart width={120} height={120}>
        <Pie
          data={data}
          cx={60}
          cy={60}
          startAngle={180}
          endAngle={0}
          innerRadius={40}
          outerRadius={60}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className="absolute inset-0 flex flex-col items-center justify-center ml-8">
        <p className="text-blue-600 font-semibold text-sm ">Total</p>
        <p className="text-gray-800 font-bold text-lg">16</p>
      </div>
    </div>
  );
};

export default HalfCircleChart;
