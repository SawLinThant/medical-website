import { gql } from "@apollo/client";

export const INSERT_STOCK_HISTORY = gql`
  mutation InsertStockHistory($input: stock_histories_insert_input!) {
    insert_stock_histories_one(object: $input) {
      id
      shop_id
      type
      reason
      product_id
    }
  }
`;