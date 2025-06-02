"use client";

import * as React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Shop } from "@/domain/entities/shop.entity";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface BrowseByBrandProps {
  brands: Shop[];
}

export function BrowseByBrand({ brands }: BrowseByBrandProps) {
  const router = useRouter();

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="w-full min-h-16 flex flex-row items-center justify-between">
        <div className="flex flex-row gap-4 items-center">
          <h1 className="font-semibold text-lg">Featured Shops</h1>
          {/* <span
            onClick={() => router.push("/shop/all")}
            className="text-sm text-secondary_color mt-1 flex flex-row items-center hover:cursor-pointer"
          >
            All Shops <ChevronRight size={15} />
          </span> */}
        </div>
      </div>
      {brands && brands.length > 0 ? (
        <Marquee
          speed={50} 
          gradient={false} 
          pauseOnHover 
          className="w-full h-[18rem] overflow-hidden bg-transparent"
        >
          {brands.map((shop, index) => (
            <div
              key={index}
              className="mx-2"
              style={{ width: "16rem" }} // Fixed width for consistent spacing
            >
              <Link href={`/shop/shop-profile/${shop.id}`} passHref>
                <div className="min-h-[13rem] rounded transition-all flex flex-col items-start justify-start gap-3 p-4">
                  <div className="w-full relative h-[13rem]">
                    <Image
                      layout="fill"
                      src={shop.logo || "/placeholder.png"} // Fallback for missing logo
                      alt={shop.name}
                      className="object-contain hover:border-none rounded bg-transparent"
                    />
                  </div>
                  {/* <div className="flex flex-col text-left items-start">
                    <span className="text-sm text-muted-foreground">
                      {shop.description}
                    </span>
                    <span className="font-semibold">{shop.name}</span>
                  </div> */}
                </div>
              </Link>
            </div>
          ))}
        </Marquee>
      ) : (
        <div className="w-full h-[18rem] flex flex-row gap-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="min-h-[13rem] rounded bg-slate-200 flex flex-col items-start justify-start gap-3 p-4"
              style={{ width: "16rem" }}
            >
              <div className="w-full relative h-[13rem] bg-gray-300 rounded animate-pulse"></div>
              <div className="flex flex-col text-left items-start gap-2">
                <div className="w-3/4 h-4 bg-gray-300 rounded animate-pulse"></div>
                <div className="w-1/2 h-4 bg-gray-300 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}