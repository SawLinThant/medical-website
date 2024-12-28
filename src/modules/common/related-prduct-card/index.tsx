import { Button } from "@/components/ui/button";
import Image from "next/image";
import Star from "../icons/star";
import { Heart } from "lucide-react";
import { Product, ProductImage } from "@/lib/types/global";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/features/cart/cartSlice";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

interface ProductCardprops {
    product: Product
}

const ProductCard: React.FC<ProductCardprops> = (product:ProductCardprops) => {
    const [images,setImages] = useState<ProductImage[] | null>(null);
    const [quantity,setQuantity] = useState<number>(1);
    const [totalPrice, setTotalPrice] = useState<number>(product.product.price);
    const dispatch = useDispatch();
    const router = useRouter()

    useEffect(() => {
        if(product && product.product.images){
            setImages(product.product.images)
        }
    },[setImages])
   
    const handleIncrease = () => {
      setQuantity(quantity+1)
      const newQunatity = quantity+1
      setTotalPrice(newQunatity*product.product.price)
    }
    const handleDecrease = () => {
      setQuantity(quantity-1)
      const newQunatity = quantity-1
      setTotalPrice(newQunatity*product.product.price)
    }
    useEffect(() => {

    },[setQuantity,setTotalPrice])

    const handleAddToCart = () => {
      dispatch(addToCart({...product.product,quantity}))
      toast({
        description:"Item added to the cart"
      })
    }

  return (
    <div className="w-full p-4 border bg-white rounded-md group h-[21.8rem] scale-95 hover:h-full hover:shadow-lg transition-all overflow-hidden">
      <div className="w-full h-full flex flex-col gap-3 group">
        <div onClick={() => router.push(`/product/detail/${product.product.id}`)} className="relative w-full min-h-[10rem] hover:cursor-pointer">
          <Image layout="fill" alt="product.img" src={images?.[0].image_url || "/image_placeholder.jpg"} className="object-contain"/>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold">{product.product.name}</h2>
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
            MMK {product.product.price.toLocaleString()}
          </h1>
          <div className="w-full h-1 border border-gray-300">
            <div className="h-full w-2/3 bg-yellow-300"></div>
          </div>
          <span className="text-sm text-muted-foreground">{product.product.quantity} left</span>
        </div>
        <div className="flex-row h-5 gap-3 items-center mt-5 flex">
          <div className="flex flex-row border items-center border-gray-400 rounded">
            <Button onClick={handleDecrease} disabled={quantity === 1} className="w-7 h-full rounded-none bg-transparent border-r hover:bg-secondary_color hover:text-white text-black">-</Button>
            <div className="min-w-9 h-full text-center flex items-center justify-center"><span>{quantity}</span></div>
            <Button onClick={handleIncrease} disabled={quantity >= product.product.quantity} className="w-7 h-full bg-transparent rounded-none border-l text-black hover:bg-secondary_color hover:text-white">+</Button>
          </div>
          <div className="flex flex-row items-center gap-2">
            <span className="font-semibold text-gray-600 text-sm">Total - </span>
            <span className="text-sm text-secondary_color"> {totalPrice} MMK</span>
          </div>
        </div>
        <Button onClick={handleAddToCart} className="w-full transition-all min-h-8 rounded-md mt-4 bg-secondary_color text-white">Add to cart</Button>
      </div>
    </div>
  );
};
export default ProductCard;
