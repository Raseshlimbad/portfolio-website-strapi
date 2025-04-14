import { BlocksContent } from "@strapi/blocks-react-renderer";

// Skill Icon Data
export interface SkillIcon {
  IconName: string;
  IconSVG: {
    alternativeText: string;
    url: string;
  };
  Link?: {
    Name: string;
    Type: string;
    url: string;
  };
  ReletedText: string;
}

// Skill Category Data
export interface SkillCategory {
  SkillCategoryName: string;
  SkillCategoryDescription: BlocksContent | null;
  Skill_Icons: SkillIcon[];
}

// Section Data
export interface MySkillsSectionData {
  SectionTitle: string;
  SkillCategories: SkillCategory[];
}

// Mapped Skill Icon Data
export interface MappedSkillIcon {
  name: string;
  svgUrl: string;
  svgAltText: string;
  relatedText: string;
  link: {
    name: string;
    type: string;
    url: string;
  } | null;
}

// Mapped Skill Category Data
export interface MappedSkillCategory {
  categoryName: string;
  categoryDescription: BlocksContent | null; 
  icons: MappedSkillIcon[];
}

// Mapped Section Data
export interface MappedMySkillsSection {
  sectionTitle: string;
  skillCategories: MappedSkillCategory[];
}