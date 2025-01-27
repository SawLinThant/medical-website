import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { INSERT_ORDER_ITEMS, INSERT_ORDERS } from "../mutation/orderMutation";
import { GET_ORDERS } from "../query/orderQuery";
import { Product } from "./product";

export interface Order {
  id: string;
  user_id: string;
  status: string;
  total_price: number;
  shipping_address: string;
  payment_id: string;
  payment_proof: string;
  created_date?: string;
  updated_date?: string;
  order_items?: OrderItem[]
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
  product: Product
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

  interface GetOrdersParams {
    where?: Record<string, any>;
    offset?: number;
    limit?: number;
  }

  export const getOrders = async (
    client: ApolloClient<NormalizedCacheObject>,
    params: GetOrdersParams
  ): Promise<{ orders: Order[]; count: number }> => {
    try {
      const { where, offset, limit } = params;
  
      if (!GET_ORDERS) {
        throw new Error("GraphQL query GET_ORDERS is not defined.");
      }
  
      const { data } = await client.query({
        query: GET_ORDERS,
        fetchPolicy: "no-cache",
        variables: { where, offset, limit },
      });
  
      if (!data) {
        throw new Error("No data returned from GraphQL query.");
      }
  
      return {
        orders: data.orders || [],
        count: data.orders_aggregate?.aggregate?.count || 0,
      };
    } catch (error: any) {
      console.error("Error fetching orders:", error.message || error);
      return { orders: [], count: 0 };
    }
  };
