import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query getProducts($today: timestamptz!) {
    products(
      where: { created_at: { _lte: $today } }
      order_by: { created_at: desc }
    ) {
      id
      name
      price
      bulk_price
      quantity
      description
      discount_price
      dosage
      usage
      average_rating
      review_count
      created_at
      storage
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
  query getTopSaverProducts($today: timestamptz!) {
    products(
      where: { created_at: { _lte: $today } }
      order_by: { price: asc }
      limit: 5
    ) {
      id
      name
      price
      bulk_price
      discount_price
      quantity
      description
      dosage
      usage
      storage
      average_rating
      review_count
      category_id
      updated_at
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

export const GET_PRODUCT_BY_ID = gql`
  query getProducts($id: uuid!) {
    products(where: { id: { _eq: $id } }) {
      id
      name
      price
      bulk_price
      quantity
      description
      discount_price
      dosage
      average_rating
      review_count
      usage
      storage
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

export const GET_PRODUCT_BY_CATEGORY_ID = gql`
  query getProducts($category_id: uuid!) {
    products(where: { category_id: { _eq: $category_id } }) {
      id
      name
      price
      bulk_price
      quantity
      description
      discount_price
      dosage
      usage
      average_rating
      review_count
      storage
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

export const GET_FILTERED_PRODUCTS = gql`
  query getFilteredProducts(
    $where: products_bool_exp!
    $offset: Int
    $today: timestamptz!
    $limit: Int
    $orderBy: [products_order_by!]
  ) {
    products(
      where: { _and: [{ created_at: { _lte: $today } }, $where] }
      order_by: $orderBy
      offset: $offset
      limit: $limit
    ) {
      id
      name
      price
      bulk_price
      discount_price
      quantity
      description
      average_rating
      review_count
      dosage
      usage
      storage
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
    products_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

export const GET_PRODUCT_QUANTITY_BY_ID = gql`
  query getProductById($id: uuid!) {
    products_by_pk(id: $id) {
      id
      quantity
    }
  }
`;
