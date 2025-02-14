import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { INSERT_NOTIFICATION } from "../mutation/notification";

export interface NoificationType {
    id: string;
    type: string;
    shop_id: string;
    description: string;
    created_at: string
    is_read: boolean
    order_id: string
  }

  export interface InsertNotificationInput {
    input: Partial<Omit<NoificationType, "id, created_at, is_read">>;
  }

  export const InsertNotification = async (
    client: ApolloClient<NormalizedCacheObject>,
    input: InsertNotificationInput
  ): Promise<NoificationType | null> => {
    try {
        console.log("function parameter",input)
      const { data } = await client.mutate({
        mutation: INSERT_NOTIFICATION,
        variables: {
          input: input.input,
        },
      });
  
      return data?.insert_notifications_one ?? null;
    } catch (error: any) {
      console.log("Error inserting notificaitons:", error.message || error);
      return null;
    }
  };