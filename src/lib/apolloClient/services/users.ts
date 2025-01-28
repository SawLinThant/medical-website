import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { GET_USER_BY_ID, GET_USER_BY_PHONE } from "../query/userQuery";

export interface FindAccountInput {
  phone: string;
}

export interface FindAccountByIdInput {
  id: string;
}

export interface FindAccountResponse {
  isExist: boolean;
  success: boolean;
}

export type UserType = {
  id: string;
  username: string;
  email: string;
  phone: string
}

export interface FindAccountByIdResponse {
  isExist: boolean;
  success: boolean;
  user: UserType | null
}

export const FindAccount = async (
  client: ApolloClient<NormalizedCacheObject>,
  input: FindAccountInput
): Promise<FindAccountResponse> => {
  try {
    const { data } = await client.mutate({
      mutation: GET_USER_BY_PHONE,
      variables: {
        phone: input.phone,
      },
    });

    console.log("response user:",data?.users)

    if (data?.users.length>0) {
      return {
        isExist: true,
        success: true,
      };
    } else {
      return {
        isExist: false,
        success: true,
      };
    }
  } catch (error: any) {
    console.log("Registration error:", error.message || error);
    return {
      isExist: false,
      success: false,
    };
  }
};

export const FindAccountById = async (
  client: ApolloClient<NormalizedCacheObject>,
  input: FindAccountByIdInput
): Promise<FindAccountByIdResponse> => {
  try {
    const { data } = await client.mutate({
      mutation: GET_USER_BY_ID,
      variables: {
        id: input.id,
      },
    });


    if (data?.users.length>0) {
      return {
        isExist: true,
        success: true,
        user: data?.users[0]
      };
    } else {
      return {
        isExist: false,
        success: true,
        user: null
      };
    }
  } catch (error: any) {
    console.log("Find account error:", error.message || error);
    return {
      isExist: false,
      success: false,
      user: null
    };
  }
};
