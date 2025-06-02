"use client";

import serverApolloClient from "@/lib/apolloClient/serverApolloClient";
import { Category, getCategories } from "@/lib/apolloClient/services/category";
import {
  getFilteredProducts,
  Product,
} from "@/lib/apolloClient/services/product";
import ProductCard from "@/modules/common/related-prduct-card";
import { ProductSkeleton } from "@/modules/common/skeleton/product-skeleton";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ShopFilteredProductsProps {
  shopId: string;
}

const ShopFilteredProducts: React.FC<ShopFilteredProductsProps> = ({
  shopId,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const itemPerPage = 15;
  const [offset, setOffset] = useState<number>(0);

  const currentPage = Math.floor(offset / itemPerPage) + 1;
  const totalPages = Math.ceil(totalCount / itemPerPage);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const result = await getCategories(serverApolloClient);
        const allCategory = { id: "", name: "All" }; 
        setCategories([allCategory, ...result.categories]);
        //setCategories(result.categories);
      } catch (err: any) {
        setError(err.message || "Failed to fetch categories");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const nameFromUrl = searchParams.get("name") || "";
    const offsetFromUrl = parseInt(searchParams.get("offset") || "0", 10);
    setSearchTerm(nameFromUrl);
    setOffset(offsetFromUrl);
  }, [searchParams]);

  // Fetch filtered products
  useEffect(() => {
    const fetchFilteredProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const where: Record<string, any> = {};
        if (shopId) {
          where.shop = { id: { _eq: shopId } };
        }
        if (selectedCategory !== "") {
          where.category_id = { _eq: selectedCategory };
        }
        if (searchTerm) {
          where.name = { _ilike: `%${searchTerm}%` }; 
        }

        const orderBy: Record<string, any> = { created_at: "desc" };

        const response = await getFilteredProducts(serverApolloClient, {
          where,
          offset,
          limit: itemPerPage,
          orderBy,
        });

        setProducts(response.products);
        setTotalCount(response.count);
      } catch (err: any) {
        setError(err.message || "Failed to fetch products");
        setProducts([]);
        setTotalCount(0);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredProducts();
  }, [shopId, selectedCategory, searchTerm, offset]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    setOffset(0); 
    const params = new URLSearchParams(searchParams);
    params.set("name", newSearchTerm);
    params.set("offset", "0");
    router.push(`?${params.toString()}`);
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setOffset(0); 
    const params = new URLSearchParams(searchParams);
    params.set("name", searchTerm);
    params.set("offset", "0");
    router.push(`?${params.toString()}`);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    const newOffset = (newPage - 1) * itemPerPage;
    setOffset(newOffset);
    const params = new URLSearchParams(searchParams);
    params.set("offset", newOffset.toString());
    router.push(`?${params.toString()}`);
  };

  const getVisiblePages = () => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 2) {
      return [1, 2, 3, "...", totalPages];
    }
    if (currentPage >= totalPages - 1) {
      return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
  };

  return (
    <section className="w-full flex flex-col">
      <div className="w-full px-0">
        <div className="w-full flex flex-col">
          <div className="flex md:flex-row lg:flex-row flex-col justify-between gap-4">
            <div className="flex lg:flex-row md:flex-row flex-col gap-4 order-2 md:order-1 lg:order-1">
              {/* <h2 className="font-semibold min-w-[7rem]">Filtered By</h2> */}
              <div className="flex flex-wrap gap-4">
                {loading && !categories.length ? (
                  <span className="text-muted-foreground text-sm">Loading categories...</span>
                ) : error ? (
                  <span className="text-red-500 text-sm">{error}</span>
                ) : categories.length > 0 ? (
                  categories.map((category) => (
                    <span
                      onClick={() => handleCategorySelect(category.id)}
                      key={category.id || "all"}
                      className={` text-sm hover:cursor-pointer text-muted-foreground ${
                        selectedCategory === category.id ? "font-bold border shadow-md p-2 rounded-md -translate-y-2" : ""
                      }`}
                    >
                      {category.name}
                    </span>
                  ))
                ) : (
                  <span className="text-muted-foreground text-sm">No categories found</span>
                )}
              </div>
            </div>
            <div className="order-1 md:order-2 lg:order-2">
              <div className="relative lg:w-[20rem] md:w-[15rem] w-full">
                <input
                  type="text"
                  placeholder="Search in AA Medical Products Ltd"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full max-w-lg p-2 pl-2 pr-8 border rounded-lg text-gray-700 bg-gray-200 focus:outline-none focus:ring-2"
                />
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Search />
                </span>
              </div>
            </div>
          </div>
          {loading && !products.length ? (
            <div className="w-full mt-4">
              <ProductSkeleton />
            </div>
          ) : error ? (
            <div className="w-full mt-4 text-red-500 text-sm">{error}</div>
          ) : (
            <div className="w-full grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 mt-4 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
          {totalPages > 1 && (
            <div className="w-full flex justify-center gap-2 mt-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-2 py-2 border rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft />
              </button>
              {getVisiblePages().map((pageNum, index) => {
                if (pageNum === "...") {
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
                    key={pageNum}
                    onClick={() => handlePageChange(Number(pageNum))}
                    className={`px-4 py-2 border rounded-md ${
                      currentPage === pageNum
                        ? "bg-secondary_color/90 text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-2 py-2 border rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShopFilteredProducts;