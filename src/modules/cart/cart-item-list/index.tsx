"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { CartItem, clearCart } from "@/lib/features/cart/cartSlice";
import { RootState } from "@/lib/store";
import { ArrowLeft, TicketPercent, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IndividualCartItem from "../cart-item";
import { useGetProducts } from "@/lib/hooks/getQuery/useGetproduct";
import { ProductReel } from "@/modules/common/product-reel";
import { Checkbox } from "@/components/ui/checkbox";

const CartItems: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const dispatch = useDispatch();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const allSelected =
    cartItems.length > 0 && selectedItems.length === cartItems.length;
  const calculateTotalPrice = (cartItems: CartItem[]) => {
    return cartItems.reduce((total, item) => {
      const applicablePrice =
        item && item.bulk_price && item.bulk_price > 0
          ? item.bulk_price
          : item.price;
      return total + applicablePrice * item.quantity;
    }, 0);
  };
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      // Select all items
      setSelectedItems(cartItems.map((item) => item.id));
    } else {
      // Deselect all items
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (id: string, checked: boolean) => {
    if (checked) {
      // Add the item to the selected list
      setSelectedItems((prev) => [...prev, id]);
    } else {
      // Remove the item from the selected list
      setSelectedItems((prev) => prev.filter((itemId) => itemId !== id));
    }
  };
  const totalPrice = calculateTotalPrice(cartItems);
  const relatedcategoryId =
    cartItems && cartItems[0] ? cartItems[0].category?.id : null;
  const takeCount = 10;
  const { products, setTake, setFilters } = useGetProducts();
  const relatedProducts = products?.filter(
    (product) => !cartItems.find((cartItem) => cartItem.id === product.id)
  );

  useEffect(() => {
    setTake(takeCount);
    setFilters({
      shop_id: "",
      name: "",
      category: relatedcategoryId,
    });
  }, [setFilters, setTake]);

  useEffect(() => {
    setIsClient(true);
  }, [cartItems]);

  return (
    <section className="w-full flex flex-col items-center">
      <div className="lg:w-4/5 md:w-full flex flex-col">
        <div className="w-full flex flex-row items-center justify-between p-2">
          <div className="w-12 min-h-14 flex items-center justify-center">
            <Checkbox
              checked={allSelected}
              onCheckedChange={(checked) => handleSelectAll(checked as boolean)}
              id="select-all"
            />
          </div>
          <div className="w-full flex flex-row items-center justify-between">
            <span className="min-w-20 text-muted-foreground">Item</span>
            <span className="min-w-20 text-muted-foreground"></span>
            <div className="min-w-28 text-muted-foreground">Discount Price</div>
            <span className="min-w-20 text-muted-foreground">Quantity</span>
            <span className="min-w-28 text-muted-foreground">Total</span>
          </div>
        </div>
        <div className="w-full mt-4 flex flex-col border shadow-lg rounded-md lg:h-[70vh] overflow-auto scrollbar-thin">
          {isClient &&
            cartItems.length > 0 &&
            cartItems.map((item) => {
              return (
                <IndividualCartItem
                  item={item}
                  key={item.id}
                  isSelected={selectedItems.includes(item.id)}
                  onSelect={(checked) => handleSelectItem(item.id, checked)}
                />
              );
            })}
        </div>
        <div className="h-6"></div>
        <Separator className="my-4 border-t border-gray-400" />
        <div className="min-h-16 flex flex-row items-center justify-between">
          <div className="flex flex-row gap-4">
            <Button className="flex flex-row h-8 gap-2 items-center bg-secondary_color text-white rounded-md">
              <ArrowLeft />
              continue shopping
            </Button>
            <Button
              variant="outline"
              onClick={() => dispatch(clearCart())}
              className="flex flex-row h-8 gap-2 items-center text-secondary_color rounded-md"
            >
              <X />
              clear shopping cart
            </Button>
          </div>
          <div className="flex flex-row gap-4 items-center lg:mr-12">
            <span className="text-secondary_color text-sm:">Subtotal</span>
            {isClient && (
              <span className="font-semibold">
                MMK
                {totalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
        <Separator className="my-4 border-t border-gray-400" />
        <div className="w-full lg:py-12 md:py-10 flex items-center justify-center">
          <div className="w-full max-w-[33rem] min-h-24 flex flex-col gap-4">
            <p className="text-center text-sm text-muted-foreground leading-6">
              To enjoy exclusive savings on your purchase, please enter your
              discount coupon code if you have one available. Make sure to check
              for any expiration dates or specific terms associated with your
              coupon!{" "}
            </p>
            <div className="w-full relative lg:mt-8 md:mt-8 mt-4">
              <Input
                className="w-full h-10 rounded-md bg-secondary_color/20 pr-24 pl-4 focus-visible:ring-offset-0 focus-visible:ring-0"
                placeholder="Enter cupon code"
              />
              <div className="absolute right-2.5 top-[0.5rem] flex flex-row items-center gap-4">
                <div>
                  <TicketPercent color="black" strokeWidth={1.25} />
                </div>
                <Button
                  className="rounded-lg border-none h-6 text-sm text-secondary_color"
                  variant="outline"
                >
                  Apply Cupon
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Separator className="my-4 border-t border-gray-400" />
        <div className="flex items-center justify-center mt-8">
          <Button className="rounded-md min-h-6 min-w-10 bg-secondary_color text-white">
            Proceed to checkout (
            {isClient && cartItems.length > 0 ? cartItems.length : 0})
          </Button>
        </div>
      </div>
      <div className="w-full min-h-32">
        <ProductReel products={relatedProducts || []} />
      </div>
    </section>
  );
};
export default CartItems;
