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

export default function UploadDialogManual({children}:{children:ReactNode}) {
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
    <AlertDialog >
      <AlertDialogTrigger asChild>
       {children}
      </AlertDialogTrigger>
      <AlertDialogContent className="w-full scrollbar-none max-h-[70%] p-0">
        <AlertDialogHeader>
      
            
        <ManualBox
            trades={trades}
            onChange={handleInputChange}
            onAddRow={handleAddRow}
            onRemoveRow={handleRemoveRow}
         
        />
           
        </AlertDialogHeader>

        <AlertDialogFooter className="p-6 sticky bottom-0 bg-background">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSave}>Save</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
