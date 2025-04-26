import { RichTextItem } from "../types/block.types";

export function getPlainText(richText: RichTextItem[] = []): string {
  return richText.map((text) => text.plain_text).join("");
}
