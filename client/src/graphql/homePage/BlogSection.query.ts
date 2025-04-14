import { gql } from "@apollo/client";

export const GET_BLOG_SECTION_DATA = gql`
  query Query {
    homePage {
      Sections {
        ... on ComponentSectionsMyBlogPostsSection {
          SectionTitle
          SectionDescription
          CTA {
            Name
            Type
            url
          }
        }
      }
    }
  }
`;
