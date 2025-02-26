// import Star from "../icons/star";

// const Rating = () => {
//   return (
//     <div className="w-full flex flex-col gap-3">
//       <h2 className="font-semibold text-xl">Rating</h2>
//       <div className="flex lg:flex-row md:flex-row flex-col lg:gap-8 md:gap-8 gap-4">
//         <div className="flex flex-col items-start justify-center min-h-24">
//           <div className="flex flex-row items-center gap-2">
//             <h2 className="text-2xl font-semibold">4.0</h2>
//             <span className="text-xl text-muted-foreground">/</span>
//             <span className="text-muted-foreground">5</span>
//           </div>
//           <div className="flex flex-row items-center gap-1 min-w-[7rem]">
//             <Star height="20px" width="20px" color="#cfda31" />
//             <Star height="20px" width="20px" color="#cfda31" />
//             <Star height="20px" width="20px" color="#cfda31" />
//             <Star height="20px" width="20px" color="#cfda31" />
//             <Star height="20px" width="20px" color="gray" />
//           </div>
//         </div>
//         <div className="flex flex-col gap-0">
//           <div className="gap-2 lg:min-h-8 flex flex-row items-center">
//             <div className="flex flex-row items-center gap-1 min-w-[7rem]">
//               <Star height="15px" width="20px" color="#cfda31" />
//               <Star height="15px" width="20px" color="#cfda31" />
//               <Star height="15px" width="20px" color="#cfda31" />
//               <Star height="15px" width="20px" color="#cfda31" />
//               <Star height="15px" width="20px" color="#cfda31" />
//             </div>
//             <div className="w-full flex flex-row items-center gap-2">
//               <div className="w-[12rem] h-4 bg-secondary_color/40">
//                 <div className="h-full w-full bg-[#cfda31]"></div>
//               </div>
//               <span>1</span>
//             </div>
//           </div>
//           <div className="gap-2 lg:min-h-8 flex flex-row items-center">
//             <div className="flex flex-row items-center gap-1 min-w-[7rem]">
//               <Star height="15px" width="20px" color="#cfda31" />
//               <Star height="15px" width="20px" color="#cfda31" />
//               <Star height="15px" width="20px" color="#cfda31" />
//               <Star height="15px" width="20px" color="#cfda31" />
//               <Star height="15px" width="20px" color="gray" />
//             </div>
//             <div className="w-full flex flex-row items-center gap-2">
//               <div className="w-[12rem] h-4 bg-secondary_color/40">
//                 <div className="h-full w-0 bg-[#cfda31]"></div>
//               </div>
//               <span>0</span>
//             </div>
//           </div>
//           <div className="gap-2 lg:min-h-8 flex flex-row items-center">
//             <div className="flex flex-row items-center gap-1 min-w-[7rem]">
//               <Star height="15px" width="20px" color="#cfda31" />
//               <Star height="15px" width="20px" color="#cfda31" />
//               <Star height="15px" width="20px" color="#cfda31" />
//               <Star height="15px" width="20px" color="gray" />
//               <Star height="15px" width="20px" color="gray" />
//             </div>
//             <div className="w-full flex flex-row items-center gap-2">
//               <div className="w-[12rem] h-4 bg-secondary_color/40">
//                 <div className="h-full w-0 bg-[#cfda31]"></div>
//               </div>
//               <span>0</span>
//             </div>
//           </div>
//           <div className="gap-2 lg:min-h-8 flex flex-row items-center">
//             <div className="flex flex-row items-center gap-1 min-w-[7rem]">
//               <Star height="15px" width="20px" color="#cfda31" />
//               <Star height="15px" width="20px" color="#cfda31" />
//               <Star height="15px" width="20px" color="gray" />
//               <Star height="15px" width="20px" color="gray" />
//               <Star height="15px" width="20px" color="gray" />
//             </div>
//             <div className="w-full flex flex-row items-center gap-2">
//               <div className="w-[12rem] h-4 bg-secondary_color/40">
//                 <div className="h-full w-0 bg-[#cfda31]"></div>
//               </div>
//               <span>0</span>
//             </div>
//           </div>
//           <div className="gap-2 lg:min-h-8 flex flex-row items-center">
//             <div className="flex flex-row items-center gap-1 min-w-[7rem]">
//               <Star height="15px" width="20px" color="#cfda31" />
//               <Star height="15px" width="20px" color="gray" />
//               <Star height="15px" width="20px" color="gray" />
//               <Star height="15px" width="20px" color="gray" />
//               <Star height="15px" width="20px" color="gray" />
//             </div>
//             <div className="w-full flex flex-row items-center gap-2">
//               <div className="w-[12rem] h-4 bg-secondary_color/40">
//                 <div className="h-full w-0 bg-[#cfda31]"></div>
//               </div>
//               <span>1</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Rating;
// components/Rating.tsx
import serverApolloClient from "@/lib/apolloClient/serverApolloClient";
import Star from "../icons/star";
import { getRatingSummary } from "@/lib/apolloClient/services/productRating";

interface RatingProps {
  productId: string;
}

const Rating = async ({ productId }: RatingProps) => {
  const { averageRating, reviewCount, distribution } = await getRatingSummary(
    serverApolloClient,
    productId
  );

  const maxWidth = 12 * 16; // 12rem in pixels (assuming 1rem = 16px)
  const getBarWidth = (count: number) =>
    reviewCount > 0 ? (count / reviewCount) * maxWidth : 0;

  // Round averageRating to the nearest integer for full stars
  const roundedRating = Math.round(averageRating);

  return (
    <div className="w-full flex flex-col gap-3">
      <h2 className="font-semibold text-xl">Rating</h2>
      <div className="flex lg:flex-row md:flex-row flex-col lg:gap-8 md:gap-8 gap-4">
        <div className="flex flex-col items-start justify-center min-h-24">
          <div className="flex flex-row items-center gap-2">
            <h2 className="text-2xl font-semibold">{averageRating.toFixed(1)}</h2>
            <span className="text-xl text-muted-foreground">/</span>
            <span className="text-muted-foreground">5</span>
          </div>
          <div className="flex flex-row items-center gap-1 min-w-[7rem]">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <Star
                  key={index}
                  height="20"
                  width="20"
                  color={index < roundedRating ? "#cfda31" : "gray"}
                />
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-0">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="gap-2 lg:min-h-8 flex flex-row items-center">
              <div className="flex flex-row items-center gap-1 min-w-[7rem]">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <Star
                      key={index}
                      height="15"
                      width="20"
                      color={index < star ? "#cfda31" : "gray"}
                    />
                  ))}
              </div>
              <div className="w-full flex flex-row items-center gap-2">
                <div className="w-[12rem] h-4 bg-secondary_color/40">
                  <div
                    className="h-full bg-[#cfda31]"
                    style={{ width: `${getBarWidth(distribution[star])}px` }}
                  ></div>
                </div>
                <span>{distribution[star]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rating;
