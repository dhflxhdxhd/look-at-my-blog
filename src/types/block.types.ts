export interface RichTextItem {
  plain_text: string;
  annotations?: {
    bold?: boolean;
    italic?: boolean;
    strikethrough?: boolean;
    underline?: boolean;
    code?: boolean;
    color?: string;
  };
  href?: string | null;
  type?: string;
  text?: {
    content: string;
    link: string | null;
  };
}

export interface BlockContent {
  rich_text: RichTextItem[];
  color?: string;
  caption?: RichTextItem[];
  language?: string;
  file?: {
    url: string;
  };
  external?: {
    url: string;
  };
}

export interface NotionBlock {
  id: string;
  type: string;
  heading_1?: BlockContent;
  heading_2?: BlockContent;
  heading_3?: BlockContent;
  paragraph?: BlockContent;
  bulleted_list_item?: BlockContent;
  numbered_list_item?: BlockContent;
  code?: BlockContent;
  image?: {
    file?: { url: string };
    external?: { url: string };
  };
  divider?: Record<string, unknown>;
  quote?: BlockContent;
}
