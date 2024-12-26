"use client";

import * as React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//import { Button } from "@/components/ui/button";

const IMAGES = [
  {
    id: 1,
    url: "/images/slide.jpg",
  },
  {
    id: 2,
    url: "/images/slide.jpg",
  },
  {
    id: 3,
    url: "/images/slide.jpg",
  },
];

export function ImageCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <div className="w-full">
      <Slider {...settings}>
        {IMAGES.map((image) => (
          <div key={image.id} className="w-full h-full">
            <div className="relative w-full lg:h-[20rem] md:h-[15rem] h-[13rem]">
              <Image
                className="object-cover rounded-md"
                layout="fill"
                alt={`carousel-image-${image.id}`}
                src={image.url}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
