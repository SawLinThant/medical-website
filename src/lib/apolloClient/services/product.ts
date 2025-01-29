import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { UPDATE_PRODUCT } from "../mutation/productMutation";

export interface Product {
  id: string;
  name: string;
  price: number;
  bulk_price: number;
  quantity: number;
  description: string;
  dosage: string;
  usage: string;
  storage: string;
  category_id: string;
  updated_at: string;
  images: ProductImage[];
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
): Promise<Product | null> => {
  try {
    const { data } = await client.mutate({
      mutation: UPDATE_PRODUCT,
      variables: {
        id: input.id, 
        input: { quantity: input.quantity }, 
      },
    });

    return data?.update_products_by_pk ?? null; 
  } catch (error: any) {
    console.error("Error updating product quantity:", error.message || error);
    return null;
  }
};
