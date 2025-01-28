import { gql } from "@apollo/client";

export const GET_DELIVERY_ADDRESS_BY_UESR_ID = gql`
  query getDeliveryAddressById($user_id: uuid!) {
    delivery_addresses(where: { user_id: { _eq: $user_id } }) {
      id
      firstname
      lastname
      province
      zone
      address
      phone
      email
      user_id
      label
    }
  }
`;

export const GET_BILLING_ADDRESS_BY_UESR_ID = gql`
  query getDeliveryAddressById($user_id: uuid!) {
    billing_addresses(where: { user_id: { _eq: $user_id } }) {
      id
      firstname
      lastname
      province
      zone
      address
      phone
      email
    }
  }
`;