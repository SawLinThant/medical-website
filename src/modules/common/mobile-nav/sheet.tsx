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

export function MobileNavSheet() {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
  useEffect(() => {
  }, [dispatch]);
  const handleSheetClose = () => {
    setIsOpen(false);
  };
  return (
    <Sheet open={isOpen}>
      <SheetTrigger asChild>
        <div onClick={() => setIsOpen(true)}>
          <Menu size={25} color="white" />
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
        <div className="w-full h-12 flex items-center justify-center border-b border-secondary_color">
          <h2 className="font-semibold text-xl text-clip pb-3">
            NatSay.com.mm
          </h2>
        </div>
        <div className="h-10 w-full mt-6 rounded-full px-2 py-4 bg-secondary_color flex items-center justify-center">
          <h3 className="w-full text-left ml-2 font-bold text-white">
            Account
          </h3>
        </div>
        <div className="w-full flex flex-col gap-2 mt-2 pb-4 border-b">
          <div
            onClick={handleSheetClose}
            className="w-full flex flex-row items-center justify-between py-2  px-2"
          >
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
          <div className="w-full flex flex-row items-center justify-between py-2 px-2">
            {isClient && isLoggedIn ? (
              <div onClick={handleLogout} className="flex flex-row gap-4">
                <LogOut size={20} />
                Logout
              </div>
            ) : (
              <div className="flex flex-row gap-4">
                <User size={20} />
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
