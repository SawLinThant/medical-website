import { StockHistory } from "@/lib/types/global";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { INSERT_STOCK_HISTORY } from "../mutation/stockHistoryMutation";

export interface InsertStockHistoryInput {
    input: Omit<StockHistory, "id">;
  }
  
  export const InsertStockHistory = async (
    client: ApolloClient<NormalizedCacheObject>,
    input: InsertStockHistoryInput
  ): Promise<StockHistory | null> => {
    try {
      console.log("InsertStockHistory Input:", input);
  
      const { data } = await client.mutate({
        mutation: INSERT_STOCK_HISTORY,
        variables: { input },
      });
  
      console.log("Insert Stock History Response:", data);
      return data?.insert_stock_histories_one ?? null;
    } catch (error: any) {
      console.error("Error inserting stock history:", error.message || error);
      return null;
    }
  };