import { GET_FILTERED_PRODUCTS, GET_PRODUCT_BY_ID } from "@/lib/apolloClient/query/productQuery";
import { Product } from "@/lib/types/global";
import { useQuery } from "@apollo/client";
import { useMemo, useState } from "react";

interface GetProductsByIdResponse {
    products: Product[];
  }
  
  interface UseGetProductByIdReturn {
    product: Product | null;
    loadingProduct: boolean;
    error: Error | undefined;
    refetchProduct: any
  }
  
  export const useGetProductById = (id: string): UseGetProductByIdReturn => {
    const { data, loading: loadingProduct, error, refetch: refetchProduct } = useQuery<GetProductsByIdResponse>(
      GET_PRODUCT_BY_ID,
      {
        variables: { id },
        skip: !id,
      }
    );
  
    const product = data?.products?.[0] || null;
  
    return { product, loadingProduct, error, refetchProduct };
  };

  interface FilterType {
    shop_id?: string;
    name?: string;
    category?: string;
    priceRange?: { start_price: number; end_price: number };
  }

  interface UseGetProductsReturn {
    products: Product[] | null;
    loadingProducts: boolean;
    filters: FilterType;
    setFilters: any;
    page: number;
    setPage: any;
    take:number;
    setTake: any;
    totalCount: number
    error: Error | undefined;
    refetchProducts: any
  }

  export const useGetProducts = ():UseGetProductsReturn => {
    const [filters, setFilters] = useState<{
      shop_id?: string;
      name?: string;
      category?: string;
      priceRange?: { start_price: number; end_price: number };
    }>({});
    const [page, setPage] = useState<number>(1);
    const [take, setTake] = useState<number>(10);
  
    const skip = useMemo(() => (page - 1) * take, [page, take]);
  
    const where = useMemo(() => {
      const conditions: any = {};
      if(filters.shop_id){
        conditions.shop_id =  {_eq: filters.shop_id};
      }
      if (filters.name) {
        conditions.name = { _ilike: `%${filters.name}%` };
      }
      if (filters.category) {
        conditions.category = { id: { _eq: filters.category } };
      }
      if (filters.priceRange) {
        conditions.price = {
          _gte: filters.priceRange.start_price,
          _lte: filters.priceRange.end_price,
        };
      }
  
  
      return Object.keys(conditions).length > 0 ? conditions : undefined;
    }, [filters]);
  
    const { data, loading:loadingProducts, error, refetch: refetchProducts } = useQuery(GET_FILTERED_PRODUCTS, {
      variables: {
        where,
        offset: skip,
        limit: take,
      },
      fetchPolicy: "network-only",
    });
  
    const products = data?.products || [];
    const totalCount = data?.products_aggregate?.aggregate?.count || 1;
  
    return {
      products,
      loadingProducts,
      error,
      filters,
      setFilters, 
      page,
      setPage,
      take,
      setTake,
      totalCount,
      refetchProducts
    };
  };