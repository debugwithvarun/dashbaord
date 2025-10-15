import { useEffect, useState } from "react"
import { format } from "date-fns"
import type { DayButtonProps } from "react-day-picker"

import { cn } from "../../lib/utils"
import { Calendar } from "../../components/ui/calendar"
import DiagnolBox from "../charts/DiagnolBox"

const GOOD_PRICE_THRESHOLD = 100

export default function Component() {
  const today = new Date()
  // Reset time to start of day for accurate comparison
  today.setHours(0, 0, 0, 0)
  
  const [date, setDate] = useState<Date | undefined>(today)

  // Mock price data
  const [mockPriceData, setMockPriceData] = useState<Record<string, number>>({})
  
  useEffect(() => {
    const generateMockPriceData = () => {
      const data: Record<string, number> = {}

      for (let i = 0; i < 180; i++) {
        const date = new Date(today)
        date.setDate(today.getDate() + i)
        const dateKey = format(date, "yyyy-MM-dd")
        const randomPrice = Math.floor(Math.random() * (200 - 80 + 1)) + 80
        data[dateKey] = randomPrice
      }
      return data
    }
    setMockPriceData(generateMockPriceData())
  }, [])

  const isDateDisabled = (date: Date) => {
    // Reset time to start of day for accurate comparison
    const dateToCheck = new Date(date)
    dateToCheck.setHours(0, 0, 0, 0)
    
    // Disable if date is before today OR if no price data exists
    return dateToCheck < today || !mockPriceData[format(date, "yyyy-MM-dd")]
  }

  return (
    <div className="w-full min-w-0" style={{ width: '-webkit-fill-available' }}>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        numberOfMonths={2}
        pagedNavigation
        showOutsideDays={true}
        fixedWeeks
        className="w-full max-w-none rounded-md border p-2 flex"
        style={{ width: '-webkit-fill-available' }}
        classNames={{
          months: "flex flex-col lg:flex-row gap-2 sm:gap-4 lg:gap-8 w-full justify-center",
          month: "flex-1 min-w-0 space-y-2 sm:space-y-4",
          month_caption: "flex justify-center pt-1 relative items-center text-sm sm:text-base",
          month_grid: "w-full border-collapse space-y-1",
          weekdays: "flex w-full",
          weekday: "text-muted-foreground rounded-md flex-1 text-[0.7rem] sm:text-[0.8rem] font-normal text-center p-1 sm:p-2",
          week: "flex w-full mt-1 sm:mt-2 flex-1 w-full",
          day: "relative h-10 sm:h-12 p-0 text-center text-xs sm:text-sm focus-within:relative focus-within:z-20 flex-1",
          day_button: "h-10 sm:h-12 w-full p-0.5 sm:p-1 flex-1 font-normal aria-selected:opacity-100 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          today: "*:after:hidden",
          disabled: "opacity-50 cursor-not-allowed",
          selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
          outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
          range_end: "day-range-end",
          range_start: "day-range-start",
          range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
          hidden: "invisible",
        }}
        components={{
          DayButton: (props: DayButtonProps) => (
            <DayButton {...props} prices={mockPriceData} />
          ),
        }}
        disabled={isDateDisabled}
        fromDate={today} // Additional prop to prevent navigation to past months
      />
      
      <style>{`
        .rdp {
          width: -webkit-fill-available !important;
          width: -moz-available !important;
          width: fill-available !important;
        }
        
        .rdp-month_grid {
          width: -webkit-fill-available !important;
          width: -moz-available !important;
          width: fill-available !important;
        }
        
        .rdp-week {
          width: -webkit-fill-available !important;
          width: -moz-available !important;  
          width: fill-available !important;
        }
        
        .rdp-day {
          flex: 1 !important;
          min-width: 0 !important;
          width: -webkit-fill-available !important;
          width: -moz-available !important;
          width: fill-available !important;
        }
        
        .rdp-weekdays {
          width: -webkit-fill-available !important;
          width: -moz-available !important;
          width: fill-available !important;
        }
        
        .rdp-weekday {
          flex: 1 !important;
          min-width: 0 !important;
        }
        
        @media (max-width: 640px) {
          .rdp-months {
            gap: 0.5rem !important;
          }
          
          .rdp-month {
            space-y: 0.5rem !important;
          }
          
          .rdp-day_button {
            font-size: 0.75rem !important;
            height: 2.5rem !important;
          }
        }
        
        @media (min-width: 1024px) {
          .rdp-months {
            flex-direction: row !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </div>
  )
}

function DayButton(props: DayButtonProps & { prices: Record<string, number> }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { day, modifiers, prices, onClick, ...buttonProps } = props
  const price = prices[format(day.date, "yyyy-MM-dd")]
  const isGoodPrice = price < GOOD_PRICE_THRESHOLD
  const isDisabled = modifiers.disabled

  return (
    <DiagnolBox
    trigger={
      <button 
      {...buttonProps}
      className={cn(
        "h-10 sm:h-12 w-full p-0.5 sm:p-1 font-normal text-xs sm:text-sm flex items-center justify-center",
        "aria-selected:opacity-100 hover:bg-accent hover:text-accent-foreground",
        "focus:bg-accent focus:text-accent-foreground rounded-md transition-colors",
        "min-w-0", // Ensure button can shrink
        modifiers.selected && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
        isDisabled && "opacity-50 cursor-not-allowed hover:bg-transparent"
      )}
      style={{ 
        width: '-webkit-fill-available',
        minWidth: 0,
        flex: 1 
      }}
    >
      <span className="flex flex-col items-center justify-center gap-0.5 sm:gap-1 w-full min-w-0">
        <span className="text-xs sm:text-sm leading-none">{props.children}</span>
        {price && (
          <span
            className={cn(
              "text-[8px] sm:text-[10px] font-medium leading-none whitespace-nowrap",
              isDisabled 
                ? "text-muted-foreground/50"
                : isGoodPrice
                ? "text-emerald-500"
                : modifiers.selected
                ? "text-primary-foreground/80"
                : "text-muted-foreground"
            )}
          >
            ${price}
          </span>
        )}
      </span>
    </button>
    }/>

   
 
  )
}