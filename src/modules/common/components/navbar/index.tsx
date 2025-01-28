"use client";

import { Heart, LogOut, ShoppingCart, User } from "lucide-react";
import SearchForm from "../../search-form";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import AuthPopUp from "../../auth-popup";
import { ProfileHoverCard } from "../../hover/profile";
//import { clearToken, initializeFromLocalStorage} from "@/lib/features/account/accountSlice";

const NavBar: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
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
  const cartItemCount = cartItems.length;
  return (
    <header className="w-full h-[6rem] border-b border-gray-300 md:hidden hidden lg:flex items-center justify-center px-4 py-6">
      <div className="w-full min-h-[4rem] max-w-[1300px] md:hidden hidden lg:flex flex-row items-center justify-between">
        <div className="min-w-[10rem] h-full flex flex-row items-center gap-2">
          <div
            onClick={() => router.push("/")}
            className="min-w-28 relative bg-transparent rounded-md h-16 flex items-center justify-center hover:cursor-pointer"
          >
            <Image
              width={60}
              height={40}
              alt="logo"
              src="/images/logo.png"
              className="object-contain"
            />
          </div>
          <h2 className="font-bold text-lg">Natsay.com.mm</h2>
        </div>
        <div className="rounded-md border-r h-[2.5rem]">
          <SearchForm />
        </div>
        <div className="flex flex-row items-center gap-4">
          {isClient && isLoggedIn ? (
            <ProfileHoverCard/>
          ) : (
            <div className="flex flex-row gap-2 items-center min-w-[7rem] h-full justify-end">
              <User size={20} />
              <AuthPopUp />
            </div>
          )}

          <div className="flex flex-row gap-2 items-center min-w-[7rem] h-full justify-end">
            <Heart size={20} />
            <div className="text-sm h-full mt-1">Favourites</div>
          </div>
          <div
            onClick={() => router.push("/cart")}
            className="relative flex flex-row gap-2 items-center min-w-[5rem] h-full justify-end hover:cursor-pointer"
          >
            <ShoppingCart size={20} />
            {isClient && cartItemCount > 0 && (
              <span className="absolute top-0 right-0 -translate-y-4 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
            <div className="text-sm h-full mt-1">My Cart</div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default NavBar;
