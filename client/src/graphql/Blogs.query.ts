import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query BlogsData {
    blogs {
      Title
      Summary
      publishedAt
      Category
      Content
      Image {
        Image {
          url
          alternativeText
        }
      }
    }
  }
`;
