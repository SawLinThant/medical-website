import { Button } from "@/components/ui/button";
import { Product } from "@/lib/apolloClient/services/product";
import Star from "@/modules/common/icons/star";
import Image from "next/image";

interface ProductcardProps {
    name: string;
    price: number;
    image: string
    addToCart: () => void
}

const ProductCard:React.FC<ProductcardProps> = ({name,price,image, addToCart}) => {
  return <div className="w-full min-h-28 border rounded-md p-4 flex flex-col gap-3 bg-white">
    <div className="lg:h-44 md:h-40 h-36 w-full relative">
        <Image src={image} layout="fill" alt="product" objectFit="contain"/>
    </div>
    <div className="flex flex-col gap-2">
        <span className="font-semibold">{name}</span>
        <div className="flex lg:flex-row md:flex-row flex-col gap23">
            <div className="flex flex-row items-center gap-1 min-w-[6.5em]">
              <Star height="17px" width="17px" color="#cfda31"/>
              <Star height="17px" width="17px" color="#cfda31"/>
              <Star height="17px" width="17px" color="#cfda31"/>
              <Star height="17px" width="17px" color="#cfda31"/>
            </div>
            <span className="text-xs text-muted-foreground">125 reviews</span>
          </div>
          <span className="text-lg font-semibold text-secondary_color mt-2">
            MMK {price.toLocaleString()}
          </span>
          <Button onClick={addToCart} className="rounded-lg bg-secondary_color/80">Add To Cart</Button>
    </div>
  </div>;
};
export default ProductCard;
