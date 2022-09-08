import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
  query getAllProducts {
    products {
      data {
        id
        attributes {
          name
          description
          price
          images {
            data {
              attributes {
                url
              }
            }
          }
          category {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT_DETAILS = gql`
  query getProductById($productId: ID) {
    product(id: $productId) {
      data {
        id
        attributes {
          name
          brand
          AvailableQty
          description
          price
          images {
            data {
              attributes {
                url
              }
            }
          }
          category {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;
