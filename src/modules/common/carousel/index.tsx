// "use client";

// import * as React from "react";
// import Image from "next/image";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// const IMAGES = [
//   {
//     id: 1,
//     url: "/images/slide.jpg",
//   },
//   {
//     id: 2,
//     url: "/images/slide.jpg",
//   },
//   {
//     id: 3,
//     url: "/images/slide.jpg",
//   },
// ];

// export function ImageCarousel() {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//   };
//   return (
//     <div className="w-full">
//       <Slider {...settings}>
//         {IMAGES.map((image) => (
//           <div key={image.id} className="w-full h-full">
//             <div className="relative w-full lg:h-[20rem] md:h-[15rem] h-[13rem]">
//               <Image
//                 className="object-cover rounded-md"
//                 layout="fill"
//                 alt={`carousel-image-${image.id}`}
//                 src={image.url}
//               />
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  if (loading) {
    return <div>Loading advertisements...</div>;
  }

  if (!advertisements.length) {
    return <div>No advertisements available</div>;
  }

  return (
    <div className="w-full">
      <Slider {...settings}>
        {advertisements.map((ad) =>
          ad.ad_images.map((image) => (
            <div key={image.id} className="w-full h-full">
              <div className="relative w-full lg:h-[20rem] md:h-[15rem] h-[13rem]">
                <Image
                  className="object-cover rounded-md"
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
