import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { GET_CATEGORY } from "../query/categoryQuery";

export interface Category {
    id: string;
    name: string;
  }

  interface GetCategoriesParams {
    where?: Record<string, any>;
    offset?: number;
    limit?: number;
  }
  
  export const getCategories = async (
    client: ApolloClient<NormalizedCacheObject>,
    params?: GetCategoriesParams
  ): Promise<{ categories: Category[] }> => {
    try {
      if (!GET_CATEGORY) {
        throw new Error("GraphQL query GET_CATEGORY is not defined.");
      }
  
      const { data } = await client.query({
        query: GET_CATEGORY,
        fetchPolicy: "no-cache",
        variables: {
          where: params?.where,
          offset: params?.offset,
          limit: params?.limit
        },
      });
  
      return {
        categories: data?.categories || [],
      };
    } catch (error: any) {
      console.error("Error fetching categories:", error.message || error);
      return { categories: [] };
    }
  };