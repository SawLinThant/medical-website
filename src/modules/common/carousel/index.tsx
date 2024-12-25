"use client"

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
//import { Button } from "@/components/ui/button";

const IMAGES = [
  {
    id: 1,
    url: "/images/slide1.png"
  },
  {
    id: 2,
    url: "/images/slide2.png"
  },
  {
    id: 3,
    url: "/images/slide3.png"
  },
]

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
        {IMAGES.map((image) => (
          <CarouselItem className="w-full h-full relative" key={image.id}>
            <div className="relative w-full lg:h-[20rem] md:h-[15rem] h-[13rem]">
              <Image
                className="object-cover"
                layout="fill"
                alt={`carousel-image-${image.id}`}
                src={image.url}
              />
            </div>
            {/* <div className="absolute inset-5 flex items-center justify-center">
              <Button className="rounded-md min-w-20 min-h-10">Buy Now</Button>
            </div> */}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
