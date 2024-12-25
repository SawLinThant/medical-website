import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query getProducts {
    products(order_by: { created_at: desc }) {
      id
      name
      price
      bulk_price
      quantity
      description
      shop {
        id
        name
        logo
        description
        address
        phone
        remark
        shop_admin_name
      }
      category {
        id
        name
      }
      images {
        id
        image_url
      }
    }
  }
`;

export const GET_TOP_SAVER_PRODUCTS = gql`
  query getProducts {
    products(order_by: { price: asc }, limit: 5) {
      id
      name
      price
      bulk_price
      quantity
      description
      shop {
        id
        name
        logo
        description
        address
        phone
        remark
        shop_admin_name
      }
      category {
        id
        name
      }
      images {
        id
        image_url
      }
    }
  }
`;
