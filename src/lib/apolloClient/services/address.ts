import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { GET_BILLING_ADDRESS_BY_UESR_ID, GET_DELIVERY_ADDRESS_BY_UESR_ID } from "../query/addressQuery";
import {
    INSERT_BILLING_ADDRESS,
  INSERT_DELIVERY_ADDRESS,
  UPDATE_BILLING_ADDRESS,
  UPDATE_DELIVERY_ADDRESS,
} from "../mutation/addressMutation";

export interface FindAddressInput {
  user_id: string;
}

export interface Address {
  id: string;
  firstname: string;
  lastname: string;
  province: string;
  zone: string;
  address: string;
  phone: string;
  email: string;
  user_id:string
}

export interface DeliveryAddress extends Address{
  label: string
}

export const FindDeliveryAddress = async (
    client: ApolloClient<NormalizedCacheObject>,
    input: FindAddressInput
  ): Promise<DeliveryAddress[] | null> => {
    try {
      const { data } = await client.query({
        query: GET_DELIVERY_ADDRESS_BY_UESR_ID,
        variables: {
          user_id: input.user_id,
        },
        fetchPolicy: "network-only",
      });
  
      if (!data?.delivery_addresses || !Array.isArray(data.delivery_addresses)) {
        console.warn("Unexpected data structure:", data);
        return null;
      }
  
      return data.delivery_addresses;
    } catch (error: any) {
      console.log("Error finding delivery addresses:", error.message || error);
  
      if (error.networkError) {
        console.log("Network error:", error.networkError);
      }
      if (error.graphQLErrors?.length) {
        error.graphQLErrors.forEach((err: any) =>
          console.log("GraphQL error:", err.message, err.extensions)
        );
      }
  
      return null;
    }
  };

export const FindBillingAddress = async (
    client: ApolloClient<NormalizedCacheObject>,
    input: FindAddressInput
  ): Promise<Address[] | null> => {
    try {
      const { data } = await client.query({
        query: GET_BILLING_ADDRESS_BY_UESR_ID,
        variables: {
          user_id: input.user_id,
        }, 
      });
  
      return data?.billing_addresses ?? null;
    } catch (error: any) {
      console.log("Error finding delivery addresses:", error.message || error);
      return null;
    }
  };

export interface UpdateAddressInput {
  user_id: string;
  input: Partial<Omit<DeliveryAddress, "user_id">>;
}

export const UpdateDeliveryAddress = async (
  client: ApolloClient<NormalizedCacheObject>,
  input: UpdateAddressInput
): Promise<DeliveryAddress | null> => {
  try {
    const { data } = await client.mutate({
      mutation: UPDATE_DELIVERY_ADDRESS,
      variables: {
        user_id: input.user_id,
        input: input.input,
      },
    });

    return data?.update_delivery_addresses.returning ?? null;
  } catch (error: any) {
    console.log("Error updating delivery address:", error.message || error);
    return null;
  }
};

export const UpdateBillingAddress = async (
  client: ApolloClient<NormalizedCacheObject>,
  input: UpdateAddressInput
): Promise<Address | null> => {
  try {
    const { data } = await client.mutate({
      mutation: UPDATE_BILLING_ADDRESS,
      variables: {
        user_id: input.user_id,
        input: input.input,
      },
    });

    
    return data?.update_billing_addresses?.returning[0] ?? null;
  } catch (error: any) {
    console.log("Error updating billing address:", error.message || error);
    return null;
  }
};

export interface InsertAddressInput {
  input: Omit<DeliveryAddress, "id">;
}

export interface InsertBillingAddressInput {
  input: Omit<Address, "id">;
}

export const InsertDeliveryAddress = async (
  client: ApolloClient<NormalizedCacheObject>,
  input: InsertAddressInput
): Promise<DeliveryAddress | null> => {
  try {
    const { data } = await client.mutate({
      mutation: INSERT_DELIVERY_ADDRESS,
      variables: {
        input: input.input,
      },
    });

    return data?.insert_delivery_addresses_one ?? null;
  } catch (error: any) {
    console.log("Error inserting delivery address:", error.message || error);
    return null;
  }
};

export const InsertBillingAddress = async (
  client: ApolloClient<NormalizedCacheObject>,
  input: InsertBillingAddressInput
): Promise<Address | null> => {
  try {
    const { data } = await client.mutate({
      mutation: INSERT_BILLING_ADDRESS,
      variables: {
        input: input.input,
      },
    });

    return data?.insert_billing_addresses_one ?? null;
  } catch (error: any) {
    console.log("Error inserting delivery address:", error.message || error);
    return null;
  }
};
