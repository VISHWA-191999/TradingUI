import { useState } from "react";
import Sidebar from "./components/SidebarSection/Sidebar";
import Dashboard from "./components/Dashboard";
import Header from "./components/HeaderSection/Header";
import Chart from "./components/ChartSection/Chart";

import StatsGrid from "./components/DashboardSection/StatsGrid";
import Notify from "./components/Notification/Notify";
import Orderhistory from "./components/OrderHistory/Orderhistory";
import { ThemeProvider } from "./useContextHook/useTheme";

function App() {
  return (
    <ThemeProvider>
    <div className="flex w-[99%]  p-3 h-screen justify-between">
      <div className="w-[15%] h-screen">
        <Sidebar />
      </div>
      <div className="flex  flex-col h-screen  ">
        <Header />
        <Chart />

        <div className="ml-5 flex  gap-4">
          <StatsGrid />
          <Notify  />
        </div>
        <Orderhistory />
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
{
  /* <Dashboard ></Dashboard> */
}
