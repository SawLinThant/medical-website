import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { GET_AD } from "../query/advertisement";

export interface Advertisement {
  id: string;
  budget: number;
  approval_number: string;
  certification: string;
  disclaimer: string;
  duration: number;
  name: string;
  status: string;
  end_date: string;
  start_date: string;
  product_id: string;
  shop_id: string;
  ad_images: {
    id: string;
    url: string;
    ad_id: string;
  }[];
}

export const getAdvertisements = async (
  client: ApolloClient<NormalizedCacheObject>
): Promise<{ advertisements: Advertisement[] }> => {
  try {
    if (!GET_AD) {
      throw new Error("GraphQL query GET_AD is not defined.");
    }

    const { data } = await client.query({
      query: GET_AD,
      fetchPolicy: "no-cache",
      variables: {
        where: {
            status: { _eq: "Active" }
        },
      },
    });

    return {
      advertisements: data?.advertisements || [],
    };
  } catch (error: any) {
    console.error("Error fetching advertisements:", error.message || error);
    return { advertisements: [] };
  }
};
