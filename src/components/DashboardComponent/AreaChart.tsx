import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart"
import TimeToggle from "./Timetoggle"

interface ChartData {
  timestamp: string
  value: number
  formattedTime?: string
}
export type TimeRange = '1d' | '1w' | '1m' | '1y'

type ChartAreaDefaultProps = {
  chartTitle?: string
  data: ChartData[]
  currentValue?: number
  prevValue?: number
  timeRange?: string
  selectedRange?: TimeRange
  onRangeChange?: (range: TimeRange) => void
  size:number
}

function formatTime(timestamp: string, timeRange: string = '1d'): string {
  const date = new Date(timestamp)
  
  switch (timeRange) {
    case '1d':
      return date.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      })
    case '1w':
      return date.toLocaleDateString('en-US', { 
        weekday: 'short'
      })
    case '1m':
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
      })
    case '1y':
      return date.toLocaleDateString('en-US', { 
        month: 'short' 
      })
    default:
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
  }
}

export function ChartAreaDefault({chartTitle,data,currentValue,prevValue,timeRange = '1d',selectedRange,onRangeChange,size}: ChartAreaDefaultProps) {
  // console.log(data)

  const chartData = data.map((item) => ({
    ...item,
    formattedTime: formatTime(item.timestamp, timeRange)
  }))
  console.log(chartData)
  const badgeig =
    currentValue !== undefined && prevValue !== undefined && prevValue !== 0
      ? (((currentValue - prevValue) / Math.abs(prevValue)) * 100).toFixed(2) + '%'
      : 'N/A'
  const badgeValue =
    currentValue !== undefined && prevValue !== undefined
      ? `${currentValue - prevValue >= 0 ? "+" + String(badgeig) : badgeig}`
      : 'N/A'

  const chartConfig = {
    value: {
      label: chartTitle || "Value",
      color: "var(--chart-2)",
    },
  }
  const cardheight=`max-h-${size*7}`
  const chartHeight=`h-${(size*4)}`
  console.log(cardheight,chartHeight)
  return (
    <Card className={cardheight}>
      <CardHeader>
        <div className="w-full flex items-center justify-between ">
        <CardTitle>{chartTitle}</CardTitle>
        {(currentValue !== undefined && prevValue !== undefined) ? (
         <span className={`${currentValue-prevValue >=0 ? 'bg-green-600/10 text-green-600' : 'bg-red-600/10 text-red-600'} px-2 text-[11px] rounded-sm py-1 `}>{badgeValue}</span>
        ):<TimeToggle selectedRange={selectedRange ?? '1d'} onRangeChange={onRangeChange ?? (() => {})} />}
        </div>
        <h3></h3>

      </CardHeader>
      <CardContent >
        <ChartContainer config={chartConfig}
          className={` w-full ${chartHeight}`}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 12, right: 12 }}
          >
            {/* <CartesianGrid vertical={false} /> */}
            <XAxis
              dataKey="formattedTime"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={4}
              fontSize={10}
              tickSize={8}
              interval={Math.max(0, Math.floor(chartData.length / 4) - 1) || 0}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="value"
              type="monotone"
             
              fill="var(--color-value)"
              fillOpacity={0.3}
              stroke="var(--color-value)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>

    </Card>
  )
}
