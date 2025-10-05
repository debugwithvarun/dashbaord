

// import { TrendingUp } from "lucide-react"
import { Pie, PieChart as RechartsPieChart } from "recharts"

import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import type { ChartConfig } from "../../components/ui/chart"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart"

export const description = "A pie chart with a label"

const chartData = [
  { browser: "MSFT", visitors: 67295.09, fill: "var(--color-chrome)" },
  { browser: "TSLA", visitors: 5850.56, fill: "var(--color-safari)" },
  { browser: "BTC", visitors: 29097.11, fill: "var(--color-firefox)" },
  { browser: "GOOGL", visitors: 2771.94, fill: "var(--color-edge)" },
//   { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "MSFT",
    color: "var(--chart-1)",
  },
  safari: {
    label: "TSLA",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "BTC",
    color: "var(--chart-3)",
  },
  edge: {
    label: "GOOGL",
    color: "var(--chart-4)",
  },
//   other: {
//     label: "Other",
//     color: "var(--chart-5)",
//   },
} satisfies ChartConfig

export function PieChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Instrument Performance
</CardTitle>
        {/* <CardDescription>January - June 2024</CardDescription> */}
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square max-h-[250px] w-full pb-0"
        >
          <RechartsPieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="visitors" label nameKey="browser" />
          </RechartsPieChart>
        </ChartContainer>
      </CardContent>

    </Card>
  )
}
