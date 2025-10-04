import { AverageWinLoss } from "../AvrageWinLoss"
import { PLchart } from "../plchart"
import { RadialChartPL } from "../RadialChartPL"


const DailyMetrics = () => {
    return (
        <div className="bg-card text-card-foreground grid grid-row-3 gap-2 ">
            <PLchart />
            <div className="space-y-1 grid grid-cols-2 gap-2">
              
                <RadialChartPL label="Profit Factors" data={4.8} />
                <RadialChartPL label="Win Percentage" data={54.5} />

            </div>
            <AverageWinLoss/>
        </div>
    )
}

export default DailyMetrics