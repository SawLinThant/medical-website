import { gql } from "@apollo/client";

export const GET_BRANDS= gql`
  query getBrands {
    brands {
      id
      name
      image_url
      website_link
      shop_id
    }
  }
`;