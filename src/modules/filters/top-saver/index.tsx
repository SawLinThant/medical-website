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
import { ChevronRight, Hourglass } from "lucide-react";
import { Product } from "@/lib/types/global";

interface TopSaverProps {
    products: Product[] | null
}

export function TopSaver({products}:TopSaverProps) {
   const [productList,setProductList] = React.useState<Product[] | null>(null)
      React.useEffect(() => {
          if(products){
              setProductList(products)
          }
      },[setProductList])
  return (
    <Carousel className="w-full h-full flex flex-col gap-4">
      <div className="w-full min-h-16 flex flex-row lg:items-center md:items-center items-start justify-between">
        <div className="flex lg:flex-row md:flex-row flex-col items-start gap-4 lg:items-center md:items-center">
          <div className="flex flex-row items-center gap-4">
            <h1 className="font-semibold text-lg">Top Saver Today</h1>
            <span className="text-sm text-secondary_color mt-1 flex flex-row items-center">
              All Offers <ChevronRight size={15} />
            </span>
          </div>
          <div className="min-w-32 rounded-md bg-secondary_color text-white text-sm flex flex-row items-center font-extralight gap-3 py-2 px-3 lg:ml-4 md:ml-4 ml-0">
            <Hourglass size={15} />
            <span>Sale ends in 01:20:00</span>
          </div>
        </div>
        <div className="flex flex-row gap-2 h-full lg:items-center md:items-center items-start">
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
      <CarouselContent className="w-full h-full">
        {productList && productList.map((product, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-[25%]">
            <div className="">
              <ProductCard product={product} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
