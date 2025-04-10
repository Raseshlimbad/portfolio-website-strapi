// Common child text type
export interface ParagraphChild {
  text: string;
}

// Paragraph block type
export interface ParagraphBlock {
  children: ParagraphChild[];
}

// Text block for timeline items
export interface TextBlock {
  Title: string;
  Paragraph: ParagraphBlock[];
}

// Icon SVG info
export interface IconSVG {
  url: string;
  alternativeText: string;
}

// Icon block including optional link
export interface TimelineIcon {
  IconName: string;
  IconSVG: IconSVG;
  ReletedText: string;
  Link?: TimelineLink;
}

// Optional link type
export interface TimelineLink {
  Name: string;
  url: string;
  Type: string;
}

// Single node in the timeline
export interface TimelineNode {
  TimelineYear: number | string;
  TextBlock: TextBlock;
  TimelineIcon: TimelineIcon;
}

// Top-level raw timeline data
export interface TimelineData {
  Timeline_Nodes: TimelineNode[];
}

// ----------- MAPPED STRUCTURE -----------

// Mapped version of TimelineLink
export interface MappedTimelineLink {
  name: string;
  url: string;
  type: string;
}

export interface MappedTimelineItem {
  year: string;
  title: string;
  description: string;
  icon: {
    name: string;
    svgUrl: string;
    svgAltText: string;
    relatedText: string;
  };
  link: MappedTimelineLink | null;
}

export interface MappedTimelineData {
  timelineItems: MappedTimelineItem[];
}
