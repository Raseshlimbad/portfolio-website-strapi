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
// export const GET_BLOGS = gql`
//   query BlogsData {
//     blogs {
//       Title
//       Summary
//       publishedAt
//       Category
//       Content
//       BlogImage {
//         Image {
//           url
//         }
//         altText
//       }
//     }
//   }
// `;
