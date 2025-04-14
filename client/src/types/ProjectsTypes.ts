import { BlocksContent } from "@strapi/blocks-react-renderer";
import { LinkData } from "./global/LinkTypes";

export interface ProjectLinks {
  IconName: string;
  IconSVG: {
    url: string;
    alternativeText: string;
  };
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
    Text: string;
  };
}
export interface ProjectData {
  projects: Project[];
}
