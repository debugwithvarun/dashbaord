


import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,

  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import type { ChartConfig } from "../../components/ui/chart"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart"
import TimeToggle from "./Timetoggle"
import InfoButton from "./InfoButton"
// import Timetoggle from "./Timetoggle"

export const description = "A multiple bar chart"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: -305, mobile: 200 },
  { month: "March", desktop: -237, mobile: 120 },
  { month: "April", desktop: -73, mobile: 190 },
  { month: "May", desktop: -209, mobile: -130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

type ChartAreaDefaultProps = {
    chartTitle?: string;
  
  };

export function ChartBarMultiple({chartTitle}: ChartAreaDefaultProps) {
  return (
    <Card className="max-h-105">
    <CardHeader>
        <div className="w-full flex items-center justify-between">
     <div className="flex justify-start items-center gap-2">
            <CardTitle className=" whitespace-nowrap  items-center">{chartTitle}
            </CardTitle>
            <span><InfoButton /></span>
          </div>
        <TimeToggle/>
        </div>
       
   
      </CardHeader>
      <CardContent >
        <ChartContainer config={chartConfig} className="h-60 w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>

    </Card>
  )
}


const EquityCurve = () => {
  return (
    <div className='w-full'>
        <ChartBarMultiple chartTitle="Equity Curve"/>
    </div>
  )
}

export default EquityCurve