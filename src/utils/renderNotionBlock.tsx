import { HeadingBlock } from "../components/blocks/HeadingBlock";
import { ParagraphBlock } from "../components/blocks/ParagraphBlock";
import { ListBlock } from "../components/blocks/ListBlock";
import { CodeBlock } from "../components/blocks/CodeBlock";
import { ImageBlock } from "../components/blocks/ImageBlock";
import { DividerBlock } from "../components/blocks/DividerBlock";
import { QuoteBlock } from "../components/blocks/QuoteBlock";
import { getPlainText } from "./getPlainText";
import { NotionBlock } from "../types/block.types";
import { isBlockContent } from "./typeGuards";

export function renderNotionBlock(block: NotionBlock): React.ReactNode {
  const { id, type } = block;
  const content = block[type as keyof NotionBlock];
  console.log(type, content);
  if (!content) return null;
  if (isBlockContent(content)) {
    switch (type) {
      case "heading_1":
        return (
          <HeadingBlock
            key={id}
            text={getPlainText(content.rich_text)}
            level={1}
          />
        );
      case "heading_2":
        return (
          <HeadingBlock
            key={id}
            text={getPlainText(content.rich_text)}
            level={2}
          />
        );
      case "heading_3":
        return (
          <HeadingBlock
            key={id}
            text={getPlainText(content.rich_text)}
            level={3}
          />
        );
      case "paragraph":
        return (
          <ParagraphBlock key={id} text={getPlainText(content.rich_text)} />
        );
      case "bulleted_list_item":
        return (
          <ListBlock
            key={id}
            text={getPlainText(content.rich_text)}
            ordered={false}
          />
        );
      case "numbered_list_item":
        return (
          <ListBlock
            key={id}
            text={getPlainText(content.rich_text)}
            ordered={true}
          />
        );
      case "code":
        return <CodeBlock key={id} text={getPlainText(content.rich_text)} />;
      case "quote":
        return <QuoteBlock key={id} text={getPlainText(content.rich_text)} />;
      default:
        return null;
    }
  }

  switch (type) {
    case "image": {
      const url = block.image?.file?.url || block.image?.external?.url;
      return url ? <ImageBlock key={id} url={url} /> : null;
    }
    case "divider":
      return <DividerBlock key={id} />;
    default:
      return null;
  }
}
