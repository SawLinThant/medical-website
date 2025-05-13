import { gql } from "@apollo/client";

export const GET_CUPONS_BY_NO = gql`
 query GetCupons($cupon_number: String!) {
  cupons(where: {cupon_number: {_eq: $cupon_number}}) {
    value
    cupon_number
    type
    id
    expired_date
  }
}
`