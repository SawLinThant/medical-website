import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { INSERT_ORDER_ITEMS, INSERT_ORDERS } from "../mutation/orderMutation";

interface Order {
  id: string;
  user_id: string;
  status: string;
  total_price: number;
  payment_id: string;
  payment_proof: string
}

export interface InsertOrderInput {
  input: Partial<Omit<Order, "id">>;
}

export const InsertOrder = async (
  client: ApolloClient<NormalizedCacheObject>,
  input: InsertOrderInput
): Promise<Order | null> => {
  try {
    const { data } = await client.mutate({
      mutation: INSERT_ORDERS,
      variables: {
        input: input.input,
      },
    });

    return data?.insert_orders_one ?? null;
  } catch (error: any) {
    console.log("Error inserting orders:", error.message || error);
    return null;
  }
};

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  shop_id: string;
  quantity: number;
  price: number;
  subtotal: number;
}

export interface InsertOrderItemInput {
    input: Partial<Omit<OrderItem, "id">>;
  }

  export const InsertOrderItem = async (
    client: ApolloClient<NormalizedCacheObject>,
    input: InsertOrderItemInput
  ): Promise<Order | null> => {
    try {
      const { data } = await client.mutate({
        mutation: INSERT_ORDER_ITEMS,
        variables: {
          input: input.input,
        },
      });
  
      return data?.insert_order_items_one ?? null;
    } catch (error: any) {
      console.log("Error inserting orders:", error.message || error);
      return null;
    }
  };
