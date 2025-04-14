import { BlocksContent } from "@strapi/blocks-react-renderer";
import { LinkData, MappedLinkData } from "./global/LinkTypes";

export interface ProjectLinks {
  IconName: string;
  IconSVG: {
    url: string;
    alternativeText: string;
  }
  Link: LinkData;
}

export interface Project {
  Title: string;
  Description: BlocksContent;
  Image: {
    Image: {
      url: string;
      alternativeText: string;
    };
  };
  ProjectCategoryIcon: {
    IconName: string;
    IconSVG: {
      url: string;
      alternativeText: string;
    };
    Link: LinkData;
  };
  ProjectLinks: ProjectLinks[];
  TechnologyStack: {
    Text: string
  }
}
export interface ProjectData {
  projects: Project[];
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

