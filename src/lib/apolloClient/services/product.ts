import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { UPDATE_PRODUCT } from "../mutation/productMutation";
import { GET_FILTERED_PRODUCTS, GET_PRODUCT_QUANTITY_BY_ID } from "../query/productQuery";
import { Category } from "./category";
import { Shop } from "@/lib/types/global";

export interface Product {
  id: string;
  name: string;
  price: number;
  bulk_price: number;
  quantity: number;
  description: string;
  discount_price: number
  dosage: string;
  usage: string;
  storage: string;
  category_id: string;
  updated_at: string;
  images: ProductImage[];
  category: Category
  shop?: Shop
}

export interface ProductImage {
  id: string;
  image_url: string;
}

export interface UpdateProductInput {
  id: string; 
  quantity: number;
}

export const updateProductQuantity = async (
  client: ApolloClient<NormalizedCacheObject>,
  input: UpdateProductInput
): Promise<number | null> => {
  try {
    const { data: productData } = await client.query({
      query: GET_PRODUCT_QUANTITY_BY_ID,
      variables: { id: input.id },
      fetchPolicy: "network-only", 
    });

    if (!productData?.products_by_pk) {
      console.error("Product not found");
      return null;
    }

    const currentQuantity = productData.products_by_pk.quantity;

    const newQuantity = currentQuantity - input.quantity;

    if (newQuantity < 0) {
      console.error("Insufficient stock");
      return null;
    }

    const { data: updateData } = await client.mutate({
      mutation: UPDATE_PRODUCT,
      variables: {
        id: input.id,
        input: { quantity: newQuantity },
      },
    });

    return updateData?.update_products_by_pk?.quantity ?? null;
  } catch (error: any) {
    console.error("Error updating product quantity:", error.message || error);
    return null;
  }
};

interface GetProductsParams {
  where?: Record<string, any>;
  offset?: number;
  limit?: number;
  orderBy?: Record<string, any>
}

export const getFilteredProducts = async(
  client: ApolloClient<NormalizedCacheObject>,
  params: GetProductsParams
):Promise<{products:Product[]; count:number}> => {
  try {
        const { where, offset, limit, orderBy } = params;
    
        if (!GET_FILTERED_PRODUCTS) {
          throw new Error("GraphQL query GET_FILTERED_PRODUCTS is not defined.");
        }
    
        const { data } = await client.query({
          query: GET_FILTERED_PRODUCTS,
          fetchPolicy: "no-cache",
          variables: { where, offset, limit, orderBy },
        });
    
        if (!data) {
          throw new Error("No data returned from GraphQL query.");
        }
        console.log("filterd products",data)
        return {
          products: data.products || [],
          count: data.products_aggregate?.aggregate?.count || 0,
        };
      } catch (error: any) {
        console.error("Error fetching orders:", error.message || error);
        return { products: [], count: 0 };
      }
}