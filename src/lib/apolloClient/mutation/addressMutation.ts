import { gql } from "@apollo/client";

// export const UPDATE_DELIVERY_ADDRESS = gql`
//   mutation updateDeliveryAddress(
//     $user_id: uuid!
//     $input: delivery_addresses_set_input!
//   ) {
//     update_delivery_addresses(
//       where: { user_id: { _eq: $user_id } }
//       _set: $input
//     ) {
//       id
//       firstname
//       lastname
//       province
//       zone
//       address
//       phone
//       email
//       label
//     }
//   }
// `;

export const UPDATE_DELIVERY_ADDRESS = gql`
  mutation updateDeliveryAddress(
    $user_id: uuid!
    $input: delivery_addresses_set_input!
  ) {
    update_delivery_addresses(
      where: { user_id: { _eq: $user_id } }
      _set: $input
    ) {
      returning {
        id
        firstname
        lastname
        province
        zone
        address
        phone
        email
        label
      }
    }
  }
`;

export const INSERT_DELIVERY_ADDRESS = gql`
  mutation insertDeliveryAddress($input: delivery_addresses_insert_input!) {
    insert_delivery_addresses_one(object: $input) {
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

export const UPDATE_BILLING_ADDRESS = gql`
  mutation updateBillingAddress(
    $user_id: uuid!
    $input: billing_addresses_set_input!
  ) {
    update_billing_addresses(
      where: { user_id: { _eq: $user_id } }
      _set: $input
    ) {
      returning {
        id
        user_id
        firstname
        lastname
        province
        zone
        address
        phone
        email
      }
    }
  }
`;


export const INSERT_BILLING_ADDRESS = gql`
  mutation insertBillingAddress($input: billing_addresses_insert_input!) {
    insert_billing_addresses_one(object: $input) {
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
