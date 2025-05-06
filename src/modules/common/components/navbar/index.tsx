"use client";

import { Heart, ShoppingCart, User } from "lucide-react";
import SearchForm from "../../search-form";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import AuthPopUp from "../../auth-popup";
import { ProfileHoverCard } from "../../hover/profile";
import Home from "../../icons/home";
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
        <div className="min-w-[10rem] flex flex-col justify-center items-center">
          <div
            onClick={() => router.push("/")}
            className="min-w-28 relative bg-transparent rounded-md h-10 flex items-center justify-center hover:cursor-pointer"
          >
            <Image
              width={60}
              height={40}
              alt="logo"
              src="/images/logo.png"
              className="object-contain"
            />
          </div>
          <h2 className="font-bold">Natsay.com.mm</h2>
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

          <div
          onClick={() => router.push("/")}
          className="flex flex-row gap-2 items-center min-w-[7rem] h-full justify-center hover:cursor-pointer">
            <Home height="20" width="20" color="black" />
            <div className="text-sm h-full mt-1">Home</div>
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
