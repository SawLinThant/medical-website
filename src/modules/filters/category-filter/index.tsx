"use client"

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { CategoryImage } from "@/lib/types/global";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";

interface CategoryProps {
  category: CategoryImage[];
  
}

export function BrowseByCategory(category: CategoryProps) {
  const router = useRouter()
  return (
    <Carousel className="w-full h-full flex flex-col gap-4">
      <div className="w-full min-h-16 flex flex-row items-center justify-between">
        <div className="flex flex-row gap-4 items-center">
          <h1 className="font-semibold text-lg">Browse By Category</h1>
          <span className="text-sm text-secondary_color mt-1 flex flex-row items-center">
            All Categories <ChevronRight size={15} />
          </span>
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
      {category ? (
        <CarouselContent className="w-full h-full">
          {category.category.map((category, index) => (
            <CarouselItem
              key={index}
              onClick={() =>router.push(`/product/list?category=${category.id}`) }
              className="md:basis-[20%] lg:basis-[12.5%] basis-1/2"
            >
              <div className="p-3">
                <div className=" h-[13rem] hover:scale-105 hover:shadow-md hover:bg-white transition-all border rounded-md bg-slate-200 p-3 hover:cursor-pointer flex flex-col items-center justify-center gap-3">
                  <div className="w-full relative h-[7rem]">
                    <Image
                      layout="fill"
                      src={category.image_url}
                      alt="category"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm w-full text-center">
                    {category.name}
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      ) : (
        <CarouselContent className="w-full h-full">
      {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-[20%] lg:basis-[12.5%] basis-1/2">
              <div className="p-2">
                <Skeleton className="bg-secondary_color/35 h-[13rem] w-full" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      )}
    </Carousel>
  );
}
