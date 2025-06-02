"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ChevronRight,
  Heart,
  LogOut,
  Menu,
  ShoppingCart,
  User,
  X,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "@/lib/store";
import AuthPopUp from "../auth-popup";
import Home from "../icons/home";
import Login from "../icons/login";
import Discount from "../icons/discount";
import { usePathname, useRouter } from "next/navigation";
import { set } from "react-hook-form";
import Cart from "../icons/cart";

export function MobileNavSheet() {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const pathname = usePathname();
  const cartItemCount = cartItems.length;
  const [shouldScroll, setShouldScroll] = useState(false);
  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/session", {
        method: "DELETE",
        credentials: "include",
      });

      if (response.ok) {
        console.log("Logout successful");
        window.location.reload();
      } else {
        const data = await response.json();
        console.error("Logout failed:", data.message);
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  useEffect(() => {
    setIsClient(true);
    const fetchSession = async () => {
      try {
        const response = await fetch("/api/auth/session", {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
          const data = await response.json();
          setIsLoggedIn(data.isLoggedIn || false);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Error fetching session:", error);
        setIsLoggedIn(false);
      }
    };

    fetchSession();
  }, []);
  useEffect(() => {}, [dispatch]);
  const handleSheetClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (shouldScroll && pathname === "/home") {
      const section = document.getElementById("top-saver-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setShouldScroll(false);
      }
    }
  }, [pathname, shouldScroll]);

  const scrollToTopSaver = () => {
    setIsOpen(false);
    if (pathname === "/home") {
      // If already on homepage, scroll immediately
      const topSaverSection = document.getElementById("top-saver-section");
      if (topSaverSection) {
        topSaverSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setShouldScroll(true);
      router.push("/home");
    }
  };

  const handleCartClick = () => {
    setIsOpen(false);
    router.push("/cart");}

  return (
    <Sheet open={isOpen}>
      <SheetTrigger asChild>
        <div onClick={() => setIsOpen(true)}>
          <Menu size={25} color="#39AF9D" />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <div className="h-6"></div>
          </SheetTitle>
          <div
            onClick={handleSheetClose}
            className="absolute  right-4 top-2 p-1 flex justify-center items-center rounded-full"
          >
            <X />
          </div>
        </SheetHeader>
        {/* <div className="w-full h-12 flex items-center justify-center border-b border-secondary_color">
          <h2 className="font-semibold text-xl text-clip pb-3">
            NatSay.com.mm
          </h2>
        </div> */}
        {/* <div className="h-10 w-full mt-6 rounded-full px-2 py-4 bg-secondary_color flex items-center justify-center">
          <h3 className="w-full text-left ml-2 font-bold text-white">
            Account
          </h3>
        </div> */}
        <div className="w-full flex flex-col gap-2 mt-2 pb-4 border-b">
          <div
            onClick={handleSheetClose}
            className="w-full flex flex-row items-center justify-between py-2  px-2"
          >
            <div className="flex flex-row gap-4">
              <div>
                <Home height="20" width="20" color="black" />
              </div>
              <span>Home</span>
            </div>
            <div>
              <ChevronRight size={20} />
            </div>
          </div>
          <div
            onClick={handleCartClick}
            className="w-full flex flex-row items-center justify-between py-2  px-2"
          >
            <div className="flex flex-row gap-4">
              <div className="flex flex-row items-center gap-2">
                <Cart height="20" width="20" color="black" />
                <div className="flex flex-row items-center gap-3">
                  <span>Cart</span>
                 {cartItemCount !==0 && <div className="min-w-6 min-h-6 rounded-full bg-red-400 text-white text-sm flex items-center justify-center">{cartItemCount}</div>} 
                </div>
              </div>
              
            </div>
            <div>
              <ChevronRight size={20} />
            </div>
          </div>
          <div
            onClick={scrollToTopSaver}
            className="w-full flex flex-row items-center justify-between py-2  px-2"
          >
            <div className="flex flex-row gap-4">
              <div>
                <Discount height="20" width="20" color="black" />
              </div>
              <span>Special Discount</span>
            </div>
            <div>
              <ChevronRight size={20} />
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-between py-2 px-2">
            {isClient && isLoggedIn ? (
              <div onClick={handleLogout} className="flex flex-row gap-4">
                <LogOut size={20} />
                Logout
              </div>
            ) : (
              <div className="flex flex-row gap-4">
                <Login width="20" height="20" />
                <AuthPopUp />
              </div>
            )}
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
