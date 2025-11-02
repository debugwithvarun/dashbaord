"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../components/ui/table";

import { Input } from "../../../components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../components/ui/select";
import { Trash2, Plus, ChevronUp, ChevronDown, Minus } from "lucide-react";
import { Textarea } from "../../ui/textarea";

interface TradeFormData {
    stockName: string;
    symbol: string;
    type: string;
    buyPrice: string;
    sellPrice: string;
    buyDate: string;
    sellDate: string;
    quantity: string;
    notes: string

}

interface ManualBoxProps {
    trades: TradeFormData[];
    onRemoveRow: (index: number) => void;
    onChange: (index: number, field: keyof TradeFormData, value: string) => void;
}

// Price Input Component
const PriceInput = ({
    value,
    onChange,
    placeholder = "0.00",
}: {
    value: string;
    onChange: (val: string) => void;
    placeholder?: string;
}) => {
    const numValue = parseFloat(value) || 0;

    const increment = () => {
        onChange((numValue + 0.05).toFixed(2));
    };

    const decrement = () => {
        onChange(Math.max(0, numValue - 0.05).toFixed(2));
    };

    return (
        <div className="relative group flex items-center w-full gap-0">
            <Input
                type="number"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                step="0.05"
                min="0"
                className="flex-1 text-sm h-9 w-22 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <div className="absolute right-0 top-0 h-full flex flex-col gap-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-auto">
                <button
                    onClick={increment}
                    type="button"
                    className="flex-1 px-1.5 flex items-center justify-center hover:bg-accent transition-colors border border-l-0 border-input rounded-tr-md"
                    title="Increase"
                >
                    <ChevronUp className="w-3 h-3" />
                </button>
                <button
                    onClick={decrement}
                    type="button"
                    className="flex-1 px-1.5 flex items-center justify-center hover:bg-accent transition-colors border border-l-0 border-input rounded-br-md"
                    title="Decrease"
                >
                    <ChevronDown className="w-3 h-3" />
                </button>
            </div>
        </div>
    );
};

// Quantity Input Component
const QuantityInput = ({
    value,
    onChange,
}: {
    value: string;
    onChange: (val: string) => void;
}) => {
    const numValue = parseInt(value) || 1;

    const increment = () => {
        onChange(String(numValue + 1));
    };

    const decrement = () => {
        onChange(String(Math.max(1, numValue - 1)));
    };

    return (
        <div className="flex items-center gap-0 border border-input rounded-md h-9 w-full ">
            <button
                onClick={decrement}
                type="button"
                className="flex-shrink-0 w-8 flex items-center justify-center hover:bg-accent transition-colors border-r border-input rounded-l-md"
                title="Decrease quantity"
            >
                <Minus className="w-3 h-3" />
            </button>
            <Input
                type="number"
                placeholder="1"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                step="1"
                min="1"
                className="flex-1 border-0 text-center text-sm min-w-9 h-full focus-visible:ring-0 p-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <button
                onClick={increment}
                type="button"
                className="flex-shrink-0 w-8 flex items-center justify-center hover:bg-accent transition-colors border-l border-input rounded-r-md"
                title="Increase quantity"
            >
                <Plus className="w-3 h-3" />
            </button>
        </div>
    );
};

export default function ManualBox({
    trades,

    onRemoveRow,
    onChange,
}: ManualBoxProps) {
    return (
        <div className="w-full flex flex-col h-full">


            {/* DESKTOP TABLE VIEW - Hidden on mobile */}
            <div className="hidden lg:block w-full flex-1 ">
                <div className="max-w-fit p-4 py-2">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-muted/50 hover:bg-muted/50 sticky top-0 z-10 ">
                                <TableHead className="w-16 text-center">Action</TableHead>

                                <TableHead className="w-20">Symbol</TableHead>
                                <TableHead className="w-16 text-center">Type</TableHead>
                                <TableHead className="w-24">Date</TableHead>
                                <TableHead className="w-24">Price</TableHead>
                                <TableHead className="w-24">Quantity</TableHead>
                                <TableHead className="min-w-48 ">Notes</TableHead>

                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {trades.map((trade, index) => (
                                <TableRow key={index} className="hover:bg-muted/30 ">
                                    <TableCell className="text-center">
                                        <button
                                            onClick={() => onRemoveRow(index)}
                                            disabled={trades.length === 1}
                                            className="p-1 hover:bg-destructive/10 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                            title="Delete trade"
                                            type="button"
                                        >
                                            <Trash2 className="w-4 h-4 text-destructive" />
                                        </button>
                                    </TableCell>


                                    {/* symbol  */}
                                    <TableCell>
                                        <Input
                                            placeholder="e.g., RIL"
                                            value={trade.symbol}
                                            onChange={(e) => onChange(index, "symbol", e.target.value.toUpperCase())}
                                            className="text-sm h-9"
                                        />
                                    </TableCell>

                                    {/* type  */}
                                    <TableCell className="text-center">
                                        <Select
                                            value={trade.type}
                                            onValueChange={(value) => onChange(index, "type", value)}
                                        >
                                            <SelectTrigger className="text-sm h-9">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="BUY">Buy</SelectItem>
                                                <SelectItem value="SELL">Sell</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </TableCell>

                                    {/* Date  */}
                                    <TableCell>
                                       <div className="w-full flex gap-2 flex-col">
                                       <Input
                                            type="datetime-local"
                                            value={trade.buyDate}
                                            onChange={(e) => onChange(index, "buyDate", e.target.value)}
                                            className="text-sm h-9"
                                        />
                                        <Input
                                            type="datetime-local"
                                            value={trade.sellDate}
                                            onChange={(e) => onChange(index, "sellDate", e.target.value)}
                                            className="text-sm h-9 "
                                        />
                                       </div>
                                    </TableCell>

                                   

                                    {/* Price  */}
                                    <TableCell>
                                    <div className="flex w-full flex-col gap-2">
                                    <PriceInput
                                            value={trade.buyPrice}
                                            onChange={(val) => onChange(index, "buyPrice", val)}
                                            placeholder="0.00"
                                        />
                                        <PriceInput
                                            value={trade.sellPrice}
                                            onChange={(val) => onChange(index, "sellPrice", val)}
                                            placeholder="0.00"
                                        />
                                    </div>
                                    </TableCell>

                                 


                                    {/* quantity  */}
                                    <TableCell>
                                        <QuantityInput
                                            value={trade.quantity}
                                            onChange={(val) => onChange(index, "quantity", val)}
                                        />
                                    </TableCell>

                                    {/* Notes */}
                                    <TableCell>
                                        <Textarea
                                            id={index.toString()}
                                            className="[resize:none]  scrollbar-none"
                                            placeholder="Enter a Notes"
                                            value={trade.notes}
                                            onChange={(e) => onChange(index, "notes", e.target.value)}
                                        />
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* MOBILE CARD VIEW - Shown on mobile/tablet */}
            <div className="lg:hidden flex-1 overflow-auto p-4 space-y-4">
                {trades.map((trade, index) => (
                    <div
                        key={index}
                        className="bg-card border border-border rounded-lg p-4 space-y-3 shadow-sm"
                    >
                        {/* Card Header */}
                        <div className="flex justify-between items-start mb-3 pb-3 border-b border-border">
                            <div className="flex-1">
                                <h3 className="font-semibold text-foreground">
                                    {trade.stockName || `Trade #${index + 1}`}
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                    {trade.symbol && `${trade.symbol} • `}

                                </p>
                            </div>
                            <button
                                onClick={() => onRemoveRow(index)}
                                disabled={trades.length === 1}
                                className="p-2 hover:bg-destructive/10 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                title="Delete trade"
                                type="button"
                            >
                                <Trash2 className="w-4 h-4 text-destructive" />
                            </button>
                        </div>

                        {/* Form Fields */}
                        <div className="grid grid-cols-2 gap-3">


                            {/* Symbol */}
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-muted-foreground">
                                    Symbol
                                </label>
                                <Input
                                    placeholder="e.g., RIL"
                                    value={trade.symbol}
                                    onChange={(e) => onChange(index, "symbol", e.target.value.toUpperCase())}
                                    className="text-sm h-9"
                                />
                            </div>

                            {/* Type */}
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-muted-foreground">
                                    Type
                                </label>
                                <Select
                                    value={trade.type}
                                    onValueChange={(value) => onChange(index, "type", value)}
                                >
                                    <SelectTrigger className="text-sm h-9">
                                        <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="BUY">Buy</SelectItem>
                                        <SelectItem value="SELL">Sell</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Buy Date */}
                            <div className="space-y-1 ">
                                <label className="text-xs font-medium text-muted-foreground">
                                    Buy Date
                                </label>
                                <Input
                                    type="datetime-local"
                                    value={trade.buyDate}
                                    onChange={(e) => onChange(index, "buyDate", e.target.value)}
                                    className="text-sm h-9"
                                />
                            </div>

                            {/* Sell Date */}
                            <div className="space-y-1 ">
                                <label className="text-xs font-medium text-muted-foreground">
                                    Sell Date
                                </label>
                                <Input
                                    type="datetime-local"
                                    value={trade.sellDate}
                                    onChange={(e) => onChange(index, "sellDate", e.target.value)}
                                    className="text-sm h-9"
                                />
                            </div>

                            {/* Buy Price */}
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-muted-foreground">
                                    Buy Price
                                </label>
                                <PriceInput
                                    value={trade.buyPrice}
                                    onChange={(val) => onChange(index, "buyPrice", val)}
                                    placeholder="0.00"
                                />
                            </div>

                            {/* Sell Price */}
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-muted-foreground">
                                    Sell Price
                                </label>
                                <PriceInput
                                    value={trade.sellPrice}
                                    onChange={(val) => onChange(index, "sellPrice", val)}
                                    placeholder="0.00"
                                />
                            </div>

                            {/* Quantity */}
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-muted-foreground">
                                    Quantity
                                </label>
                                <QuantityInput
                                    value={trade.quantity}
                                    onChange={(val) => onChange(index, "quantity", val)}
                                />
                            </div>

                            {/* Notes */}
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-muted-foreground">
                                    Notes
                                </label>
                                <Textarea
                                    id={index.toString()}
                                    className="[resize:none] min-h-16 scrollbar-none"
                                    placeholder="Enter a Notes"
                                    value={trade.notes}
                                    onChange={(e) => onChange(index, "notes", e.target.value)}
                                />
                            </div>






                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
