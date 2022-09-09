// import { gql } from "@apollo/client";
import gql from "graphql-tag";

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
export const CHANGE_PASSWORD = gql`
  mutation ChangePassword(
    $currentPassword: String!
    $password: String!
    $passwordConfirmation: String!
  ) {
    changePassword(
      currentPassword: $currentPassword
      password: $password
      passwordConfirmation: $passwordConfirmation
    ) {
      jwt
    }
  }
`;
