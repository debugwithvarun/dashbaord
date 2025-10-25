import { Skeleton } from "../../components/ui/skeleton"

interface ShimmerCardProps {
  type?: "metric" | "chart"
}

export function ShimmerCard({ type = "metric" }: ShimmerCardProps) {
  return (
    <div className={`flex flex-col gap-3 rounded-xl bg-card ${
      type === "metric" ? "min-h-[120px]" : "min-h-[300px] h-full"
    }`}>
      <Skeleton className={`w-full rounded-lg ${
        type === "metric" ? "h-[80px]" : "flex-1 min-h-[200px]"
      }`} />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  )
}
