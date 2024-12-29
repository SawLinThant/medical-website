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
import { ChevronRight } from "lucide-react";
import { Product } from "@/lib/types/global";
import { Skeleton } from "@/components/ui/skeleton";
import ProductCard from "../related-prduct-card";

interface BestSellerProps {
    products: Product[] | null
}

export function ProductReel({products}:BestSellerProps) {
    const [productList,setProductList] = React.useState<Product[] | null>(null)
    React.useEffect(() => {
        if(products){
            setProductList(products)
        }
    },[setProductList])
  return (
    <Carousel className="w-full h-full flex flex-col gap-4">
      <div className="w-full min-h-16 flex flex-row items-center justify-between">
        <div className="flex flex-row gap-4 items-center">
          <h1 className="font-semibold text-xl">Related products</h1>
          {/* <span className="text-sm text-secondary_color mt-1 flex flex-row items-center">All Products <ChevronRight size={15}/></span> */}
        </div>
        <div className="flex flex-row gap-2 h-full items-center">
          <div className="">
            <CarouselPrevious className="bg-gray-300 rounded-md hover:bg-gray-400 transition"></CarouselPrevious>
          </div>
          <div className="">
            <CarouselNext
              className={cn(
                " bg-gray-300 rounded-md hover:bg-gray-400 transition",
                {}
              )}
            />
          </div>
        </div>
      </div>
         {productList ? (
        <CarouselContent className="w-full h-full">
          {productList.map((product, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-[20%] basis-1/2">
              <div className="">
                <ProductCard product={product} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      ) : (
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-[20%]">
              <div className="p-2">
                <Skeleton className="bg-secondary_color/35 h-[21.8rem] w-full" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      )}
    </Carousel>
  );
}
