import { ChartAreaDefault } from "./AreaChart"
import TimeToggle from "./Timetoggle"
import { useTimeRange } from "../../hooks/useTimeRange"
import allData from "../../raw_data/alldata.json"

const MetricCard = () => {
  const { selectedRange, setSelectedRange } = useTimeRange('1d')

  // Define metrics configuration
  const metricsConfig = [
    { key: 'profit', title: 'Total Profit/Loss' },
    { key: 'winRate', title: 'Win Rate' },
    { key: 'expectancyRate', title: 'Expectancy Rate' },
    { key: 'drawdown', title: 'Max Drawdown' },
    { key: 'kellyRatio', title: 'Kelly Ratio Score' },
  ]

  return (
    <div className="w-full flex flex-col gap-2 ">
      <div className="flex flex-1 w-full justify-between">
        <h4 className="scroll-m-20 font-medium ">
          Performance Metrics
        </h4>
        <TimeToggle
          selectedRange={selectedRange}
          onRangeChange={setSelectedRange}
        />
      </div>

      <div className="grid max-sm:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {metricsConfig.map(({ key, title }) => {
          const metricData = allData.cards[key as keyof typeof allData.cards]
          const rangeData = metricData[selectedRange]


          return (
            <ChartAreaDefault
              key={`${key}-${selectedRange}`}
              chartTitle={title}
              data={rangeData.data}
              currentValue={rangeData.currValue}
              prevValue={rangeData.prevValue}
              timeRange={selectedRange} 
              size={6}
            />
          )
        })}
      </div>
    </div>
  )
}

export default MetricCard
