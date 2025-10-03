import { useState } from "react"
import { ChartAreaDefault } from "./AreaChart"
import type { TimeRange } from "./Timetoggle"
// import TimeToggle from "./Timetoggle"
import allData from "../../raw_data/alldata.json"
const Dropdown = () => {
  const [selectedRange, setSelectedRange] = useState<TimeRange>('1d')
  const metricData = allData.charts.drawdownChart
  const rangeData = metricData[selectedRange]
  return (
    <div className='w-full relative'>
     
      <ChartAreaDefault 
        chartTitle="Dropdown" 
        timeRange={selectedRange}
        data={rangeData.data}
        selectedRange={selectedRange}
        onRangeChange={setSelectedRange}
        size={15}
        // currentValue={rangeData.currValue}
        // prevValue={rangeData.prevValue}
        

      />
    </div>
  )
}

export default Dropdown
