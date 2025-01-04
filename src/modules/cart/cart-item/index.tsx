import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import {
  addToCart,
  CartItem,
  removeItemByOne,
} from "@/lib/features/cart/cartSlice";
import { useGetProductById } from "@/lib/hooks/getQuery/useGetproduct";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";

interface IndividualCartItemProps {
  item: CartItem;
  isSelected: boolean;
  onSelect: (checked: boolean) => void;
}

const IndividualCartItem = ({
  item,
  isSelected,
  onSelect,
}: IndividualCartItemProps) => {
  const { product: fetchedProduct, loadingProduct } = useGetProductById(
    item.id
  );
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (loadingProduct) return;

    const currentQuantity = item.quantity;
    if (fetchedProduct && currentQuantity + 1 > fetchedProduct.quantity) {
      toast({
        description: "Cannot add more items than available in stock.",
      });
      return;
    }

    dispatch(addToCart({ ...item, quantity: 1 }));
  };

  return (
    <div>
      <div
        key={item.id}
        className={cn(
          "w-full lg:flex md:flex hidden flex-row items-center justify-between px-2 py-6 hover:bg-slate-200",
          {
            "bg-slate-200": isSelected,
          }
        )}
      >
        <div className="w-12 min-h-14 items-center justify-center lg:flex md:flex hidden">
          <Checkbox
            checked={isSelected}
            onCheckedChange={(checked) => onSelect(checked as boolean)}
            id={item.id}
          />
        </div>
        <div className="w-full flex lg:flex-row md:flex-row flex-col items-center justify-between">
          <div className="text-muted-foreground text-lg">
            <div className="h-full w-full flex items-center justify-start">
              <div className="md:w-20 lg:w-20 w-[10rem] lg:h-14 md:h-14 h-20 relative">
                <Image
                  layout="fill"
                  alt="product"
                  src={
                    item?.images?.[0].image_url ||
                    "/images/image_placeholder.jpg"
                  }
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="min-w-20 flex flex-col items-start justify-center gap-2">
            <span className="font-semibold">Product</span>
            <div className="flex flex-row gap-2 items-center justify-start">
              <span className="text-muted-foreground text-left text-sm">
                Brand:
              </span>
              <span className="text-sm">No Brand</span>
            </div>
          </div>
          <span className="w-28 max-w-28 text-muted-foreground text-lg">
            <div className="w-full flex items-center justify-start gap-2 text-muted-foreground">
              <span className="text-sm">
                MMK {item.bulk_price?.toLocaleString()}
              </span>
              <span className="line-through  text-xs">
                MMK {item.price.toLocaleString()}
              </span>
            </div>
          </span>
          <div className="min-w-20 text-muted-foreground text-lg">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row flex-shrink-0 w-28 max-w-28 border items-center border-gray-400 rounded">
                <Button
                  onClick={() => dispatch(removeItemByOne(item.id))}
                  className="h-full w-1/3 rounded-r-none rounded-l bg-transparent border-r hover:bg-secondary_color hover:text-white text-black"
                >
                  -
                </Button>
                <div className="w-1/3 h-full text-center flex items-center justify-center">
                  <span className="text-sm">{item.quantity}</span>
                </div>
                <Button
                  onClick={handleAddToCart}
                  className="h-full w-1/3 bg-transparent rounded-l-none border-l text-black hover:bg-secondary_color hover:text-white rounded-r"
                >
                  +
                </Button>
              </div>
            </div>
          </div>
          <span className="min-w-28 text-muted-foreground text-sm">
            MMK{" "}
            {(
              (item.bulk_price && item.bulk_price > 0
                ? item.bulk_price
                : item.price) * item.quantity
            ).toLocaleString()}
          </span>
        </div>
      </div>
      <div className="w-full lg:hidden md:hidden flex flex-col min-h-28 p-3">
        <div className="w-full h-full flex flex-row gap-4 py-3">
          <div className="flex flex-row items-start h-full">
            <div className="w-12 min-h-14 items-center justify-center flex">
              <Checkbox
                checked={isSelected}
                onCheckedChange={(checked) => onSelect(checked as boolean)}
                id={item.id}
              />
            </div>
            <div className="w-24 h-20 relative">
              <Image
                layout="fill"
                alt="product"
                src={
                  item?.images?.[0].image_url || "/images/image_placeholder.jpg"
                }
                className="object-cotain bg-white"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 justify-start">
            <h2 className="font-semibold">{item.name}</h2>
            <span className="text-muted-foreground text-xs">
              Brand: <span className="text-secondary_color">No brand</span>
            </span>
            <div className="w-full mt-2 flex items-center justify-start gap-2 text-muted-foreground">
              <span className="text-sm">
                MMK {item.bulk_price?.toLocaleString()}
              </span>
              <span className="line-through  text-xs">
                MMK {item.price.toLocaleString()}
              </span>
            </div>
            <span className="text-sm">
              Total MMK {" "}
              {(
                (item.bulk_price && item.bulk_price > 0
                  ? item.bulk_price
                  : item.price) * item.quantity
              ).toLocaleString()}
            </span>
            <div className="flex flex-row flex-shrink-0 w-28 max-w-28 border items-center border-gray-400 rounded mt-3">
              <Button
                onClick={() => dispatch(removeItemByOne(item.id))}
                className="h-full w-1/3 rounded-r-none rounded-l bg-transparent border-r hover:bg-secondary_color hover:text-white text-black"
              >
                -
              </Button>
              <div className="w-1/3 h-full text-center flex items-center justify-center">
                <span className="text-sm">{item.quantity}</span>
              </div>
              <Button
                onClick={handleAddToCart}
                className="h-full w-1/3 bg-transparent rounded-l-none border-l text-black hover:bg-secondary_color hover:text-white rounded-r"
              >
                +
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualCartItem;
