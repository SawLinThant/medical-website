import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { UPDATE_PRODUCT } from "../mutation/productMutation";
import { GET_PRODUCT_QUANTITY_BY_ID } from "../query/productQuery";

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
