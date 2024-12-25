import { gql } from "@apollo/client";

export const GET_CATEGORY= gql`
  query getCategory {
    categories {
      id
      name
    }
  }
`;

export const GET_CATEGORY_IMAGE= gql`
  query getCategory {
    categories {
      id
      name
      image_url
    }
  }
`;

export const GET_SHOP_CATEGORY= gql`
  query getTags {
    shop_categories {
      id
      name
    }
  }
`;