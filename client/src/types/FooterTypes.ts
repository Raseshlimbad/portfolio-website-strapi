import { LinkData } from "./global/LinkTypes";

interface IconData {
  url: string;
  alternativeText: string;
}

interface SocialLinkData {
  IconName: string;
  IconSVG: IconData;
  ReletedText: string;
  Link: LinkData;
}

export interface FooterData {
  CopyrightStatement: string;
  TermsofService: LinkData;
  PrivacyPolicy: LinkData;
  SocialLinks: SocialLinkData[];
  BackToTopButton: SocialLinkData;
}

export interface MappedFooterData {
  copyrightStatement: string;
  termsOfService: LinkData;
  privacyPolicy: LinkData;
  socialLinks: Array<{
    iconName: string;
    iconSvg: {
      url: string;
      alternativeText: string;
    };
    relatedText: string;
    link: LinkData;
  }>;
  backToTopButton: {
    iconName: string;
    iconSvg: {
      url: string;
      alternativeText: string;
    };
    relatedText: string;
    link: LinkData;
  };
}