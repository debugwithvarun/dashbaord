import { ShimmerTextArea } from "./ShimmerTextArea"
import { ShimmerTradeDetails } from "./ShimmerTradeDetails"
import { ShimmerCalendar } from "./ShimmerCalendar"
import { ShimmerMetrics } from "./ShimmerMetrics"

const JournalingCalendarShimmer = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4">
      <div className="flex flex-col gap-4">
        <ShimmerTextArea  />
        <ShimmerTradeDetails />
        <ShimmerTextArea />
        <ShimmerTextArea />
      </div>

      <div className="flex flex-col gap-2 sticky top-14 h-fit lg:w-[350px]">
        <ShimmerCalendar />
        <ShimmerMetrics />
      </div>
    </div>
  )
}

export default JournalingCalendarShimmer
