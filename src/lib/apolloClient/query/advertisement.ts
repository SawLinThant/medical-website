import { gql } from "@apollo/client";

export const GET_AD = gql`
  query GetAdvertisements($where: advertisements_bool_exp) {
    advertisements(where: $where) {
      id
      budget
      approval_number
      certification
      disclaimer
      duration
      name
      status
      end_date
      start_date
      product_id
      shop_id
      ad_images {
        id
        url
        ad_id
      }
    }
  }
`;