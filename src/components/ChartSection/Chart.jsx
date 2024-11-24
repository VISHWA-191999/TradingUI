import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import Profit from "./Profit";
import data from "./../../utils/chartData.json";
import Loss from "./Loss";
import MostTraded from "./MostTraded";
import { BsThreeDotsVertical } from "react-icons/bs";


const Chart = () => {

    console.log(data)
  return (
    <section className="flex w-full gap-3 p-6 h-[55%] ">
      <div className="bg-white p-6 rounded-lg shadow mb-6 w-[55%] h-[100%]">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-semibold">Total Balance</h2>
            <div className="text-sm text-gray-800">Profit: +0.8%</div>
          </div>
          <div className="flex gap-6">
            <div>
            <div className="font-semibold">$120,567.90</div>
              <div className="text-sm text-gray-500">Balance</div>
              
            </div>
            <div>
            <div className="font-semibold">$249,952.00</div>
              <div className="text-sm text-gray-500">Equity</div>
             
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={210}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="step" dataKey="balance" stroke="#3366FF" />
          <Line type="step" dataKey="equity" stroke="#FF5733" />
        </LineChart>
      </ResponsiveContainer>
      </div>

      <div className="w-[45%] ">
        <div className="w-full flex gap-3 h-[45%] ">
        <Profit/>
        <Loss/>
        </div>
        <div className=" h-[60%] box-border mt-1">
       
          <MostTraded/>
        </div>
        
      </div>
     
    </section>
  );
};
export default Chart;
