import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { REGISTER_USER_MUTATION } from "../mutation/register";


interface RegisterUserInput {
  email: string | null;
  password: string;
  username: string;
  role: string | null;
  phone?: string;
  shop_id: string | null; 
}

interface RegisterUserResponse {
  success: boolean;
  message: string;
  user_id?: string;
}

export const registerUser = async (
  client: ApolloClient<NormalizedCacheObject>,
  input: RegisterUserInput
): Promise<RegisterUserResponse> => {
  try {
    const { data } = await client.mutate({
      mutation: REGISTER_USER_MUTATION,
      variables: {
        email: input.email,
        password: input.password,
        username: input.username,
        role: input.role,
        phone: input.phone,
        shop_id: input.shop_id,
      },
    });

    if (data?.customerRegister) {
      return {
        success: true,
        message: data.customerRegister.message,
        user_id: data.customerRegister.user_id,
      };
    }

    throw new Error("Unexpected error in user registration.");
  } catch (error: any) {
    console.log("Registration error:", error.message || error);
    return {
      success: false,
      message: error.message || "Registration failed.",
    };
  }
};
