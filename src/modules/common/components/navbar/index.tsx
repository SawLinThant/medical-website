"use client"

import { Heart, ShoppingCart, User } from "lucide-react";
import SearchForm from "../../search-form";

const NavBar: React.FC = () => {
  return (
    <header className="w-full h-[6rem] border-b md:hidden hidden lg:flex items-center justify-center px-4 py-6">
      <div className="w-full min-h-[4rem] max-w-[1300px] md:hidden hidden lg:flex flex-row items-center justify-between">
        <div className="min-w-[10rem] h-full flex flex-row items-center gap-2">
          <div className="min-w-28 bg-gray-200 rounded-md h-16 flex items-center justify-center">
            <h1 className="font-bold text-xl font-mono">NS</h1>
          </div>
          <h2 className="font-bold text-lg">Natsay.com.mm</h2>
        </div>
        <div className="rounded-md border-r h-[2.5rem]">
            <SearchForm/>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="flex flex-row gap-2 items-center min-w-[7rem] h-full justify-end">
            <User size={20} />
            <div className="text-sm h-full mt-1">SighUp/Login</div>
          </div>
          <div className="flex flex-row gap-2 items-center min-w-[7rem] h-full justify-end">
            <Heart size={20} />
            <div className="text-sm h-full mt-1">Favourites</div>
          </div>
          <div className="flex flex-row gap-2 items-center min-w-[5rem] h-full justify-end">
            <ShoppingCart size={20} />
            <div className="text-sm h-full mt-1">My Cart</div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default NavBar;
