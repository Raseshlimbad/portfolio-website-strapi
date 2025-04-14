import { BlocksContent } from "@strapi/blocks-react-renderer";
import { LinkData, MappedLinkData } from "../global/LinkTypes";

export interface BlogSectionData {
    SectionTitle: string;
    SectionDescription: BlocksContent
    CTA: LinkData;
  }
  
  export interface MappedBlogSectionData {
    sectionTitle: string;
    sectionDescription: BlocksContent;
    cta: MappedLinkData;
  }