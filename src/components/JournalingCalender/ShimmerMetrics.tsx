import { Skeleton } from "../../components/ui/skeleton"

export function ShimmerMetrics() {
  return (
    <div className="flex flex-col gap-4 p-4  rounded-xl bg-card min-h-[180px]">
      <Skeleton className="h-3.5 w-28" />
      <div className="grid grid-cols-2 gap-3">
        <Skeleton className="h-[70px] w-full rounded-lg" />
        <Skeleton className="h-[70px] w-full rounded-lg" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Skeleton className="h-[70px] w-full rounded-lg" />
        <Skeleton className="h-[70px] w-full rounded-lg" />
      </div>
    </div>
  )
}
