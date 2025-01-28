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
import { Brand } from "@/lib/types/global";

interface BrowseByBrandProps {
  brands: Brand[]
}

export function BrowseByBrand({brands}:BrowseByBrandProps) {
  return (
    <Carousel className="w-full h-full flex flex-col gap-4">
      <div className="w-full min-h-16 flex flex-row items-center justify-between">
        <div className="flex flex-row gap-4 items-center">
          <h1 className="font-semibold text-lg">Featured Brand</h1>
          <span className="text-sm text-secondary_color mt-1 flex flex-row items-center">All Brands <ChevronRight size={15}/></span>
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
        {brands.map((brand, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-[25%]">
            <div className="p-0">
              <div className=" min-h-[13rem] hover:scale-105 rounded hover:shadow-md hover:bg-white transition-all flex flex-col items-start justify-start gap-3 p-4">
                <div className="w-full relative h-[13rem]">
                  <Image
                    layout="fill"
                    src={brand.image_url}
                    alt="category"
                    className="object-cover hover:border-none rounded bg-white"
                  />
                </div>
                <div className="flex flex-col text-left items-start">
                  <span className="text-sm text-muted-foreground">
                    {brand.website_link}
                  </span>
                  <span className="font-semibold">{brand.name} Compnay.Ltd</span>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
