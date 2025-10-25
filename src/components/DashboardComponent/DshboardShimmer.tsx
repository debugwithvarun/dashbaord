import { ShimmerCard } from "./ShimmerCard"

const DashboardShimmer = () => {
  return (
    <div className="w-full flex flex-col gap-4 max-w-[1400px] mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <ShimmerCard type="metric" />
        <ShimmerCard type="metric" />
        <ShimmerCard type="metric" />
        <ShimmerCard type="metric" />
        <ShimmerCard type="metric" />
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ShimmerCard type="chart" />
        <ShimmerCard type="chart" />
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ShimmerCard type="chart" />
        <ShimmerCard type="chart" />
      </div>
    </div>
  )
}

export default DashboardShimmer
