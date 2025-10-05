import { BotMessageSquare, Newspaper } from "lucide-react"
import { Card } from "../ui/card"


const MarketContextTab = () => {
  return (
    <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2">
      <Card className="flex p-4 gap-4 overflow-y-auto scrollbar-hide">
        <span className="flex gap-2 items-center"><Newspaper />
          <h3>Market Conditions</h3>
        </span>

        <span className="flex flex-col gap-2">
          <p>Market Sentiment</p>
          <p className="text-[var(--color-muted-foreground)]">Not recorded</p>
        </span>

        <span className="flex flex-col gap-2">
          <p>Sector Performance</p>
          <p className="text-[var(--color-muted-foreground)]">Not recorded</p>
        </span>

        <span className="border-t flex flex-col gap-2 py-2">

          <p>Relevant News

</p>
          <p className="text-[var(--color-muted-foreground)]">No relevant news recorded</p>
        </span>
      </Card>
      <Card className="flex p-4 gap-4 overflow-y-auto scrollbar-hide">

        <span className="flex flex-col gap-2">
          <p className="flex gap-2 items-center"><BotMessageSquare/> Market Sentiment</p>
          <i className="text-[var(--color-muted-foreground)]">AI-powered market analysis will be available in a future update. This will include pattern recognition, support/resistance identification, and "what-if" scenario analysis.</i>
        </span>
      </Card>
    </div>
  )
}

export default MarketContextTab