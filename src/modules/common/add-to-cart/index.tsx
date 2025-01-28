"use client"

import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast";
import { addToCart } from "@/lib/features/cart/cartSlice";
import { Product } from "@/lib/types/global";
import { ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface AddToCartProps {
    product:Product
}

const AddToCart = ({product}:AddToCartProps) => {
    const dispatch = useDispatch();
    const [quantity,setQuantity] = useState<number>(1);
    const router = useRouter();
    const [totalPrice, setTotalPrice] = useState<number>(product.price);
    const handleIncrease = () => {
        setQuantity(quantity+1)
        const newQunatity = quantity+1
        setTotalPrice(newQunatity*product.price)
      }
      const handleDecrease = () => {
        setQuantity(quantity-1)
        const newQunatity = quantity-1
        setTotalPrice(newQunatity*product.price)
      }
      useEffect(() => {
  
      },[setQuantity,setTotalPrice])
  
      const handleAddToCart = () => {
        dispatch(addToCart({...product,quantity}))
        toast({
          description:"Item added to the cart"
        })
      }

      const handleBuy = () => {
        dispatch(addToCart({...product,quantity}))
        router.push("/cart")
      }
    return(
        <div className="flex flex-col gap-6">
             <div className="flex flex-col gap-2">
                <span className="text-muted-foreground text-xs">Quantity</span>
                <div className="flex flex-row flex-shrink-0 max-w-28 border items-center border-gray-400 rounded">
                  <Button
                    onClick={handleDecrease}
                    disabled={quantity === 1}
                    className="h-full w-1/3 rounded-r-none rounded-l bg-transparent border-r hover:bg-secondary_color hover:text-white text-black"
                  >
                    -
                  </Button>
                  <div className="w-1/3 h-full text-center flex items-center justify-center">
                    <span>{quantity}</span>
                  </div>
                  <Button
                    onClick={handleIncrease}
                    disabled={quantity >= product.quantity}
                    className="h-full w-1/3 bg-transparent rounded-l-none border-l text-black hover:bg-secondary_color hover:text-white rounded-r"
                  >
                    +
                  </Button>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <Button onClick={handleBuy} className="min-h-3 min-w-[7.5rem] rounded-md bg-transparent text-muted-foreground border border-secondary_color hover:bg-transparent hover:border-black hover:text-black">
                  Buy Now
                </Button>
                <Button onClick={handleAddToCart} className="min-h-3 rounded-md bg-secondary_color text-white border border-secondary_color flex flex-row items-center">
                  <span>Add to cart</span>
                  <ShoppingCart size={20} />
                </Button>
              </div>
        </div>
    )
}
export default AddToCart