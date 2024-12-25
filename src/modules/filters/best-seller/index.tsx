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
import { Product } from "@/lib/types/global";

interface BestSellerProps {
    products: Product[] | null
}

export function BestSeller({products}:BestSellerProps) {
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
          <h1 className="font-semibold text-lg">Best Sellers</h1>
          <span className="text-sm text-secondary_color mt-1 flex flex-row items-center">All Products <ChevronRight size={15}/></span>
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
      <CarouselContent className="w-full h-full">
        {productList && productList.map((product, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-[20%]">
            <div className="p-1">
                <ProductCard product={product}/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
