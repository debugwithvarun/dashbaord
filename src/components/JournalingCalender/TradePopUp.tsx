import { useEffect } from "react";
import { Card } from "../ui/card";
import { ArrowDown,  TrendingUp, X } from "lucide-react";
import TabMenu from "./TabMenu";

type TradePopUpProps={
    setShowPopUp:(e:boolean)=>void
}
const TradePopUp = ({setShowPopUp}:TradePopUpProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className=' flex justify-center items-center data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80'
    onClick={()=>setShowPopUp(false)}
    >

        <Card className="w-[80%] flex flex-col h-[80vh] overflow-y-auto overflow-x-hidden scrollbar-hide !py-0"
        onClick={(e)=>e.stopPropagation()}
        >
            <div className="flex w-full border-b gap-2 p-4 flex-col sticky top-0 z-50 bg-background relative">
            <X className="absolute cursor-pointer top-4 right-4" onClick={()=>setShowPopUp(false)}/>

                <div className="flex gap-2 items-center">
                    <h2 className="text-lg font-medium">NIFTY</h2>
                    <span className="flex items-center gap-1 text-[12px]  py-1 px-3 bg-green-600/30 text-green-600 rounded-2xl"><TrendingUp size={12}/>Long</span>
                    <span className="flex items-center gap-1 text-[12px]  py-1 px-3 bg-red-600/30 text-red-600 rounded-2xl"><ArrowDown size={12}/>Win</span>
                </div>
                <div className="flex gap-2 mb-2 items-center">
                    <span className="text-[var(--color-muted-foreground)] text-md">00:00:00</span>
                    <span className="text-[var(--color-muted-foreground)] text-md">Equity</span>
                </div>
            </div>
            <div className=" bg-card text-card-foreground grid md:grid-cols-4 max-md:grid-cols-2  max-md:text-[12px]  rounded-xl py-3 mx-4">
                    <div className="flex flex-col p-2">
                        <span>Entry Date & Time</span>
                        <strong >Jan 01, 2025 at 00:00:00</strong>
                    </div>
                    <div className="flex flex-col p-2">
                        <span>Exit Date & Time</span>
                        <strong>Oct 03, 2025 at 09:19:00</strong>
                    </div>
                    <div className="flex flex-col p-2">
                        <span>Duration</span>
                        <strong>275 days</strong>
                    </div>
                    <div className="flex flex-col p-2">
                        <span>Position Size</span>
                        <strong>N/A</strong>
                    </div>
  
            </div>
                <div className="">
                <div className="px-4 bg-card text-card-foreground ">
           <TabMenu/>
           </div>
                </div>
        </Card>

    </div>
  );
};

export default TradePopUp;
