import { useState, type ReactNode } from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "../../ui/alert-dialog"
import ManualBox from "./manual-box";
import { Button } from "../../ui/button";
import { Plus } from "lucide-react";
import { ScrollArea, ScrollBar } from "../../ui/scroll-area";

interface TradeFormData {
  stockName: string;
  symbol: string;
  type: string;
  buyPrice: string;
  sellPrice: string;
  buyDate: string;
  sellDate: string;
  quantity: string;
  brokerName: string;
  tradetype: string;
  exchange: string;
}

export default function UploadDialogManual({ children }: { children: ReactNode }) {
  const [trades, setTrades] = useState<TradeFormData[]>([
    {
      stockName: "",
      symbol: "",
      type: "BUY",
      buyPrice: "",
      sellPrice: "",
      buyDate: "",
      sellDate: "",
      quantity: "",
      brokerName: "",
      tradetype: "equity",
      exchange: "NSE",
    },
  ]);

  const handleInputChange = (index: number, field: keyof TradeFormData, value: string) => {
    const updated = [...trades];
    updated[index][field] = value;
    setTrades(updated);
  };

  const handleAddRow = () => {
    setTrades([
      ...trades,
      {
        stockName: "",
        symbol: "",
        type: "BUY",
        buyPrice: "",
        sellPrice: "",
        buyDate: "",
        sellDate: "",
        quantity: "",
        brokerName: "",
        tradetype: "equity",
        exchange: "NSE",
      },
    ]);
  };

  const handleRemoveRow = (index: number) => {
    if (trades.length > 1) setTrades(trades.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    console.log("Trades to save:", trades);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {children}
      </AlertDialogTrigger>

      <AlertDialogContent className="w-full max-w-6xl p-0 overflow-hidden flex flex-col max-h-[80vh]">
        {/* HEADER - fixed */}
        <AlertDialogHeader className="sticky top-0 z-20 bg-background border-b border-border">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-6 py-3 gap-3 sm:gap-0">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-foreground">Manual Trade Entry</h2>
              <p className="text-xs sm:text-sm text-muted-foreground">Enter your trades below</p>
            </div>
            <Button onClick={handleAddRow} variant="default" size="sm" className="gap-2 w-full sm:w-auto">
              <Plus className="w-4 h-4" />
              Add Trade
            </Button>
          </div>
        </AlertDialogHeader>

        {/* SCROLLABLE CONTENT */}
        <ScrollArea className="flex-1 overflow-auto scrollbar-none">
    
          <ManualBox
            trades={trades}
            onChange={handleInputChange}
            onRemoveRow={handleRemoveRow}
          />
          <ScrollBar orientation="horizontal" className="h-0"/>
        </ScrollArea>

        {/* FOOTER - fixed */}
        <AlertDialogFooter className="sticky bottom-0 z-20 bg-background border-t border-border p-4 sm:p-6">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSave}>Save</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
