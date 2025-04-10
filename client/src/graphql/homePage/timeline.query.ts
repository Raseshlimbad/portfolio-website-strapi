import { gql } from "@apollo/client";

export const GET_TIMELINE_DATA = gql`
  query TimelineData {
  homePage {
    Sections {
      ... on ComponentSectionsAboutMeSection {
        Timeline_Nodes {
          TimelineYear
          TextBlock {
            Title
            Paragraph
          }
          TimelineIcon {
            IconName
            IconSVG {
              url
              alternativeText
            }
            ReletedText
            Link {
              Name
              url
              Type
            }
          }
        }
      }
    }
  }
}
`;