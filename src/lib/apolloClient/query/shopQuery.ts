import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query getShops {
    shops(order_by: { created_at: desc }) {
      id
      name
      logo
      category
      description
      address
      phone
      category_id
      remark
      shop_admin_name
    }
  }
`;

export const GET_SHOP_BY_ID = gql`
  query getShopById($id: uuid!) {
    shops_by_pk(id: $id) {
      id
      phone
      address
      description
      logo
      name
      remark
      shop_admin_name
      created_at
      updated_at
      category_id
      shop_images {
        image_url
        shop_id
      }
      brands {
        image_url
        name
        website_link
      }
      shop_category {
        id
        name
      }
      products{
       id
       name
      }
    }
  }
`;

export const GET_FILTERED_SHOPS = gql`
  query getShops($where: shops_bool_exp, $offset: Int, $limit: Int) {
    shops(
      where: $where
      order_by: { created_at: desc }
      offset: $offset
      limit: $limit
    ) {
      id
      name
      logo
      description
      address
      phone
      category_id
      remark
      shop_admin_name
      shop_category {
        id
        name
      }
    }
      shops_aggregate(where: $where) {
        aggregate {
          count
        }
      }
  }
`;
