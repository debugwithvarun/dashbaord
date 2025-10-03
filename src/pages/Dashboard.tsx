
import Dropdown from "../components/DashboardComponent/Dropdown"
import DualCalendar from "../components/DashboardComponent/DualCalender"
import EquityCurve from "../components/DashboardComponent/EquityCurve"
import MetricCard from "../components/DashboardComponent/MetricCard"
import OpenTrades from "../components/DashboardComponent/OpenTrades"
import DiagnolBox from "../components/DiagnolBox"


const Dashboard = () => {
  return (
    <div className="w-full items-center flex flex-col gap-2">
      <MetricCard />
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 ">
        <EquityCurve />
        <Dropdown />
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-2">
        
          <DualCalendar />
          <DiagnolBox />
          {/* <OpenTrades /> */}
      </div>

    </div>
  )
}

export default Dashboard