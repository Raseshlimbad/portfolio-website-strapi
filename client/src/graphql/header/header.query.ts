import { gql } from "@apollo/client";

export const GET_HEADER_DATA = gql`
query HeaderData {
  homePage {
    Sections {
      ... on ComponentSectionsHeaderSection {
        LOGO {
          altText
          Image {
            alternativeText
            url
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
}`;
