import { ShopResponse } from "@/domain/entities/response.entity";
import { GetShopByIdInput } from "@/domain/interface/user.interfaec";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { GET_SHOP_BY_ID } from "../query/shopQuery";

export class ShopService {
    private client: ApolloClient<NormalizedCacheObject>;
  
    constructor(client: ApolloClient<NormalizedCacheObject>) {
      this.client = client;
    }
  
    async getShopById(input: GetShopByIdInput): Promise<ShopResponse> {
      try {
        const { data, errors } = await this.client.query({
          query: GET_SHOP_BY_ID,
          variables: { id: input.id },
          fetchPolicy: 'network-only', 
        });
  
        if (errors) {
          throw new Error(errors[0].message);
        }
  
        if (!data?.shops_by_pk) {
          return {
            success: true,
            shop: null,
            message: 'Shop not found',
          };
        }
  
        return {
          success: true,
          shop: data.shops_by_pk,
        };
      } catch (error) {
        console.error('GetShopById error:', error);
        return {
          success: false,
          message: error instanceof Error ? error.message : 'Failed to fetch shop',
        };
      }
    }
  }