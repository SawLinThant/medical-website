"use client";

import { Input } from "@/components/ui/input";
import { Search, ShoppingCart } from "lucide-react";
import { MobileNavSheet } from "./sheet";
import SearchForm from "../search-form";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const MobileNav: React.FC = () => {
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const cartItemCount = cartItems.length;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const queryParams = new URLSearchParams();
    
    if (searchTerm.trim()) {
      queryParams.append("name", searchTerm.trim());
    }

    const queryString = queryParams.toString();
    router.push(`/product/list${queryString ? `?${queryString}` : ""}`);
  };
  return (
    <nav className="w-full h-full px-4 pt-5 pb-4 lg:hidden block bg-secondary_color">
      <div className="w-full md:flex hidden flex-row items-center justify-between gap-3">
        <div className="block">
          <SearchForm />
        </div>
        <MobileNavSheet />
      </div>
      <div className="w-full md:hidden flex flex-row items-center justify-between gap-3">
        {!isSearch ? (
          <div className="w-full flex flex-row items-center justify-between gap-3">
            <div className="flex flex-row items-center h-full gap-2">
              <h2
                onClick={() => router.push("/home")}
                className="text-white font-bold text-lg"
              >
                NatSay
              </h2>
            </div>
            <div className="flex flex-row items-center gap-6">
                <div onClick={() => setIsSearch(!isSearch)} className="">
                    <Search size={20} color="white"/>
                </div>
              <div
                onClick={() => router.push("/cart")}
                className="relative flex flex-row gap-2 items-center h-full justify-end hover:cursor-pointer text-white"
              >
                <ShoppingCart size={20} />
                {isClient && cartItemCount > 0 && (
                  <span className="absolute top-0 right-0 -translate-y-4 translate-x-3 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </div>
              <MobileNavSheet />
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-row items-center justify-between gap-3">
            <div className="relative block w-full md:hidden">
              <Input
               onChange={(e) => setSearchTerm(e.target.value)}
                className="h-11 w-full pl-12 border rounded-md focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="Search Products "
              />
              <div onClick={handleSubmit} className="absolute top-2 left-3">
                <Search size={25} />
              </div>
            </div>
            <Button onClick={() => setIsSearch(!isSearch)} variant="outline" className="font-semibold border-none bg-transparent text-white">
              Cancel
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
export default MobileNav;
