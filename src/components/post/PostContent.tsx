import { Box, Typography } from "@mui/material";
import PostImage from "./PostImage";
import PostParagraph from "./PostParagraph";

interface ContentItem {
  type: string;
  url?: string;
  alt?: string;
  text?: string;
}

interface PostContentProps {
  content: ContentItem[];
}

function PostContent({ content }: PostContentProps) {
  return (
    <Box>
      {content.map((item, index) => {
        if (item.type === "image" && item.url) {
          return <PostImage key={index} url={item.url} alt={item.alt || ""} />;
        } else if (item.type === "paragraph" && item.text) {
          return <PostParagraph key={index} text={item.text} />;
        }
        return null;
      })}
    </Box>
  );
}

export default PostContent;
