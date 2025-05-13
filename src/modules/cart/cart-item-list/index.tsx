"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { CartItem, clearCart } from "@/lib/features/cart/cartSlice";
import { RootState } from "@/lib/store";
import { ArrowLeft, Loader, TicketPercent, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IndividualCartItem from "../cart-item";
import { useGetProducts } from "@/lib/hooks/getQuery/useGetproduct";
import { ProductReel } from "@/modules/common/product-reel";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { removeOrderSuccessData } from "@/lib/utils";
import { useGetSession } from "@/lib/hooks/useGetSession";
import { toast } from "@/hooks/use-toast";
import { useGetCuponsByCuponNumber } from "@/lib/hooks/getQuery/useGetCupon";

export const calculateTotalPrice = (
  cartItems: CartItem[],
  cuponNumber: string,
  cuponType: string,
  cuponDiscount: number
): number => {
  const baseTotal = cartItems.reduce((total, item) => {
    const applicablePrice =
      item && item.discount_price && item.discount_price > 0
        ? item.discount_price
        : item.price;
    return total + applicablePrice * item.quantity;
  }, 0);

  const taxedTotal = baseTotal + baseTotal * 0.03;

  let finalTotal: number;

  if (cuponNumber && cuponDiscount > 0) {
    if (cuponType === "percentage") {
      finalTotal = taxedTotal - (taxedTotal * cuponDiscount) / 100;
    } else if (cuponType === "fixed") {
      finalTotal = taxedTotal - cuponDiscount;
    } else {
      finalTotal = taxedTotal;
    }
  } else {
    finalTotal = taxedTotal;
  }

  return Math.round(Math.max(0, finalTotal));
};
const CartItems: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const [cuponeNumber, setCuponNumber] = useState<string>("");
  const [cuponType, setCuponType] = useState<string>("");
  const [loadingCupon, setLoadingCupon] = useState(false);
  const [cuponDiscount, setCuponDiscount] = useState<number>(0);
  const { getCupon } = useGetCuponsByCuponNumber();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const { sessionData } = useGetSession();
  const allSelected =
    cartItems.length > 0 && selectedItems.length === cartItems.length;
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedItems(cartItems.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  console.log("cupon discount", cuponDiscount);

  const handleCupon = async (cupon_number: string) => {
    if(cartItems.length < 1){
      toast({
        description: "Please add items to the cart first",
      })
      return;
    }
    try {
      setLoadingCupon(true);
      console.log("begin fetching cupon");
      const cupon = await getCupon(cupon_number);
      if (cupon) {
        if(cupon.expired_date < new Date().toISOString()){
          toast({
            description: "Cupon is expired",
            variant: "destructive",
          });
      }else {
          setCuponDiscount(cupon.value);
          setCuponType(cupon.type);
          const storageDiscount = localStorage.getItem("cuponDiscount");
          if (storageDiscount) {
            localStorage.removeItem("cuponDiscount");
            localStorage.setItem("cuponDiscount", JSON.stringify(cupon.value));
          }else{
            localStorage.setItem("cuponDiscount", JSON.stringify(cupon.value));
          }
          const storageDiscountType = localStorage.getItem("cuponType");
          if (storageDiscountType) {
            localStorage.removeItem("cuponType");
            localStorage.setItem("cuponType", cupon.type);
          }else{
            localStorage.setItem("cuponType", cupon.type);
          }
      }
    }else{
      toast({
        description: "Invalid cupon",
        variant: "destructive",
      })
    }
    } catch (err) {
      console.error("Error fetching cupon:", err);
      toast({
        description: "Failed to apply cupon",
        variant: "destructive",
      });
    } finally {
      setLoadingCupon(false);
    }
  };

  const handleCheckout = () => {
    if (sessionData?.token) {
      router.push("/checkout");
    } else {
      toast({
        description: "Please Login First",
      });
    }
  };

  const handleSelectItem = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedItems((prev) => [...prev, id]);
    } else {
      setSelectedItems((prev) => prev.filter((itemId) => itemId !== id));
    }
  };
  const totalPrice = calculateTotalPrice(cartItems, cuponeNumber, cuponType, cuponDiscount);
  const relatedcategoryId =
    cartItems && cartItems[0] ? cartItems[0].category?.id : null;
  const takeCount = 10;
  const { products, setTake, setFilters } = useGetProducts();
  const relatedProducts = products?.filter(
    (product) => !cartItems.find((cartItem) => cartItem.id === product.id)
  );

    useEffect(() => {
      const storageTotalPrice = localStorage.getItem("totalPrice");
     if(storageTotalPrice){
      localStorage.removeItem("totalPrice");
      localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
     }else{
      localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
     }
  }, [cartItems,totalPrice]);

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
    removeOrderSuccessData();
  }, [cartItems]);

  return (
    <section className="w-full flex flex-col items-center">
      <div className="lg:w-4/5 md:w-full w-full flex flex-col">
        <div className="w-full lg:flex md:flex hidden flex-row items-center justify-between p-2">
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
        <div className="w-full flex lg:hidden md:hidden flex-row items-center justify-start px-3">
          <div className="min-w-12 min-h-14 flex flex-row items-center justify-center">
            <Checkbox
              checked={allSelected}
              onCheckedChange={(checked) => handleSelectAll(checked as boolean)}
              id="select-all"
            />
          </div>
          <span>All</span>
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
          {isClient && cartItems.length < 1 ? (
            <div className="w-full lg:h-full md:h-full h-20 flex lg:flex-row md:flex-row flex-col items-center justify-center lg:gap-3 md:gap-3">
              <h2 className="text-secondary_color">No item in the cart!</h2>
              <span
                onClick={() => router.push("/home")}
                className="underline text-blue-500 hover:cursor-pointer"
              >
                Shop Now
              </span>
            </div>
          ) : null}
        </div>
        <div className="h-6"></div>
        <Separator className="my-4 border-t border-gray-400" />
        <div className="min-h-16 flex lg:flex-row md:flex-row flex-col items-center justify-between lg:gap-0 md:gap-0 gap-6">
          <div className="flex lg:flex-row md:flex-row flex-col lg:gap-4 md:gap-4 gap-2">
            <Button
              onClick={() => router.push("/home")}
              className="flex flex-row h-8 gap-2 items-center bg-secondary_color text-white rounded-md"
            >
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
            <span className="text-secondary_color text-sm">Subtotal:</span>
            {isClient && (
              <span className="font-semibold">
                MMK {totalPrice.toLocaleString()}
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
            <div className="w-full text-center text-green-600">
              {(cuponeNumber !== "" && cuponDiscount > 0) ? `${cuponeNumber} is Applied`: ""}
            </div>
            <div className="w-full relative lg:mt-8 md:mt-8 mt-4">
              <Input
                onChange={(e) => setCuponNumber(e.target.value)}
                value={cuponeNumber}
                className="w-full h-10 rounded-md bg-secondary_color/20 pr-24 pl-4 focus-visible:ring-offset-0 focus-visible:ring-0"
                placeholder="Enter cupon code"
              />
              <div className="absolute right-2.5 top-[0.5rem] flex flex-row items-center gap-4">
                <div>
                  <TicketPercent color="black" strokeWidth={1.25} />
                </div>
                <Button
                  onClick={() => handleCupon(cuponeNumber)}
                  className="rounded-lg min-w-[5rem] border-none h-6 text-sm text-secondary_color"
                  variant="outline"
                >
                  {loadingCupon ? (
                    <Loader className="animate-spin" />
                  ) : (
                    "Apply Cupon"
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Separator className="my-4 border-t border-gray-400" />
        <div className="flex items-center justify-center mt-8">
          <Button
            onClick={handleCheckout}
            className="rounded-md min-h-6 min-w-10 bg-secondary_color text-white"
          >
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
