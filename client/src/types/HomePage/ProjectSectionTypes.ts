import { BlocksContent } from "@strapi/blocks-react-renderer";
import { LinkData, MappedLinkData } from "../global/LinkTypes";
import { ProjectLinks } from "../ProjectsTypes";

export interface ProjectSectionData {
    SectionTitle: string;
    SectionDescription: {
      Paragraph: BlocksContent;
    };
    CTA: LinkData;
  }
  
  export interface MappedProjectSectionData {
    sectionTitle: string;
    sectionDescription: BlocksContent;
    cta: MappedLinkData;
  }

export interface MappedProject {
  title: string;
  description: BlocksContent;
  image: {
    url: string;
    altText: string;
  };
  categoryIcon: {
    name: string;
    svgUrl: string;
    svgAltText: string;
    link: MappedLinkData;
  };
  ProjectLinks: ProjectLinks[];
  TechnologyStack: {
    Text: string
  }
  
}

export interface MappedProjectData {
  projects: MappedProject[];
}
