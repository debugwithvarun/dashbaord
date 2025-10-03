import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table"

import alldata from "../../raw_data/alldata.json"
function getIndianDate(isoString:string) {
  return new Date(isoString)
    .toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    
}

function getIndianTime(isoString:string) {
  return new Date(isoString).toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}


export default function OpenTrades() {
  const DataToShow=alldata.openTrades
  console.log(DataToShow)
  return (
   
    <div className="w-full flex ">
  <div className="bg-background rounded-md border w-full overflow-hidden ">
    {/* Fixed Header */}
    <div className="sticky top-0 z-50 bg-background border-b">
      <Table className="[&_td]:border-border [&_th]:border-border border-separate border-spacing-0 [&_tfoot_td]:border-t [&_tr]:border-none [&_tr:not(:last-child)_td]:border-b">
        <TableHeader>
          <TableRow className="text-left">
   
            <TableHead className="h-9 py-3">Symbol</TableHead>
            <TableHead className="h-9 py-3">Direction</TableHead>
            <TableHead className="h-9 py-3">Entry Date</TableHead>
            <TableHead className="h-9 py-3">Entry Time</TableHead>
            <TableHead className="h-9 py-3">Entry Price</TableHead>
            <TableHead className="h-9 py-3">Quantity</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    </div>
    
    {/* Scrollable Body */}
    <div className="overflow-y-auto scrollbar-hide max-h-69">
      <Table className="[&_td]:border-border [&_th]:border-border border-separate border-spacing-0 [&_tfoot_td]:border-t [&_tr]:border-none [&_tr:not(:last-child)_td]:border-b">
        <TableBody>
      
          {DataToShow.map((trade) => (
            <TableRow key={trade.id} >
              <TableCell className="py-3 font-medium">
                {trade.symbol}
              </TableCell>
              <TableCell className="py-3">{trade.direction}</TableCell>
              <TableCell className="py-3">{getIndianDate(trade.entryDate)}</TableCell>
              <TableCell className="py-3">{getIndianTime(trade.entryDate)}</TableCell>
              <TableCell className="py-3">{trade.entryPrice}</TableCell>
              <TableCell className="py-3">{trade.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </div>
</div>




  )
}
