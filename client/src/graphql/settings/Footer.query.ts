import { gql } from "@apollo/client";

export const GET_FOOTER_DATA = gql`
  query FooterData {
    setting {
      Settings {
        ... on ComponentComponentFooter {
          CopyrightStatement
          TermsofService {
            Name
            Type
            url
          }
          PrivacyPolicy {
            Name
            Type
            url
          }
          SocialLinks {
            IconName
            IconSVG {
              url
              alternativeText
            }
            ReletedText
            Link {
              Name
              Type
              url
            }
          }
          BackToTopButton {
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
`;
