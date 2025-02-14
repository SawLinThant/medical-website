"use client";

import { MATCH_FILTER } from "@/lib/constant/options";
import Dropdown from "@/modules/common/dropdown/zone-dropdown";
import { useState } from "react";
import ProductCard from "../product-card";
import { Product } from "@/lib/apolloClient/services/product";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/features/cart/cartSlice";
import { toast } from "@/hooks/use-toast";

interface ProductListProps {
  name?: string;
  category?: string;
  products: Product[];
  totalPages: number;
  currentPage: number;
  itemPerPage: number;
}

const ProductList: React.FC<ProductListProps> = ({
  name,
  category,
  products,
  totalPages,
  currentPage,
  itemPerPage,
}) => {
  
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();

  const handleAddToCart = (product:Product) => {
    const quantity = 1
    dispatch(addToCart({...product,quantity}))
    toast({
      description:"Item added to the cart"
    })
  }

  const handleSortChange = (sort: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", sort);
    router.push(`?${params.toString()}`);
  };

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("offset", String((newPage - 1) * itemPerPage));
    router.push(`?${params.toString()}`);
  };
  const getVisiblePages = () => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    
    if (currentPage <= 2) {
      return [1, 2, 3, '...', totalPages];
    }
    
    if (currentPage >= totalPages - 1) {
      return [1, '...', totalPages - 2, totalPages - 1, totalPages];
    }
    
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };
  return (
    <div className="w-full flex flex-col mt-6">
      <div className="w-full flex lg:flex-row md:flex-row flex-col gap-4 min-h-28 items-center justify-between pb-4 border-b border-gray-300">
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-subheading">{name === "" ? category : name}</h1>
          <span className="text-muted-foreground text-sm">
            {products.length} item(s) found for {name === "" ? category : name}
          </span>
        </div>
        <div className="min-w-32 flex flex-row items-center w-full justify-end">
          <span className="text-sm text-muted-foreground w-[70px]">
            Sort By
          </span>
          <div className="min-w-32">
            <Dropdown
              options={MATCH_FILTER}
              setCategory={handleSortChange}
              label="Best Match"
            />
          </div>
        </div>
      </div>
      <div className="w-full grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 mt-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full h-full flex items-center justify-center p-4"
          >
            <div className="w-full hover:scale-105 transition-all duration-200">
              <ProductCard
              addToCart={() =>handleAddToCart(product)}
                name={product.name}
                price={product.price}
                image={product.images?.[0].image_url}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center gap-2 mt-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-2 border rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft/>
        </button>

        {getVisiblePages().map((page, index) => {
          if (page === '...') {
            return (
              <span 
                key={`ellipsis-${index}`} 
                className="px-4 py-2 cursor-default"
              >
                ...
              </span>
            );
          }
          
          return (
            <button
              key={page}
              onClick={() => handlePageChange(Number(page))}
              className={`px-4 py-2 border rounded-md ${
                currentPage === page 
                  ? "bg-secondary_color/90 text-white" 
                  : "hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-2 py-2 border rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
         <ChevronRight/>
        </button>
      </div>
    </div>
  );
};
export default ProductList;
