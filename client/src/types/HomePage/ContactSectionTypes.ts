import { LinkData } from "../global/LinkTypes";

interface IconSvg {
  url: string;
  alternativeText: string;
}

interface ContactDetail {
  IconName: string;
  IconSVG: IconSvg;
  ReletedText: string;
  Link: LinkData;
}

interface FormField {
  IconName: string;
  IconSVG: IconSvg;
  ReletedText: string;
  Link: LinkData;
}

export interface Contact_Information_LeftSection {
  Title: string;
  subTitle: string;
  ContactDtails: ContactDetail[];
}

export interface Send_Message_MiddleSection {
  Title: string;
  ContactForm: {
    Icon_label_and_placeholder: FormField[];
    SubmitButton_Text_and_Icon: FormField;
  };
}

export interface Contact_Image_RightSection_Image {
  Image: {
    url: string;
    alternativeText: string;
  };
  altText: string;
}

export interface ContactSectionData {
  Contact_Information_LeftSection: Contact_Information_LeftSection;
  Send_Message_MiddleSection: Send_Message_MiddleSection;
  Contact_Image_RightSection_Image: Contact_Image_RightSection_Image;
}

export type MappedFormFields = {
  label: string;
  iconSvg: {
    url: string;
    alternativeText: string;
  };
  placeholder: string;
  link: LinkData;
};

export interface MapperContactLeftSection {
  title: string;
  subTitle: string;
  contactDetails: Array<{
    iconName: string;
    iconSvg: {
      url: string;
      alternativeText: string;
    };
    Text: string;
    link: LinkData;
  }>;
}
export interface MapperContactMiddleSection {
  title: string;
  contactForm: {
    formFields: MappedFormFields[]; // This is now properly typed as an array
    submitButton: {
      ButtonName: string;
      iconSvg: {
        url: string;
        alternativeText: string;
      };
      relatedText: string;
      link: LinkData;
    };
  };
}
export interface MapperContactRightSection {
  image: {
    url: string;
    alternativeText: string;
  };
  altText: string;
}

export interface MappedContactSectionData {
  leftSection: MapperContactLeftSection;
  middleSection: MapperContactMiddleSection;
  rightSection: MapperContactRightSection;
}
