import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query Projects {
    projects {
      Title
      Description
      Image {
        Image {
          url
          alternativeText
        }
      }
      ProjectCategoryIcon {
        IconName
        IconSVG {
          url
          alternativeText
        }
        Link {
          Name
          Type
          url
        }
      }
      ProjectLinks {
        IconName
        IconSVG {
          url
          alternativeText
        }
        Link {
          Name
          Type
          url
        }
      }
      TechnologyStack {
        id
        Text
      }
      updatedAt
    }
  }
`;
