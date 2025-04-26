export interface Content {
  id: string | undefined;
  title: string;
  description: string;
  date: string;
  thumbnail?: string;
  content: Array<{ type: string; url?: string; alt?: string; text?: string }>;
}
