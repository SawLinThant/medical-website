import { gql } from "@apollo/client";

export const UPDATE_USER_BY_ID = gql`
  mutation UpdateUserById($id: uuid!, $input: users_set_input!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: $input) {
      id
      username
      email
      phone
      role
      shop_id
      password
      created_at
      updated_at
      profile_url
      delivery_addresses {
        province
        zone
        address
      }
      billing_addresses {
        address
        province
        zone
      }
    }
  }
`;