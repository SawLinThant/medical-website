"use client"

import { Button } from "@/components/ui/button";
import { Product } from "@/lib/apolloClient/services/product";
import Star from "@/modules/common/icons/star";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductcardProps {
  id: string;
    name: string;
    price: number;
    image: string;
    addToCart: () => void;
    average_rating?: number;
    review_count?: number;
    discount_price?: number;
}

const ProductCard:React.FC<ProductcardProps> = ({id, name, price, image, addToCart, average_rating = 0, review_count = 0, discount_price}) => {
  const roundedRating = Math.round(average_rating);
  const discountPercentage = discount_price ? Math.round(((price - discount_price) / price) * 100) : 0;
  const router = useRouter()
  
  return <div className="w-full min-h-28 border rounded-md p-4 flex flex-col gap-3 bg-white">
    <div onClick={() => router.push(`/product/detail/${id}`)} className="lg:h-44 md:h-40 h-36 w-full relative hover:cursor-pointer">
        <Image src={image} layout="fill" alt="product" objectFit="contain"/>
        {discountPercentage > 0 && (
          <div className="absolute top-0 left-0 bg-secondary_color text-white rounded flex items-center justify-center text-center py-1 px-2">
            <span className="text-sm font-extralight">{discountPercentage}% off</span>
          </div>
        )}
    </div>
    <div className="flex flex-col gap-2">
        <span className="font-semibold">{name}</span>
        <div className="flex lg:flex-row md:flex-row flex-col gap-3">
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
            <span className="text-sm text-muted-foreground">{review_count} reviews</span>
          </div>
          <div className="flex flex-col gap-1">
            {discount_price ? (
              <>
                <span className="text-lg font-semibold text-secondary_color">
                  MMK {discount_price.toLocaleString()}
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  MMK {price.toLocaleString()}
                </span>
              </>
            ) : (
              <span className="text-lg font-semibold text-secondary_color">
                MMK {price.toLocaleString()}
              </span>
            )}
          </div>
          <Button onClick={addToCart} className="rounded-lg bg-secondary_color/80">Add To Cart</Button>
    </div>
  </div>;
};
export default ProductCard;
