import { BlockContent } from "../types/block.types";

export function isBlockContent(content: unknown): content is BlockContent {
  return (
    typeof content === "object" &&
    content !== null &&
    "rich_text" in content &&
    Array.isArray((content as BlockContent).rich_text)
  );
}
