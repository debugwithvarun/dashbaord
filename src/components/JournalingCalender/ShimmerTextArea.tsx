import { Skeleton } from "../../components/ui/skeleton"



export function ShimmerTextArea() {
  return (
    <div className="flex flex-col gap-3 p-4  rounded-xl bg-card min-h-[120px]">
      <Skeleton className="h-3.5 w-36" />
      <Skeleton className="flex-1 min-h-[80px] w-full rounded-lg" />
    </div>
  )
}
