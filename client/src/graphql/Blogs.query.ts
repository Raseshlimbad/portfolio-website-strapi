import { gql } from "@apollo/client";

export const GET_BLOGS = gql`
  query BlogsData {
    blogs {
      documentId
      Title
      Summary
      publishedAt
      Category
      Content
      BlogImage {
        Image {
          url
        }
        altText
      }
      Links {
        url
        Name
        Type
      }
    }
  }
`;

export const GET_BLOG_BY_ID = gql`
  query GetBlogById($documentId: ID!) {
    blog(documentId: $documentId) {
      documentId
      Title
      Summary
      publishedAt
      Category
      Content
      BlogImage {
        Image {
          url
        }
        altText
      }
      Links {
        url
        Name
        Type
      }
    }
  }
`;

