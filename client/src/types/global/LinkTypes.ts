export type LinkType = "Reference" | "Anchor" | "External";

export interface LinkData {
  Name: string;
  Type: LinkType;
  url: string;
}

export interface MappedLinkData {
  name: string;
  type: LinkType;
  url: string;
}

export interface LinkRendererProps {
  type: LinkType;
  url: string;
  children: React.ReactNode;
  className?: string;
}