export interface RichTextChild {
  text: string;
  type?: string;
  bold?: boolean;
  italic?: boolean;
}

export interface RichTextBlock {
  type: string;
  children: RichTextChild[];
}

export type RichTextContent = RichTextBlock[];