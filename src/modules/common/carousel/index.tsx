"use client"

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ImageCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="w-full h-full"
    >
      <CarouselContent className="w-full h-full flex items-center justify-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem className="w-full h-full relative" key={index}>
            <div className="relative w-full lg:h-[20rem] md:h-[15rem] h-[13rem]">
              <Image
                className="object-cover"
                layout="fill"
                alt={`carousel-image-${index}`}
                src="/images/banner1.png"
              />
            </div>
            <div className="absolute inset-5 flex items-center justify-center">
              <Button className="rounded-md min-w-20 min-h-10">Buy Now</Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
