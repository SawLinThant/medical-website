"use client"

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import ProductCard from "@/modules/common/product-card";
import { ChevronRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Product } from "@/lib/apolloClient/services/product";
import { useRouter } from "next/navigation";

interface BestSellerProps {
    products: Product[] | null
}

export function BestSeller({products}:BestSellerProps) {
    const [productList,setProductList] = React.useState<Product[] | null>(null);
    const router = useRouter()
    React.useEffect(() => {
        if(products){
            setProductList(products)
        }
    },[setProductList])
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="w-full min-h-16 flex flex-row lg:items-center md:items-center items-start justify-between">
        <div className="w-full flex lg:flex-row md:flex-row flex-col items-start gap-4 lg:items-center md:items-center justify-between">
          <div className="w-full flex flex-row items-center justify-between gap-4">
            <h1 className="font-semibold text-lg">Best Seller</h1>
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
