import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentTimeline extends Struct.ComponentSchema {
  collectionName: 'components_component_timelines';
  info: {
    description: '';
    displayName: 'Timeline Nodes';
  };
  attributes: {
    TextBlock: Schema.Attribute.Component<
      'global.title-paragraph-block',
      false
    >;
    TimelineIcon: Schema.Attribute.Component<'global.icon', false>;
    TimelineYear: Schema.Attribute.Integer;
  };
}

export interface GlobalForm extends Struct.ComponentSchema {
  collectionName: 'components_global_forms';
  info: {
    description: '';
    displayName: 'Form';
  };
  attributes: {
    Icon_and_placeholder: Schema.Attribute.Component<'global.icon', true>;
    Label: Schema.Attribute.String;
    SubmitButton_Text_and_Icon: Schema.Attribute.Component<
      'global.icon',
      false
    >;
  };
}

export interface GlobalIcon extends Struct.ComponentSchema {
  collectionName: 'components_global_icons';
  info: {
    description: '';
    displayName: 'Icon';
  };
  attributes: {
    IconName: Schema.Attribute.String;
    IconSVG: Schema.Attribute.Media<'images' | 'files'>;
    Link: Schema.Attribute.Component<'global.links', false>;
    ReletedText: Schema.Attribute.String;
  };
}

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

export interface GlobalTextArray extends Struct.ComponentSchema {
  collectionName: 'components_global_text_arrays';
  info: {
    displayName: 'TextArray';
  };
  attributes: {
    Text: Schema.Attribute.Text;
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
    displayName: 'About Me Timeline Section';
  };
  attributes: {
    Timeline_Nodes: Schema.Attribute.Component<'component.timeline', true>;
  };
}

export interface SectionsContactSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_sections';
  info: {
    description: '';
    displayName: 'Contact Section';
  };
  attributes: {
    Contact_Image_RightSection_Image: Schema.Attribute.Component<
      'global.image',
      false
    >;
    Contact_Information_LeftSection: Schema.Attribute.Component<
      'sub-sections.contact-information',
      false
    >;
    Send_Message_MiddleSection: Schema.Attribute.Component<
      'sub-sections.send-me-a-message',
      false
    >;
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
    PrivacyPolicy: Schema.Attribute.Component<'global.links', false>;
    SocialLinks: Schema.Attribute.Component<'social.social-links', true>;
    TermsofService: Schema.Attribute.Component<'global.links', false>;
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

export interface SectionsMyBlogPostsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_my_blog_posts_sections';
  info: {
    description: '';
    displayName: 'My Blog Posts Section';
  };
  attributes: {
    CTA: Schema.Attribute.Component<'global.links', false>;
    SectionDescription: Schema.Attribute.Blocks;
    SectionTitle: Schema.Attribute.String;
  };
}

export interface SectionsMyProjectsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_my_projects_sections';
  info: {
    description: '';
    displayName: 'My Projects Section';
  };
  attributes: {
    CTA: Schema.Attribute.Component<'global.links', false>;
    SectionDescription: Schema.Attribute.Component<'global.paragraph', false>;
    SectionTitle: Schema.Attribute.String;
  };
}

export interface SectionsMySkillsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_my_skills_sections';
  info: {
    description: '';
    displayName: 'My Skills Section';
  };
  attributes: {
    SectionTitle: Schema.Attribute.String;
    SkillCategories: Schema.Attribute.Component<'skills.skills', true>;
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
    Skill_Icons: Schema.Attribute.Component<'global.icon', true>;
    SkillCategoryDescription: Schema.Attribute.Blocks;
    SkillCategoryName: Schema.Attribute.String;
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

export interface SubSectionsContactInformation extends Struct.ComponentSchema {
  collectionName: 'components_sub_sections_contact_informations';
  info: {
    displayName: 'Contact Information';
  };
  attributes: {
    ContactDtails: Schema.Attribute.Component<'global.icon', true>;
    subTitle: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface SubSectionsSendMeAMessage extends Struct.ComponentSchema {
  collectionName: 'components_sub_sections_send_me_a_messages';
  info: {
    description: '';
    displayName: 'Send Me a Message';
  };
  attributes: {
    ContactForm: Schema.Attribute.Component<'global.form', false>;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.timeline': ComponentTimeline;
      'global.form': GlobalForm;
      'global.icon': GlobalIcon;
      'global.image': GlobalImage;
      'global.links': GlobalLinks;
      'global.paragraph': GlobalParagraph;
      'global.text-array': GlobalTextArray;
      'global.title-paragraph-block': GlobalTitleParagraphBlock;
      'projects.project-details': ProjectsProjectDetails;
      'sections.about-me-section': SectionsAboutMeSection;
      'sections.contact-section': SectionsContactSection;
      'sections.footer-section': SectionsFooterSection;
      'sections.header-section': SectionsHeaderSection;
      'sections.hero-section': SectionsHeroSection;
      'sections.my-blog-posts-section': SectionsMyBlogPostsSection;
      'sections.my-projects-section': SectionsMyProjectsSection;
      'sections.my-skills-section': SectionsMySkillsSection;
      'skills.skills': SkillsSkills;
      'social.social-links': SocialSocialLinks;
      'sub-sections.contact-information': SubSectionsContactInformation;
      'sub-sections.send-me-a-message': SubSectionsSendMeAMessage;
    }
  }
}
