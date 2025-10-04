import AIInsight from "../components/JournalingCalender/AIInsight"
import DailyMetrics from "../components/JournalingCalender/DailyMetrics"
import JCTextArea from "../components/JournalingCalender/JCTextArea"
import TradeDetails from "../components/JournalingCalender/TradeDetails"
import Tradingcalender from "../components/JournalingCalender/TradingCalender"

const JournalingCalendar = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_auto] relative gap-2">
      
  
      <div className="md:w-[100%] flex flex-col gap-2">
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

    
      <div className="flex flex-col gap-4 md:scale-90 md:origin-top ">
        <Tradingcalender />
        <DailyMetrics />
      </div>

    </div>
  )
}

export default JournalingCalendar
