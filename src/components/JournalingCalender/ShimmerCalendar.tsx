import { Skeleton } from "../../components/ui/skeleton"

export function ShimmerCalendar() {
  return (
    <div className="flex flex-col gap-4 p-4  rounded-xl bg-card min-h-[350px]">
      <Skeleton className="h-12 w-full" />
      
      {/* Day labels */}
      <div className="grid grid-cols-7 gap-1">
        {Array(7).fill(0).map((_, i) => (
          <Skeleton key={`label-${i}`} className="h-6 w-full" />
        ))}
      </div>

      {/* Calendar days (5 weeks) */}
      <div className="grid grid-cols-7 gap-1">
        {Array(35).fill(0).map((_, i) => (
          <Skeleton key={`day-${i}`} className="aspect-square min-h-[40px] w-full" />
        ))}
      </div>
    </div>
  )
}
