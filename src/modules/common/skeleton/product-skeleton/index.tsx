import { Skeleton } from "@/components/ui/skeleton"

export function ProductSkeleton() {
  return (
    <div className="w-full h-full flex-row justify-start">
      <div className="flex flex-row gap-4 justify-center">
        <Skeleton className="h-[300px] lg:w-[230px] md:w-[230px] w-5/6 bg-secondary_color/35" />
        <Skeleton className="h-[300px] w-[230px] bg-secondary_color/35 lg:block md:block hidden" />
        <Skeleton className="h-[300px] w-[230px] bg-secondary_color/35  lg:block md:block hidden" />
        <Skeleton className="h-[300px] w-[230px] bg-secondary_color/35  lg:block md:hidden hidden" />
      </div>
    </div>
  )
}
