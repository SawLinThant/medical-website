import { gql } from "@apollo/client";

export const INSERT_ORDERS = gql`
  mutation insertOrder($input: orders_insert_input!) {
    insert_orders_one(object: $input) {
      id
      user_id
      status
      total_price
      payment_id
      payment_proof
    }
  }
`;

export const INSERT_ORDER_ITEMS = gql`
  mutation insertOrder($input: order_items_insert_input!) {
    insert_order_items_one(object: $input) {
      id
      order_id
      product_id
      shop_id
      quantity
      price
      subtotal
    }
  }
`;