import { gql } from "@apollo/client";

export const GET_USER_BY_PHONE = gql`
  query getUsersByShopId($phone: String!) {
    users(where: { phone: { _eq: $phone } }) {
      id
      username
      email
      phone
    }
  }
`;