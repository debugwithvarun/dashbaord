import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../components/ui/table";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../components/ui/select";

import { Trash2, Plus } from "lucide-react";


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


interface ManualBoxProps {
    trades: TradeFormData[];
    onAddRow: () => void;
    onRemoveRow: (index: number) => void;
    onChange: (index: number, field: keyof TradeFormData, value: string) => void;
}


export default function ManualBox({
    trades,
    onAddRow,
    onRemoveRow,
    onChange,
}: ManualBoxProps) {
    return (
        <div className="w-full flex flex-col">
            {/* HEADER - Fixed */}
            <div className="flex justify-between items-center bg-background px-6 py-3 border-b sticky z-30 top-0 border-border">
                <div>
                    <h2 className="text-xl font-semibold text-foreground">Manual Trade Entry</h2>
                    <p className="text-sm text-muted-foreground">Enter your trades in the table below</p>
                </div>
                <Button onClick={onAddRow} variant="default" size="sm" className="gap-2">
                    <Plus className="w-4 h-4" />
                    Add Trade
                </Button>
            </div>

            {/* TABLE with ScrollArea - Horizontal & Vertical Scrolling */}
            <div className="w-full flex-1 overflow-auto">
   
                    <div className="min-w-[1300px] p-6">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-card hover:bg-card sticky top-0 z-10">
                                    <TableHead className="w-16 text-center">Action</TableHead>
                                    <TableHead className="w-32">Stock Name</TableHead>
                                    <TableHead className="w-20">Symbol</TableHead>
                                    <TableHead className="w-16 text-center">Type</TableHead>
                                    <TableHead className="w-20 text-right">Buy Price</TableHead>
                                    <TableHead className="w-20 text-right">Sell Price</TableHead>
                                    <TableHead className="w-28">Buy Date</TableHead>
                                    <TableHead className="w-28">Sell Date</TableHead>
                                    <TableHead className="w-16 text-right">Qty</TableHead>
                                    <TableHead className="w-24">Broker</TableHead>
                                    <TableHead className="w-20">Trade Type</TableHead>
                                    <TableHead className="w-16">Exchange</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {trades.map((trade, index) => (
                                    <TableRow key={index} className="hover:bg-card/50">
                                        <TableCell className="text-center">
                                            <button
                                                onClick={() => onRemoveRow(index)}
                                                disabled={trades.length === 1}
                                                className="p-1 hover:bg-destructive/10 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                                title="Delete trade"
                                            >
                                                <Trash2 className="w-4 h-4 text-destructive" />
                                            </button>
                                        </TableCell>

                                        <TableCell>
                                            <Input
                                                placeholder="e.g., Reliance"
                                                value={trade.stockName}
                                                onChange={(e) => onChange(index, "stockName", e.target.value)}
                                                className="min-w-20 text-sm h-8"
                                            />
                                        </TableCell>

                                        <TableCell>
                                            <Input
                                                placeholder="e.g., RIL"
                                                value={trade.symbol}
                                                onChange={(e) => onChange(index, "symbol", e.target.value.toUpperCase())}
                                                className="w-full text-sm h-8"
                                            />
                                        </TableCell>

                                        <TableCell className="text-center">
                                            <Select
                                                value={trade.type}
                                                onValueChange={(value) => onChange(index, "type", value)}
                                            >
                                                <SelectTrigger className="w-full text-sm h-8">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="BUY">Buy</SelectItem>
                                                    <SelectItem value="SELL">Sell</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </TableCell>

                                        <TableCell className="text-right">
                                            <Input
                                                type="number"
                                                placeholder="0.00"
                                                value={trade.buyPrice}
                                                onChange={(e) => onChange(index, "buyPrice", e.target.value)}
                                                className="min-w-20 text-sm h-8 text-right"
                                            />
                                        </TableCell>

                                        <TableCell className="text-right">
                                            <Input
                                                type="number"
                                                placeholder="0.00"
                                                value={trade.sellPrice}
                                                onChange={(e) => onChange(index, "sellPrice", e.target.value)}
                                                className="min-w-20 text-sm h-8 text-right"
                                            />
                                        </TableCell>

                                        <TableCell>
                                            <Input
                                                type="datetime-local"
                                                value={trade.buyDate}
                                                onChange={(e) => onChange(index, "buyDate", e.target.value)}
                                                className="w-full text-sm h-8"
                                            />
                                        </TableCell>

                                        <TableCell>
                                            <Input
                                                type="datetime-local"
                                                value={trade.sellDate}
                                                onChange={(e) => onChange(index, "sellDate", e.target.value)}
                                                className="w-full text-sm h-8"
                                            />
                                        </TableCell>

                                        <TableCell className="text-right">
                                            <Input
                                                type="number"
                                                placeholder="1"
                                                value={trade.quantity}
                                                onChange={(e) => onChange(index, "quantity", e.target.value)}
                                                className="min-w-20 text-sm h-8 text-right"
                                            />
                                        </TableCell>

                                        <TableCell>
                                            <Select
                                                value={trade.brokerName}
                                                onValueChange={(value) => onChange(index, "brokerName", value)}
                                            >
                                                <SelectTrigger className="w-full text-sm h-8">
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="zerodha">Zerodha</SelectItem>
                                                    <SelectItem value="groww">Groww</SelectItem>
                                                    <SelectItem value="upstox">Upstox</SelectItem>
                                                    <SelectItem value="angelbroking">Angel Broking</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </TableCell>

                                        <TableCell>
                                            <Select
                                                value={trade.tradetype}
                                                onValueChange={(value) => onChange(index, "tradetype", value)}
                                            >
                                                <SelectTrigger className="w-full text-sm h-8">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="equity">Equity</SelectItem>
                                                    <SelectItem value="fno">F&O</SelectItem>
                                                    <SelectItem value="crypto">Crypto</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </TableCell>

                                        <TableCell>
                                            <Select
                                                value={trade.exchange}
                                                onValueChange={(value) => onChange(index, "exchange", value)}
                                            >
                                                <SelectTrigger className="w-full text-sm h-8">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="NSE">NSE</SelectItem>
                                                    <SelectItem value="BSE">BSE</SelectItem>
                                                    <SelectItem value="MCX">MCX</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
              
            </div>
        </div>
    );
}
