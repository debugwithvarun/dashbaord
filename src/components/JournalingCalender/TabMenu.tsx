import {  ChartNoAxesCombined, Newspaper, NotebookPen, TrendingUp } from "lucide-react"

import { ScrollArea, ScrollBar } from "../ui/scroll-area"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../ui/tabs"
import TradeDetailsTab from "./TradeDetailsTab"
import MarketContextTab from "./MarketContextTab"
import StrategyTab from "./StrategyTab"
import JournalTab from "./JournalTab"

export default function TabMenu() {
  return (
    <Tabs defaultValue="tab-1">
      <ScrollArea>
        <TabsList className="mb-3 gap-1 bg-transparent">
          <TabsTrigger

          defaultChecked
            value="tab-1"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full data-[state=active]:shadow-none"
          >
            <TrendingUp
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              aria-hidden="true"
            />
            Trade Details
          </TabsTrigger>
          <TabsTrigger
            value="tab-2"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full data-[state=active]:shadow-none"
          >
            <Newspaper
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              aria-hidden="true"
            />
            Market Context
          </TabsTrigger>
          <TabsTrigger
            value="tab-3"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full data-[state=active]:shadow-none"
          >
            <ChartNoAxesCombined
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              aria-hidden="true"
            />
            Strategy
          </TabsTrigger>
          <TabsTrigger
            value="tab-4"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full data-[state=active]:shadow-none"
          >
            <NotebookPen
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              aria-hidden="true"
            />
            Journal
          </TabsTrigger>
        </TabsList>
      
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <TabsContent value="tab-1" className="max-h-[300px] overflow-y-auto scrollbar-hide">
        <TradeDetailsTab/>
      </TabsContent>
      <TabsContent value="tab-2" className="max-h-[300px] overflow-y-auto scrollbar-hide">
        <MarketContextTab/>
      </TabsContent>
      <TabsContent value="tab-3" className="max-h-[300px] overflow-y-auto scrollbar-hide">
        <StrategyTab/>
      </TabsContent>
      <TabsContent value="tab-4" className="max-h-[300px] overflow-y-auto scrollbar-hide">
        <JournalTab/>
      </TabsContent>
  
    </Tabs>
  )
}
