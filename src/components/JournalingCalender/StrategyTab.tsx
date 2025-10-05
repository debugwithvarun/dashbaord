import { ChartNoAxesCombined, TrendingUp } from "lucide-react"
import { Card } from "../ui/card"


const StrategyTab = () => {
  return (
    <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2">
      <Card className="flex p-4 gap-4 overflow-y-auto scrollbar-hide">
        <span className="flex gap-2 items-center"><ChartNoAxesCombined/>
          <h3>Strategy</h3>
        </span>

        <span className="flex flex-col gap-2">
          <p>Strategy Type</p>
          <p className="text-[var(--color-muted-foreground)]">Resistance</p>
        </span>

        <span className="flex flex-col gap-2">
          <p>Setup Patterns</p>
          <p className="text-[var(--color-muted-foreground)]">N/A</p>
        </span>

        <span className="flex flex-col gap-2 py-2">

          <p>Key Catalyst
</p>
          <p className="text-[var(--color-muted-foreground)]">N/A</p>
        </span>
      </Card>
      <Card className="flex p-4 gap-4 overflow-y-auto scrollbar-hide">

        <span className="flex flex-col gap-2">
          <p className="flex gap-2 items-center"><TrendingUp/> Trade Analysis</p>
          <p className="text-[var(--color-muted-foreground)]">Insights & Notes</p>
          <Card className="px-4">
            N/A
          </Card>
        </span>
      </Card>
    </div>
  )
}

export default StrategyTab