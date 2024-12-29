"use client"

import { Skeleton } from "@/components/ui/skeleton";
import { ProductImage } from "@/lib/types/global";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageShowcaseProps {
  images: ProductImage[];
}

const ImageShowcase = ({ images }: ImageShowcaseProps) => {
    const [currentImage,setCurrentImage] = useState<string>("/images/image_placeholder.jpg");
    useEffect(()=>{
        if(images){
            setCurrentImage(images[0].image_url)
        }
    },[setCurrentImage]);
  return (
    <div className="w-full h-full flex flex-col gap-0 md:max-h-[27rem] lg:max-h-[30rem]">
      <div className="relative w-full md:min-h-[17rem] lg:min-h-[20rem] h-[15rem]">
        {images?(
            <Image
            layout="fill"
            src={currentImage}
            alt="product-image"
            className="lg:object-conain md:object-contain object-contain bg-white"
          />
        ):(
            <Skeleton className="w-full h-full bg-secondary_color/35"/>
        )}
        
      </div>
      <div className="w-full flex flow-row items-center lg:h-28 md:h-24 h-20 overflow-x-auto scrollbar-thin">
        {images
          ? images.map((image) => (
              <div
                key={image.id}
                onClick={() => setCurrentImage(image.image_url)}
                className={cn("relative h-full lg:w-[130px] md:w-[100px] w-[80px] flex-shrink-0 hover:cursor-pointer",{
                    "border border-gray-400 rounded overflow-hidden":currentImage===image.image_url
                })}
              >
                <Image
                  src={image.image_url}
                  alt={`product-thumbnail-${image.id}`}
                  layout="fill"
                  objectFit="contain"
                  className="bg-white"
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
export default ImageShowcase;
