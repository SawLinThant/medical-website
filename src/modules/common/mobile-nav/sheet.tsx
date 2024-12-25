import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronRight, Heart, Menu, ShoppingCart, User } from "lucide-react";

export function MobileNavSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <div className="h-6"></div>
          </SheetTitle>
        </SheetHeader>
        <div className="w-full h-12 flex items-center justify-center border-b border-secondary_color">
          <h2 className="font-semibold text-xl text-clip pb-3">NatSay.com.mm</h2>
        </div>
        <div className="h-10 w-full mt-6 rounded-full px-2 py-4 bg-secondary_color flex items-center justify-center">
            <h3 className="w-full text-left ml-2 font-bold text-white">Account</h3>
        </div>
        <div className="w-full flex flex-col gap-2 mt-2 pb-4 border-b">
          <div className="w-full flex flex-row items-center justify-between py-2 px-2">
            <div className="flex flex-row gap-4">
              <div>
                <User size={20} />
              </div>
              <span>SighUp/Login</span>
            </div>
            <div>
              <ChevronRight size={20} />
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-between py-2  px-2">
            <div className="flex flex-row gap-4">
              <div>
              <Heart size={20} />
              </div>
              <span>Favourites</span>
            </div>
            <div>
              <ChevronRight size={20} />
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-between py-2 4 px-2">
            <div className="flex flex-row gap-4">
              <div>
              <ShoppingCart size={20} />
              </div>
              <span>My Cart</span>
            </div>
            <div>
              <ChevronRight size={20} />
            </div>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
