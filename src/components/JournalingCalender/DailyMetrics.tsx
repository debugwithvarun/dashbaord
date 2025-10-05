import { AverageWinLoss } from "../charts/AvrageWinLoss"
import { PLchart } from "../charts/plchart"
import { RadialChartPL } from "../charts/RadialChartPL"


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