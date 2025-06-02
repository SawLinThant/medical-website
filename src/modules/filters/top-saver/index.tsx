// "use client";

// import * as React from "react";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { cn, removeOrderSuccessData } from "@/lib/utils";
// import ProductCard from "@/modules/common/product-card";
// import { ChevronRight, Hourglass } from "lucide-react";
// import { Skeleton } from "@/components/ui/skeleton";
// import { Product } from "@/lib/apolloClient/services/product";
// import { useRouter } from "next/navigation";

// interface TopSaverProps {
//   products: Product[] | null;
// }

// export function TopSaver({ products }: TopSaverProps) {
//   const [productList, setProductList] = React.useState<Product[] | null>(null);
//   const router = useRouter()
//   React.useEffect(() => {
//     if (products) {
//       setProductList(products);
//     }
//   }, [setProductList]);
//     React.useEffect(() => {
//       removeOrderSuccessData()
//     },[])
//   return (
//     <Carousel className="w-full h-full flex flex-col gap-4">
//       <div className="w-full min-h-16 flex flex-row lg:items-center md:items-center items-start justify-between">
//         <div className="flex lg:flex-row md:flex-row flex-col items-start gap-4 lg:items-center md:items-center">
//           <div className="flex flex-row items-center gap-4">
//             <h1 className="font-semibold text-lg">Top Saver Today</h1>
//             <span onClick={() => router.push("/product/list")} className="text-sm text-secondary_color mt-1 flex flex-row items-center hover:cursor-pointer">
//               All Products <ChevronRight size={15} />
//             </span>
//           </div>
//         </div>
//         <div className="flex flex-row gap-2 h-full lg:items-center md:items-center items-start">
//           <div className="">
//             <CarouselPrevious className="bg-gray-300 rounded-md hover:bg-gray-400 transition"></CarouselPrevious>
//           </div>
//           <div className="">
//             <CarouselNext
//               className={cn(
//                 " bg-gray-300 rounded-md hover:bg-gray-400 transition",
//                 {}
//               )}
//             />
//           </div>
//         </div>
//       </div>
//       {productList ? (
//         <CarouselContent className="w-full h-full">
//           {productList.map((product, index) => (
//             <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5 basis-1/2">
//               <div className="">
//                 <ProductCard product={product} />
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//       ) : (
//         <CarouselContent>
//           {Array.from({ length: 5 }).map((_, index) => (
//             <CarouselItem key={index} className="md:basis-1/3 lg:basis-[25%]">
//               <div className="p-2">
//                 <Skeleton className="bg-secondary_color/35 h-[21.8rem] w-full" />
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//       )}
//     </Carousel>
//   );
// }

"use client";

import * as React from "react";
import { ChevronRight } from "lucide-react";
import ProductCard from "@/modules/common/product-card";
import { Skeleton } from "@/components/ui/skeleton";
import { Product } from "@/lib/apolloClient/services/product";
import { useRouter } from "next/navigation";
import { removeOrderSuccessData } from "@/lib/utils";

interface TopSaverProps {
  products: Product[] | null;
}

export function TopSaver({ products }: TopSaverProps) {
  const [productList, setProductList] = React.useState<Product[] | null>(null);
  const router = useRouter();

  React.useEffect(() => {
    if (products) setProductList(products);
  }, [products]);

  React.useEffect(() => {
    removeOrderSuccessData();
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="w-full min-h-16 flex flex-row lg:items-center md:items-center items-start justify-between">
        <div className="w-full flex lg:flex-row md:flex-row flex-col items-start gap-4 lg:items-center md:items-center justify-between">
          <div className="flex flex-row items-center gap-4 w-full justify-between">
            <h1 className="font-semibold text-lg">Top Saver Today</h1>
            <span
              onClick={() => router.push("/product/list")}
              className="text-sm text-secondary_color mt-1 flex flex-row items-center hover:cursor-pointer"
            >
              All Products <ChevronRight size={15} />
            </span>
          </div>
        </div>
      </div>

      {/* Scrollable Product List */}
      <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="flex gap-4 px-1">
          {(productList ?? Array.from({ length: 5 })).map((product, index) => (
            <div
              key={index}
              className="w-72 min-w-[13rem] flex-shrink-0"
            >
              {product ? (
                <ProductCard product={product} />
              ) : (
                <Skeleton className="bg-secondary_color/35 h-[21.8rem] w-full" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

