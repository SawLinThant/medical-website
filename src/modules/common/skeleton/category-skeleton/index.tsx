import { Skeleton } from "@/components/ui/skeleton"

export function CategorySkeleton() {
  return (
    <div className="w-full h-full flex-row justify-start">
      <div className="flex flex-row gap-4">
        <Skeleton className="h-[150px] w-[110px] bg-secondary_color/35" />
        <Skeleton className="h-[150px] w-[110px] bg-secondary_color/35" />
        <Skeleton className="h-[150px] w-[110px] bg-secondary_color/35" />
        <Skeleton className="h-[150px] w-[110px] bg-secondary_color/35" />
      </div>
    </div>
  )
}
