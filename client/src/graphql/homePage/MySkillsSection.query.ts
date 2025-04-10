import { gql } from "@apollo/client";

export const GET_MY_SKILLS_SECTION_QUERY = gql`
  query MySkillsData {
  homePage {
    Sections {
      ... on ComponentSectionsMySkillsSection {
        SectionTitle
        SkillCategories {
          SkillCategoryDescription
          SkillCategoryName
          Skill_Icons {
            IconName
            IconSVG {
              alternativeText
              url
            }
            Link {
              Name
              Type
              url
            }
            ReletedText
          }
        }
      }
    }
  }
}
`;