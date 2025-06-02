"use client";

import * as React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client"; // Adjust path as needed
import {
  Advertisement,
  getAdvertisements,
} from "@/lib/apolloClient/services/advertisement";
import serverApolloClient from "@/lib/apolloClient/serverApolloClient";

// export function ImageCarousel() {
//   const [advertisements, setAdvertisements] = React.useState<Advertisement[]>([]);
//   const [loading, setLoading] = React.useState(true);

//   React.useEffect(() => {
//     const fetchAdvertisements = async () => {
//       try {
//         const { advertisements } = await getAdvertisements(serverApolloClient);
//         setAdvertisements(advertisements);
//       } catch (error) {
//         console.error("Failed to fetch advertisements:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAdvertisements();
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//     appendDots: (dots: React.ReactNode) => (
//       <div
//         style={{
//           position: "absolute",
//           bottom: "10px",
//           width: "100%",
//           padding: "10px",
//           listStyle: "none",
//           textAlign: "center",
//         }}
//       >
//         <ul style={{ margin: "0px" }}>{dots}</ul>
//       </div>
//     ),
//     customPaging: () => (
//       <div
//         style={{
//           width: "10px",
//           height: "10px",
//           border: "1px solid white",
//           borderRadius: "50%",
//           display: "inline-block",
//           background: "white",
//           opacity: 0,
//         }}
//       />
//     ),
//   };

//   if (loading) {
//     return <div></div>;
//   }

//   if (!advertisements.length) {
//     return <div>No advertisements available</div>;
//   }

//   return (
//     <div className="w-full relative rounded-lg">
//       <Slider {...settings}>
//         {advertisements.map((ad) =>
//           ad.ad_images.map((image) => (
//             <div key={image.id} className="w-full h-full">
//               <div className="relative w-full lg:h-[20rem] md:h-[15rem] h-[13rem]">
//                 <Image
//                   className="object-cover rounded-md"
//                   layout="fill"
//                   alt={`advertisement-${ad.id}-image-${image.id}`}
//                   src={image.url}
//                 />
//               </div>
//             </div>
//           ))
//         )}
//       </Slider>
//     </div>
//   );
// }

export function ImageCarousel() {
  const [advertisements, setAdvertisements] = React.useState<Advertisement[]>(
    []
  );
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
    arrows: false, // 🔥 Hides left and right arrows
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    appendDots: (dots: React.ReactNode) => (
      <div className="flex justify-center items-center mt-4">
        <ul className="flex gap-0 items-center justify-center">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className="w-2.5 h-2.5 border border-white rounded-full opacity-60 bg-[#D9D9D9] transition-all duration-300" />
    ),
  };

  if (loading) return <div></div>;
  if (!advertisements.length) return <div>No advertisements available</div>;

  return (
    <div className="w-full relative rounded-lg">
      <Slider
        {...settings}
  className={`
  [&_.slick-dots]:!static
  [&_.slick-dots]:!flex [&_.slick-dots]:!justify-center [&_.slick-dots]:!gap-2
  [&_.slick-dots_li]:!inline-flex [&_.slick-dots_li]:!items-center [&_.slick-dots_li]:!justify-center
  [&_.slick-dots_li]:!transition-all [&_.slick-dots_li]:!duration-300

  [&_.slick-dots_li]:!w-2 [&_.slick-dots_li]:!h-2
  [&_.slick-dots_li.slick-active]:!w-6

  [&_.slick-dots_li_div]:!transition-all [&_.slick-dots_li_div]:!duration-300
  [&_.slick-dots_li_div]:!rounded-full [&_.slick-dots_li_div]:!bg-[#D9D9D9] [&_.slick-dots_li_div]:!opacity-100 [&_.slick-dots_li_div]:!w-full [&_.slick-dots_li_div]:!h-full

  [&_.slick-dots_li.slick-active_div]:!rounded-md [&_.slick-dots_li.slick-active_div]:!bg-[#39AF9D]
`}
      >
        {advertisements.map((ad) =>
          ad.ad_images.map((image) => (
            <div key={image.id} className="w-full h-full">
              <div className="relative w-full lg:h-[23rem] md:h-[20rem] h-[13rem]">
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
