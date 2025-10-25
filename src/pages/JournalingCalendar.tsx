import AIInsight from "../components/JournalingCalender/AIInsight"
import DailyMetrics from "../components/JournalingCalender/DailyMetrics"
import JournalingCalendarShimmer from "../components/JournalingCalender/JCShimmer"
import JCTextArea from "../components/JournalingCalender/JCTextArea"
import TradeDetails from "../components/JournalingCalender/TradeDetails"

import Tradingcalender from "../components/JournalingCalender/TradingCalender"

const JournalingCalendar = () => {
  return <JournalingCalendarShimmer/>
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 ">
  
      <div className="md:max-w-[100%] flex flex-col gap-4 ">
        <JCTextArea 
          labelName="Pre-Market Analysis" 
          placeholder="Market Outlook" 
        />
        <div className="w-full">
        <TradeDetails/>
        </div>
        <JCTextArea 
          labelName="Pre-Market Review" 
          placeholder="What Went Well" 
        />
        <AIInsight 
          labelName="AI Insight" 
          placeholder="No Insight" 
        />
      </div>

    
    <div className="flex flex-col gap-2 sticky top-14 h-fit">
    
        <Tradingcalender />
        <DailyMetrics />
       
      </div>


    </div>
  )
}

export default JournalingCalendar
