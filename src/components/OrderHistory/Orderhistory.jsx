import React from 'react'

const Orderhistory = () => {

    const data = [
        { symbol: "EURUSD.i", type: "Sell", openDate: "02-3-24, 06:12:16", openPrice: 2.80568, sl: 0, tp: 0, closeDate: "02-3-24, 06:12:16", closePrice: 1.80568, lots: 100, profit: -5.00, duration: "11s", gain: -0.01 },
        { symbol: "EURUSD.i", type: "Buy", openDate: "02-3-24, 06:12:16", openPrice: 2.80568, sl: 0, tp: 0, closeDate: "02-3-24, 06:12:16", closePrice: 1.80568, lots: 100, profit: 9.00, duration: "11s", gain: 0.01 },
        { symbol: "EURUSD.i", type: "Sell", openDate: "02-3-24, 06:12:16", openPrice: 2.80568, sl: 0, tp: 0, closeDate: "02-3-24, 06:12:16", closePrice: 1.80568, lots: 100, profit: -5.00, duration: "11s", gain: -0.01 },
        { symbol: "EURUSD.i", type: "Buy", openDate: "02-3-24, 06:12:16", openPrice: 2.80568, sl: 0, tp: 0, closeDate: "02-3-24, 06:12:16", closePrice: 1.80568, lots: 100, profit: 9.00, duration: "11s", gain: 0.01 },
        { symbol: "EURUSD.i", type: "Sell", openDate: "02-3-24, 06:12:16", openPrice: 2.80568, sl: 0, tp: 0, closeDate: "02-3-24, 06:12:16", closePrice: 1.80568, lots: 100, profit: -5.00, duration: "11s", gain: -0.01 },
        { symbol: "EURUSD.i", type: "Buy", openDate: "02-3-24, 06:12:16", openPrice: 2.80568, sl: 0, tp: 0, closeDate: "02-3-24, 06:12:16", closePrice: 1.80568, lots: 100, profit: 9.00, duration: "11s", gain: 0.01 },
       
      ];
    
      return (
        <div className="p-3 bg-white rounded-lg shadow-md mb-8   ml-5 mt-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Order History</h2>
            <div className="space-x-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Open Trades</button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Closed Trades</button>
              <select className="bg-gray-200 text-gray-700  py-2 rounded">
              <option>Last 30 Day</option>
              <option>Last 7 Days</option>
              <option>Last 24 Hours</option>
              </select>
            </div>
          </div>
          <table className="w-full text-left  rounded-xl">
            <thead className="bg-slate-200 border rounded-2xl ">
              <tr className='rounded-2xl'>
                {["Symbol", "Type", "Open Date", "Open Price", "SL", "TP", "Close Date", "Close Price", "Lots", "Profit", "Duration", "Gain"].map((header) => (
                  <th key={header} className="p-2 border-b">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-2 border-b">{row.symbol}</td>
                  <td className={`p-2 border-b ${row.type === 'Sell' ? 'text-red-500' : 'text-green-500'}`}>{row.type}</td>
                  <td className="p-2 border-b">{row.openDate}</td>
                  <td className="p-2 border-b">{row.openPrice}</td>
                  <td className="p-2 border-b">{row.sl}</td>
                  <td className="p-2 border-b">{row.tp}</td>
                  <td className="p-2 border-b">{row.closeDate}</td>
                  <td className="p-2 border-b">{row.closePrice}</td>
                  <td className="p-2 border-b">{row.lots}</td>
                  <td className={`p-2 border-b ${row.profit < 0 ? 'text-red-500' : 'text-green-500'}`}>{row.profit < 0 ? `-$${Math.abs(row.profit)}` : `+$${row.profit}`}</td>
                  <td className="p-2 border-b">{row.duration}</td>
                  <td className={`p-2 border-b ${row.gain < 0 ? 'text-red-500' : 'text-green-500'}`}>{row.gain < 0 ? `${row.gain}%` : `+${row.gain}%`}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-4">
            <span>Showing: 07</span>
            <div className="flex space-x-2">
              <button className="text-gray-500">&lt;</button>
              <button className="text-blue-500">1</button>
              <button className="text-gray-500">2</button>
              <button className="text-gray-500">3</button>
              <button className="text-gray-500">&gt;</button>
            </div>
          </div>
        </div>
      );
}

export default Orderhistory
