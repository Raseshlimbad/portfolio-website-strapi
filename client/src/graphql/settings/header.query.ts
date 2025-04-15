import { gql } from "@apollo/client";

// export const GET_HEADER_DATA = gql`
// query HeaderData {
//   homePage {
//     Sections {
//       ... on ComponentSectionsHeaderSection {
//         LOGO {
//           altText
//           Image {
//             alternativeText
//             url
//           }
//           isURL
//           url {
//             Name
//             Type
//             url
//           }
//         }
//         NavItems {
//           Name
//           Type
//           url
//         }
//       }
//     }
//   }
// }
// `;





export const GET_HEADER_DATA = gql`
query HeaderData {
  setting {
    Settings {
      ... on ComponentComponentHeader {
        LOGO {
          altText
          Image {
            url
            alternativeText
          }
          isURL
          url {
            Name
            Type
            url
          }
        }
        NavItems {
          Name
          Type
          url
        }
      }
    }
  }
}
`;
