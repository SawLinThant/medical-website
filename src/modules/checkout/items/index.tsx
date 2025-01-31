"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CartItem } from "@/lib/features/cart/cartSlice";
import { RootState } from "@/lib/store";
import FileuploadField from "@/modules/common/fileupload-field";
import { Loader, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface CheckoutItemsProps {
  placeOrder: () => void;
  orderLoading: boolean;
  setTotalPrice: (price: number) => void;
  setImage: (file:File) => void
}

const CheckoutItems: React.FC<CheckoutItemsProps> = ({
  placeOrder,
  orderLoading,
  setTotalPrice,
  setImage
}) => {
  const [isClient, setIsClient] = useState(false);
  const [file, setFile] = useState<File[]>([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalItems = cartItems.length;

  const calculateTotalPrice = (cartItems: CartItem[]) => {
    return cartItems.reduce((total, item) => {
      const applicablePrice =
        item && item.discount_price && item.discount_price > 0
          ? item.discount_price
          : item.price;
      return total + applicablePrice * item.quantity;
    }, 0);
  };
  const subTotalPrice = calculateTotalPrice(cartItems);
  const discount = 100;
  useEffect(() => {
    setIsClient(true);
    setTotalPrice(subTotalPrice - discount);
  }, [cartItems]);
  const handleFileUpload = (files: FileList) => {
    setFile((prev) => [...prev, ...Array.from(files)]);
  };
  const handleRemoveImage = (id: number) => {
    setFile((prev) => prev.filter((image, index) => index !== id));
  };
  useEffect(() => {
    if(file.length>0){
      setImage(file[0])
    }
  },[file])
  return (
    <div className="w-full min-h-36 py-4 px-8 bg-white  border rounded-md flex flex-col gap-4">
      <div className="w-full flex flex-col gap-2">
        {isClient &&
          cartItems.length > 0 &&
          cartItems.map((item) => (
            <div
              key={item.id}
              className="w-full grid grid-cols-4 gap-3 min-h-16"
            >
              <div className="col-span-2 flex flex-row items-center gap-1">
                <div className="w-full h-full relative">
                  <Image
                    alt=""
                    layout="fill"
                    objectFit="contain"
                    src={
                      item.images?.[0].image_url ||
                      "/images/image_placeholder.jpg"
                    }
                  />
                </div>
                <span className="text-sm">{item.name}</span>
              </div>
              <div className="h-full col-span-1 flex items-center justify-center">
                <span className="text-sm text-muted-foreground">
                  x{item.quantity}
                </span>
              </div>
              <div className="h-full col-span-1 flex items-center justify-center">
                <span className="text-sm">
                  MMK{" "}
                  {(item.quantity * (item.discount_price > 0 ? item.discount_price : item.price)).toLocaleString()}
                </span>
              </div>
            </div>
          ))}
      </div>
      <Separator className="my-4" />
      <div className="flex flex-col gap-4 w-full">
        <div className="w-full flex flex-row items-center justify-between">
          <div className="flex flex-row gap-2 items-center">
            <span className="">Subtotal</span>
            <span className="text-xs text-muted-foreground">
              ({isClient ? totalItems : 0} items)
            </span>
          </div>
          <span className="text-sm text-muted-foreground">
            MMK {isClient ? subTotalPrice.toLocaleString() : 0}
          </span>
        </div>
        <div className="w-full flex flex-row items-center justify-between">
          <div className="flex flex-row gap-2 items-center">
            <span className="">Discount</span>
          </div>
          <span className="text-sm text-muted-foreground">
            MMK {discount.toLocaleString()}
          </span>
        </div>
        <div className="w-full flex flex-row items-center justify-between">
          <div className="flex flex-row gap-2 items-center">
            <span className="">Delivery</span>
          </div>
          <span className="text-sm text-muted-foreground">Free</span>
        </div>
        <div className="w-full flex flex-row items-center justify-between">
          <div className="flex flex-row gap-2 items-center">
            <span className="">Tax</span>
            <span className="text-xs text-muted-foreground">
              PDV 20% (included)
            </span>
          </div>
          <span className="text-sm text-muted-foreground">MMK 0,000</span>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-row gap-2 items-center">
          <span className="">Total:</span>
        </div>
        <span className="text-muted-foreground font-bold">
          MMK {isClient ? (subTotalPrice - discount).toLocaleString() : "0,000"}
        </span>
      </div>
      <div className="h-6"></div>
      {file.length < 1?(
         <div className="w-full h-28">
         <FileuploadField
           className="w-full h-full"
           onFileSelect={handleFileUpload}
           multiple={false}
         />
       </div>
      ):null}
     
      {file.map((image, index) => (
        <div key={index} className="w-full h-28 border rounded-md relative">
          <Image objectFit="contain" layout="fill" src={URL.createObjectURL(image)} alt="payment" />
          <div
            onClick={() => handleRemoveImage(index)}
            className="absolute top-1 right-2 hover:cursor-pointer"
          >
            <X size={30} color="black" />
          </div>
        </div>
      ))}

      <Button
      disabled={orderLoading}
        onClick={placeOrder}
        className="mt-3 flex items-center justify-center"
      >
        {orderLoading ? <Loader className="animate-spin" /> : "Place Order"}
      </Button>
    </div>
  );
};
export default CheckoutItems;
