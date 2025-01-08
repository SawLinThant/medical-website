import { SIGN_IN_MUTATION } from "../mutation/login";
import serverApolloClient from "../serverApolloClient";


export interface LoginCredentials {
   phone: string
   password: string
}

export async function handleLogin({phone, password}:LoginCredentials) {
  try {
    const { data } = await serverApolloClient.mutate({
      mutation: SIGN_IN_MUTATION,
      variables: { phone, password },
      fetchPolicy: "no-cache",
    });
     const response = data?.customerLogin || null
     console.log("login server response:",response)
    if (response) {
      return { success: true, message: response.message, token: response.token };
    } else {
      return { success: false, message: "Login failed." };
    }
  } catch (error) {
    console.log("Login error:", error);
    return { success: false, message: "An error occurred during login." };
  }
}
