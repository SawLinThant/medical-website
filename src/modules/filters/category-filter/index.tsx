import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
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

export function BrowseByCategory() {
  return (
    <Carousel className="w-full h-full flex flex-col gap-4">
      <div className="w-full min-h-16 flex flex-row items-center justify-between">
        <div className="flex flex-row gap-4 items-center">
          <h1 className="font-semibold text-lg">Browse By Category</h1>
          <span className="text-sm text-secondary_color mt-1 flex flex-row items-center">All Categories <ChevronRight size={15}/></span>
        </div>
        <div className="flex flex-row gap-2 h-full items-center">
          <div className="">
            <CarouselPrevious className="bg-gray-300 rounded-md hover:bg-gray-400 transition">
            </CarouselPrevious>
          </div>
          <div className="">
            <CarouselNext className={cn(" bg-gray-300 rounded-md hover:bg-gray-400 transition",{
            
            })} />
          </div>
        </div>
      </div>
      <CarouselContent className="w-full h-full">
        {Array.from({ length: 14 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-[20%] lg:basis-[12.5%] basis-1/2">
            <div className="p-3">
              <div className=" h-[13rem] hover:scale-105 hover:shadow-md transition-all border rounded-md bg-slate-200 p-3 flex flex-col items-center justify-center gap-3">
                <div className="w-full relative h-[7rem]">
                  <Image
                    layout="fill"
                    src="/images/category.png"
                    alt="category"
                    className="object-cover"
                  />
                </div>
                <span className="text-sm">Category</span>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
