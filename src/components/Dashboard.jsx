import React from 'react';
import { MoreHorizontal, DollarSign, BarChart2, User, FileText, Trophy, List, Newspaper, Calendar, Calculator, LogOut } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const balanceData = [
  { name: '0', balance: 115000, equity: 95000 },
  { name: '1', balance: 105000, equity: 95000 },
  { name: '2', balance: 95000, equity: 95000 },
  { name: '3', balance: 100000, equity: 95000 },
  { name: '4', balance: 102000, equity: 95000 },
];

const NavItem = ({ icon: Icon, text, active }) => (
  <div className={`flex items-center px-4 py-3 my-1 rounded-lg cursor-pointer ${active ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
    <Icon className="w-5 h-5 mr-3" />
    <span>{text}</span>
  </div>
);

const MetricCard = ({ label, value, subValue, icon }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-sm text-gray-600">{label}</h3>
      <MoreHorizontal className="w-5 h-5 text-gray-400" />
    </div>
    <div className="text-2xl font-bold mb-2">${value}</div>
    {subValue && (
      <div className="text-sm text-gray-500">
        {subValue}
      </div>
    )}
  </div>
);

const StatsBlock = ({ label, value, percentage, type }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center">
        <span className="text-sm text-gray-600">{label}</span>
      </div>
      <span className={`text-sm ${percentage > 0 ? 'text-green-500' : percentage < 0 ? 'text-red-500' : 'text-gray-500'}`}>
        {percentage > 0 ? '+' : ''}{percentage}%
      </span>
    </div>
    <div className="text-xl font-semibold">${value}</div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-8">
            <BarChart2 className="w-6 h-6 text-blue-600" />
            <span className="font-bold text-xl">Trading</span>
          </div>

          <div className="mb-8">
            <div className="text-xs text-gray-500 mb-2">MENU</div>
            <NavItem icon={BarChart2} text="Accounts Overview" active />
            <NavItem icon={DollarSign} text="Payouts" />
            <NavItem icon={FileText} text="Certificates" />
            <NavItem icon={Trophy} text="Leaderboard" />
            <NavItem icon={List} text="Order List" />
          </div>

          <div className="mb-8">
            <div className="text-xs text-gray-500 mb-2">APPS</div>
            <NavItem icon={Newspaper} text="News Feeds" />
            <NavItem icon={Calendar} text="Economic Calendar" />
            <NavItem icon={BarChart2} text="WebTrader Platform" />
            <NavItem icon={Calculator} text="Margin Calculator" />
            <NavItem icon={Calculator} text="Profit Calculator" />
          </div>

          <div className="border-t pt-4 mt-auto">
            <div className="flex items-center gap-3 p-2">
              <div className="w-10 h-10 bg-gray-200 rounded-full" />
              <div>
                <div className="font-medium">Daniel Sullivan</div>
                <div className="text-sm text-gray-500">alex@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Welcome back, Alex</h1>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Request Payout
              </button>
              <button className="bg-gray-100 px-4 py-2 rounded-lg">
                Share Metrics
              </button>
            </div>
          </header>

          {/* Balance Chart */}
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-lg font-semibold">Total Balance</h2>
                <div className="text-sm text-gray-500">Profit: +0.8%</div>
              </div>
              <div className="flex gap-6">
                <div>
                  <div className="text-sm text-gray-500">Balance</div>
                  <div className="font-semibold">$120,567.90</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Equity</div>
                  <div className="font-semibold">$249,952.00</div>
                </div>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={balanceData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="balance" stroke="#2563eb" />
                  <Line type="monotone" dataKey="equity" stroke="#ef4444" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <StatsBlock label="Average Win" value="642.00" percentage={7} />
            <StatsBlock label="Average Loss" value="0.00" percentage={0} />
            <StatsBlock label="Best Trade" value="8,908.99" />
            <StatsBlock label="Win Ratio" value="-4,800.90" percentage={-2.3} />
          </div>

          {/* Trade History */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Order History</h2>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded">Open Trades</button>
                <button className="px-3 py-1 text-sm text-gray-600 rounded">Closed Trades</button>
              </div>
            </div>
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500">
                  <th className="py-2">Symbol</th>
                  <th className="py-2">Type</th>
                  <th className="py-2">Open Date</th>
                  <th className="py-2">Open Price</th>
                  <th className="py-2">Close Date</th>
                  <th className="py-2">Close Price</th>
                  <th className="py-2">Lots</th>
                  <th className="py-2">Profit</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    symbol: 'EURUSD',
                    type: 'Sell',
                    openDate: '02-3-24, 06:12:16',
                    openPrice: '2.80568',
                    closeDate: '02-3-24, 06:12:16',
                    closePrice: '1.80568',
                    lots: '100',
                    profit: -58.00
                  },
                  {
                    symbol: 'EURUSD',
                    type: 'Buy',
                    openDate: '02-3-24, 06:12:16',
                    openPrice: '2.80568',
                    closeDate: '02-3-24, 06:12:16',
                    closePrice: '1.80568',
                    lots: '100',
                    profit: 59.00
                  }
                ].map((trade, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-3">{trade.symbol}</td>
                    <td className={`py-3 ${trade.type === 'Buy' ? 'text-blue-500' : 'text-red-500'}`}>
                      {trade.type}
                    </td>
                    <td className="py-3">{trade.openDate}</td>
                    <td className="py-3">{trade.openPrice}</td>
                    <td className="py-3">{trade.closeDate}</td>
                    <td className="py-3">{trade.closePrice}</td>
                    <td className="py-3">{trade.lots}</td>
                    <td className={`py-3 ${trade.profit > 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {trade.profit > 0 ? '+' : ''}{trade.profit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-64 p-6">
        <MetricCard
          label="Profit Target"
          value="8,908.99"
          subValue="Equity Peak Level: $124,900.00"
        />
        <div className="mt-6">
          <MetricCard
            label="Daily Loss Limit"
            value="12,908.99"
            subValue="Equity Breach Level: $124,900.00"
          />
        </div>
        <div className="mt-6 bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Most Traded</h3>
            <MoreHorizontal className="w-5 h-5 text-gray-400" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {['NZDUSD', 'USDCHF', 'GBPUSD', 'XAUUSD', 'AUDCHF', 'AUDNZD'].map((pair) => (
              <div key={pair} className="bg-gray-50 p-2 rounded text-sm text-center">
                {pair}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
