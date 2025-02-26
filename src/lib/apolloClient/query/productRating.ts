import { gql } from "@apollo/client";

export const GET_PRODUCT_RATINGS = gql`
  query GetProductRatings($productId: uuid!) {
    product_ratings(where: { product_id: { _eq: $productId } }) {
      id
      rating
      review
      created_at
      user_id
    }
    products_by_pk(id: $productId) {
      average_rating
      review_count
    }
  }
`;