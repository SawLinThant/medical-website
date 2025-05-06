"use client";

import * as React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client"; // Adjust path as needed
import { Advertisement, getAdvertisements } from "@/lib/apolloClient/services/advertisement";
import serverApolloClient from "@/lib/apolloClient/serverApolloClient";


export function ImageCarousel() {
  const [advertisements, setAdvertisements] = React.useState<Advertisement[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchAdvertisements = async () => {
      try {
        const { advertisements } = await getAdvertisements(serverApolloClient);
        setAdvertisements(advertisements);
      } catch (error) {
        console.error("Failed to fetch advertisements:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAdvertisements();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          padding: "10px",
          listStyle: "none",
          textAlign: "center",
        }}
      >
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "10px",
          height: "10px",
          border: "1px solid white",
          borderRadius: "50%",
          display: "inline-block",
          background: "white",
          opacity: 0.6,
        }}
      />
    ),
  };

  if (loading) {
    return <div></div>;
  }

  if (!advertisements.length) {
    return <div>No advertisements available</div>;
  }

  return (
    <div className="w-full relative">
      <Slider {...settings}>
        {advertisements.map((ad) =>
          ad.ad_images.map((image) => (
            <div key={image.id} className="w-full h-full">
              <div className="relative w-full lg:h-[20rem] md:h-[15rem] h-[13rem]">
                <Image
                  className="object-contain rounded-md"
                  layout="fill"
                  alt={`advertisement-${ad.id}-image-${image.id}`}
                  src={image.url}
                />
              </div>
            </div>
          ))
        )}
      </Slider>
    </div>
  );
}
