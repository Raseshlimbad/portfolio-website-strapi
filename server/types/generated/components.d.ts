import type { Schema, Struct } from '@strapi/strapi';

export interface GlobalImage extends Struct.ComponentSchema {
  collectionName: 'components_global_images';
  info: {
    displayName: 'Image';
    icon: 'picture';
  };
  attributes: {
    altText: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isURL: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    url: Schema.Attribute.Component<'global.links', false>;
  };
}

export interface GlobalLinks extends Struct.ComponentSchema {
  collectionName: 'components_global_links';
  info: {
    description: '';
    displayName: 'Links';
    icon: 'link';
  };
  attributes: {
    Name: Schema.Attribute.String;
    Type: Schema.Attribute.Enumeration<['Reference', 'External', 'Anchor']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Reference'>;
    url: Schema.Attribute.String;
  };
}

export interface GlobalParagraph extends Struct.ComponentSchema {
  collectionName: 'components_global_paragraphs';
  info: {
    displayName: 'Paragraph';
  };
  attributes: {
    Paragraph: Schema.Attribute.Blocks;
  };
}

export interface GlobalTitleParagraphBlock extends Struct.ComponentSchema {
  collectionName: 'components_global_title_paragraph_blocks';
  info: {
    description: '';
    displayName: 'Title Paragraph Block';
  };
  attributes: {
    Paragraph: Schema.Attribute.Blocks;
    Title: Schema.Attribute.String;
  };
}

export interface ProjectsProjectDetails extends Struct.ComponentSchema {
  collectionName: 'components_projects_project_details';
  info: {
    displayName: 'Project Details';
  };
  attributes: {
    ProjectDescription: Schema.Attribute.Blocks;
    TechnologyName: Schema.Attribute.String;
  };
}

export interface SectionsAboutMeSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_me_sections';
  info: {
    description: '';
    displayName: 'About Me Section';
  };
  attributes: {
    SubTitle: Schema.Attribute.Text;
    TextBlocks: Schema.Attribute.Component<
      'global.title-paragraph-block',
      true
    >;
    Title: Schema.Attribute.String;
  };
}

export interface SectionsFooterSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_footer_sections';
  info: {
    description: '';
    displayName: 'Footer Section';
  };
  attributes: {
    CopyrightStatement: Schema.Attribute.Text;
    PrivacyPolicyText: Schema.Attribute.String;
    SocialLinks: Schema.Attribute.Component<'social.social-links', true>;
    TermsofServiceText: Schema.Attribute.String;
  };
}

export interface SectionsHeaderSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_header_sections';
  info: {
    displayName: 'Header Section';
  };
  attributes: {
    LOGO: Schema.Attribute.Component<'global.image', false>;
    NavItems: Schema.Attribute.Component<'global.links', true>;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    CTAs: Schema.Attribute.Component<'global.links', true>;
    OccupationLabel: Schema.Attribute.String;
    SubTitle: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface SectionsMySkillsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_my_skills_sections';
  info: {
    description: '';
    displayName: 'My Skills Section';
  };
  attributes: {
    SkillCategory: Schema.Attribute.String;
    SkillDescription: Schema.Attribute.Component<'global.paragraph', true>;
    SkillNames: Schema.Attribute.Component<'skills.skills', true>;
  };
}

export interface SkillsSkills extends Struct.ComponentSchema {
  collectionName: 'components_skills_skills';
  info: {
    description: '';
    displayName: 'Skills';
    icon: 'code';
  };
  attributes: {
    SkillName: Schema.Attribute.String;
  };
}

export interface SocialSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_social_social_links';
  info: {
    description: '';
    displayName: 'Social Links';
  };
  attributes: {
    Icon: Schema.Attribute.Component<'global.image', false>;
    PlatformName: Schema.Attribute.String;
    URL: Schema.Attribute.Component<'global.links', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'global.image': GlobalImage;
      'global.links': GlobalLinks;
      'global.paragraph': GlobalParagraph;
      'global.title-paragraph-block': GlobalTitleParagraphBlock;
      'projects.project-details': ProjectsProjectDetails;
      'sections.about-me-section': SectionsAboutMeSection;
      'sections.footer-section': SectionsFooterSection;
      'sections.header-section': SectionsHeaderSection;
      'sections.hero-section': SectionsHeroSection;
      'sections.my-skills-section': SectionsMySkillsSection;
      'skills.skills': SkillsSkills;
      'social.social-links': SocialSocialLinks;
    }
  }
}
