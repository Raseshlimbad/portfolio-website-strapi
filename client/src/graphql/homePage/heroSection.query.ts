import { gql } from "@apollo/client";

export const GET_HERO_SECTION_QUERY = gql`
  query HeroSectionData {
    homePage {
      Sections {
        ... on ComponentSectionsHeroSection {
          Title
          SubTitle
          OccupationLabel
          CTAs {
            Name
            Type
            url
          }
        }
      }
    }
  }
`;
