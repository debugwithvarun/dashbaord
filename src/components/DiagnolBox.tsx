import { Button } from "../components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog"
import { AverageWinLoss } from "./AvrageWinLoss"
import { PLchart } from "./plchart"
import { RadialChartPL } from "./RadialChartPL"
// import { Card } from "./ui/card"
// import { Card } from "./ui/card"

export default function DiagnolBox() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Me</Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:hidden">
        <div className="overflow-y-auto scrollbar-hide">
          <DialogHeader className="contents space-y-0 text-left">
            <DialogTitle className="px-6 pt-6 text-foreground border px-6 py-4 mt-0 bg-background z-50 sticky top-0">
              <h1>Thursday, October 2, 2025</h1>

             <div className="w-full flex justify-between items-center"> <p className="text-sm mt-2 "><span className="mr-1">₹</span>Net P&L <span className="text-green-600 ml-2">+₹46820.48</span></p>
              <p className="text-sm mt-2 ">↗<span className="mr-1">₹</span>Trades <span className="text-blue-600 ml-2">12</span></p></div>

            </DialogTitle>
            <DialogDescription asChild>
              <div className="p-3">
                <div className="[&_strong]:text-foreground space-y-2 [&_strong]:font-semibold">
                  <div className="space-y-1">
                    {/* <p>
                      <strong>Net Cumulative P&L</strong>
                    </p> */}
                    <PLchart/>
                  </div>
                  <div className="space-y-1 grid grid-cols-2 gap-2">
                    {/* <p>
                      <strong>Password Reset Process</strong>
                    </p> */}
                    <RadialChartPL label="Profit Factors" data={4.8} />
                    <RadialChartPL label="Win Percentage" data={54.5} />

                  </div>
                  <div className="space-y-1">
                      <AverageWinLoss/>
                  </div>
           
                  <div className="space-y-1 ">
                    <p>
                      <strong>Instrument Performance</strong>
                    </p>
                      <div className="flex flex-col gap-2">
                      <div className="bg-card text-card-foreground flex items-center justify-between px-4 w-full gap-3 rounded-xl border py-3 shadow-sm">
                      <div className="flex flex-col gap-2">
                        <strong>MSFT</strong>
                        <p>6 trades</p>
                      </div>
                      <div>
                        <p className="text-green-600">+₹67295.09</p>
                      </div>
                    </div>
                    <div className="bg-card text-card-foreground flex items-center justify-between px-4 w-full gap-6 rounded-xl border py-3 shadow-sm">
                      <div className="flex flex-col gap-2">
                        <strong>MSFT</strong>
                        <p>6 trades</p>
                      </div>
                      <div>
                      <p className="text-red-600">-₹67295.09</p>

                      </div>
                    </div>
                    <div className="bg-card text-card-foreground flex items-center justify-between px-4 w-full gap-6 rounded-xl border py-3 shadow-sm">
                      <div className="flex flex-col gap-2">
                        <strong>MSFT</strong>
                        <p>6 trades</p>
                      </div>
                      <div>
                      <p className="text-green-600">+₹67295.09</p>

                      </div>
                    </div>
                    <div className="bg-card text-card-foreground flex items-center justify-between px-4 w-full gap-6 rounded-xl border py-3 shadow-sm">
                      <div className="flex flex-col gap-2">
                        <strong>MSFT</strong>
                        <p>6 trades</p>
                      </div>
                      <div>
                      <p className="text-red-600">-₹67295.09</p>

                      </div>
                    </div>
                      </div>
   
                    
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </div>
        <DialogFooter className="border-t px-6 py-4">
      
          <DialogClose asChild>
            <Button type="button" >Show Full Details</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
