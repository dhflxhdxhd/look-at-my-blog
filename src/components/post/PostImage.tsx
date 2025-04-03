// src/components/post/PostImage.tsx
import { Box } from "@mui/material";

interface PostImageProps {
  url: string;
  alt: string;
}

function PostImage({ url, alt }: PostImageProps) {
  return (
    <Box
      sx={{
        mb: 4,
        width: "100%",
        height: "auto",
        bgcolor: "grey.200",
        borderRadius: 1,
        overflow: "hidden",
      }}
    >
      <img
        src={url}
        alt={alt}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
    </Box>
  );
}

export default PostImage;
