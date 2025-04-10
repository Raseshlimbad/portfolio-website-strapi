import { RichTextContent } from "../global/RichTextTypes";

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
  SkillCategoryDescription: RichTextContent;
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
  categoryDescription: string; // Now receives processed string
  icons: MappedSkillIcon[];
}

// Mapped Section Data
export interface MappedMySkillsSection {
  sectionTitle: string;
  skillCategories: MappedSkillCategory[];
}