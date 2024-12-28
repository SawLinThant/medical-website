import { Skeleton } from "@/components/ui/skeleton"

const ProductDetailSkeleton = () => {
    return(
        <section className="w-full h-full flex flex-col items-center">
            <div className="w-full max-w-[1300px] py-8 flex flex-col gap-4 items-center justify-center">
                <div className="w-full grid lg:gap-4 lg:grid-cols-5 md:grid-cols-5 grid-cols-1">
                    <div className="col-span-2 flex flex-col gap-0 w-full md:max-h-[27rem] lg:max-h-[30rem]">
                        <Skeleton className="w-full h-[25rem] bg-secondary_color/35"/>
                    </div>
                    <div className="col-span-3 lg:p-4 md:p-3 py-3 px-0 lg:min-h-[35rem] flex flex-col gap-6">
                        <Skeleton className="w-[120px] h-5 bg-secondary_color/35"/>
                        <Skeleton className="w-[160px] h-5 bg-secondary_color/35"/>
                        <Skeleton className="w-[120px] h-8 bg-secondary_color/35"/>
                        <Skeleton className="w-full h-16 bg-secondary_color/35"/>
                        <Skeleton className="w-full h-[15rem] bg-secondary_color/35"/>
                        <Skeleton className="w-[130px] h-[5rem] bg-secondary_color/35"/>
                    </div>
                </div>
                <div className="w-full flex flex-col mt-5 gap-4">
                <Skeleton className="w-[120px] h-[2rem] bg-secondary_color/35"/>
                <Skeleton className="w-full h-[5rem] bg-secondary_color/35"/>
                </div>
            </div>
        </section>
    )
}
export default ProductDetailSkeleton