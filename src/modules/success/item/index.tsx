"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CartItem } from "@/lib/features/cart/cartSlice";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CheckoutItemsProps {
  downloadInvoice: () => void;
}

const SuccessItems: React.FC<CheckoutItemsProps> = ({
    downloadInvoice,
}) => {
  const [isClient, setIsClient] = useState(false);
  const orderItems = localStorage.getItem("ordered items")
  const [orderedItems,setOrderItems] = useState<CartItem[]>() 
  const totalItems = JSON.parse(orderItems || "").length;

  const calculateTotalPrice = (cartItems: CartItem[]) => {
    return cartItems.reduce((total, item) => {
      const applicablePrice =
        item && item.bulk_price && item.bulk_price > 0
          ? item.bulk_price
          : item.price;
      return total + applicablePrice * item.quantity;
    }, 0);
  };
  const subTotalPrice = calculateTotalPrice(JSON.parse(orderItems || ""));
  const discount = 100;
  useEffect(() => {
    setIsClient(true);
    if(orderItems){
      const modifiedItems = JSON.parse(orderItems || "")
      setOrderItems(modifiedItems)
    }
  }, [orderItems]);

  return (
    <div className="w-full min-h-36 py-4 px-8 bg-white  border rounded-md flex flex-col gap-4">
      <div className="w-full flex flex-col gap-2">
        {isClient && orderedItems &&
          orderedItems.length > 0 &&
          orderedItems.map((item) => (
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
                  {(item.quantity * (item.bulk_price || 0)).toLocaleString()}
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

      <Button
        onClick={downloadInvoice}
        className="mt-3 flex items-center justify-center"
      >
        {/* {orderLoading ? <Loader className="animate-spin" /> : "Download Invoice"} */}
        Download Invoice
      </Button>
    </div>
  );
};
export default SuccessItems;
