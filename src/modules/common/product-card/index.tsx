import { Button } from "@/components/ui/button";
import Image from "next/image";
import Star from "../icons/star";
import { Heart } from "lucide-react";

const ProductCard: React.FC = () => {
  return (
    <div className="w-full p-4 border bg-white rounded-md group h-[21.25rem] scale-95 hover:scale-100 hover:h-full hover:shadow-lg transition-all overflow-hidden">
      <div className="w-full h-full flex flex-col gap-3 group">
        <div className="relative w-full min-h-[10rem]">
          <Image layout="fill" alt="product.img" src="/images/category.jpg" className="object-contain"/>
          <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-all">
            <Heart/>
          </div>
          <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all min-w-16 bg-secondary_color text-white rounded flex items-center justify-center text-center py-1">
            <span className="w-full h-full text-sm font-extralight">30% off</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold">Product Name</h2>
          <div className="flex flex-row gap-3">
            <div className="flex flex-row items-center gap-1 min-w-[7rem]">
              <Star height="20px" width="20px" color="#cfda31"/>
              <Star height="20px" width="20px" color="#cfda31"/>
              <Star height="20px" width="20px" color="#cfda31"/>
              <Star height="20px" width="20px" color="#cfda31"/>
            </div>
            <span className="text-sm text-muted-foreground">125 reviews</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-secondary_color">
            MMK 4,500
          </h1>
          <div className="w-full h-1 border border-gray-300">
            <div className="h-full w-2/3 bg-yellow-300"></div>
          </div>
          <span className="text-sm text-muted-foreground">24 left</span>
        </div>
        <div className="flex-row h-5 gap-3 items-center mt-3 flex">
          <div className="flex flex-row border items-center border-gray-400 rounded">
            <Button className="w-7 h-full rounded-none bg-transparent border-r hover:bg-secondary_color hover:text-white text-black">+</Button>
            <div className="min-w-9 h-full text-center flex items-center justify-center"><span>1</span></div>
            <Button className="w-7 h-full bg-transparent rounded-none border-l text-black hover:bg-secondary_color hover:text-white">-</Button>
          </div>
          <div className="flex flex-row items-center gap-2">
            <span className="font-semibold text-gray-600 text-sm">Total - </span>
            <span className="text-sm text-secondary_color"> 4,500 MMK</span>
          </div>
        </div>
        <Button className="w-full transition-all min-h-8 rounded-md mt-4 bg-secondary_color text-white">Add to cart</Button>
      </div>
    </div>
  );
};
export default ProductCard;
