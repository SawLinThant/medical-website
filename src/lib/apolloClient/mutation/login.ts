import { gql } from "@apollo/client";

export const SIGN_IN_MUTATION = gql`
  mutation customerLogin($phone: String!, $password: String!) {
    customerLogin(phone: $phone, password: $password) {
      token
      message
    }
  }
`;