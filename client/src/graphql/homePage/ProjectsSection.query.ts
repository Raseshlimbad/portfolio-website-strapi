import { gql } from "@apollo/client";

export const GET_PROJECT_SECTION_DATA = gql`
  query ProjectSectionQuery {
    homePage {
      Sections {
        ... on ComponentSectionsMyProjectsSection {
          SectionTitle
          SectionDescription {
            Paragraph
          }
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
