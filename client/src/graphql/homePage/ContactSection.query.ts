import { gql } from "@apollo/client";

export const GET_CONTACT_SECTION_QUERY = gql`
  query ContactSectionData {
    homePage {
      Sections {
        ... on ComponentSectionsContactSection {
          Contact_Information_LeftSection {
            Title
            subTitle
            ContactDtails {
              IconName
              IconSVG {
                url
                alternativeText
              }
              ReletedText
              Link {
                url
                Name
                Type
              }
            }
          }
          Send_Message_MiddleSection {
            Title
            ContactForm {
              Icon_label_and_placeholder {
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
              SubmitButton_Text_and_Icon {
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
            }
          }
          Contact_Image_RightSection_Image {
            Image {
              url
              alternativeText
            }
            altText
          }
        }
      }
    }
  }
`;
