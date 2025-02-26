import { gql } from "@apollo/client";

export const INSERT_PRODUCT_RATING = gql`
  mutation InsertProductRating($input: product_ratings_insert_input!) {
    insert_product_ratings_one(object: $input) {
      id
      rating
      review
      created_at
    }
  }
`;