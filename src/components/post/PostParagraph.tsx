// src/components/post/PostParagraph.tsx
import { Typography } from "@mui/material";

interface PostParagraphProps {
  text: string;
}

function PostParagraph({ text }: PostParagraphProps) {
  return (
    <Typography
      variant="body1"
      paragraph
      sx={{
        mb: 3,
        lineHeight: 1.7,
      }}
    >
      {text}
    </Typography>
  );
}

export default PostParagraph;
