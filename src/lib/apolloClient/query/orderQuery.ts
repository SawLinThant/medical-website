import { gql } from "@apollo/client";

// export const GET_ORDERS_BY_USER_ID = gql`
//   query GetOrdersByUserId($user_id: uuid!, $status: String) {
//     orders(
//       where: {
//         user_id: { _eq: $user_id },
//         _and: [
//           { status: { _eq: $status } }
//         ]
//       }
//     ) {
//       id
//       user_id
//       status
//       total_price
//       shipping_address
//       payment_id
//       payment_proof
//       created_date
//       updated_date
//     }
//   }
// `;
export const GET_ORDERS = gql`
  query GetOrders($where: orders_bool_exp, $offset: Int, $limit: Int) {
    orders(where: $where, offset: $offset, limit: $limit, order_by: { created_date: desc }) {
      id
      user_id
      status
      total_price
      shipping_address
      payment_id
      payment_proof
      created_date
      updated_date
      order_items {
        quantity
        subtotal
        price
        shop_id
        product {
          name
          images {
            id
            image_url
          }
        }
      }
    }
    orders_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`;
