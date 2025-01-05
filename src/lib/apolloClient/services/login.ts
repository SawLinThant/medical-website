import { SIGN_IN_MUTATION } from "../mutation/login";
import serverApolloClient from "../serverApolloClient";


export interface LoginCredentials {
   email: string
   password: string
}

export async function handleLogin({email, password}:LoginCredentials) {
  try {
    const { data } = await serverApolloClient.mutate({
      mutation: SIGN_IN_MUTATION,
      variables: { email, password },
    });

    if (data?.userLogin) {
      return { success: true, message: data.userLogin.message, token: data.userLogin.token };
    } else {
      return { success: false, message: "Login failed." };
    }
  } catch (error) {
    console.log("Login error:", error);
    return { success: false, message: "An error occurred during login." };
  }
}
