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

export const GET_USER_BY_ID = gql`
  query getUserById($id: uuid!) {
    users(where: { id: { _eq: $id } }) {
      id
      username
      email
      phone
    }
  }
`;