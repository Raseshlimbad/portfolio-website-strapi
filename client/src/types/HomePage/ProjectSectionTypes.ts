import { BlocksContent } from "@strapi/blocks-react-renderer";
import { LinkData, MappedLinkData } from "../global/LinkTypes";
import { ProjectLinks } from "../ProjectsTypes";
// import { MappedProjectData } from "@/lib/helpers/mapDataHelper";

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
    // projects: MappedProjectData[];
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
  // project: MappedProject[];
}
