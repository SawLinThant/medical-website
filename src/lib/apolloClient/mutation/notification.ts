import { gql } from "@apollo/client";

export const INSERT_NOTIFICATION = gql`
  mutation InsertNotification($input: notifications_insert_input!) {
    insert_notifications_one(object: $input) {
      id
      shop_id
      order_id
      description
      type
      created_at
      is_read
    }
  }
`;
