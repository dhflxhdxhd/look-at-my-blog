// src/components/post/PostFooter.tsx
import { Box, Divider, Typography } from "@mui/material";

function PostFooter() {
  return (
    <>
      <Divider sx={{ mt: 6, mb: 4 }} />

      {/* 하단 영역 - 관련 글이나 태그 등을 추가할 수 있음 */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="body2" color="text.secondary">
          © 2024 개발자의 블로그. All rights reserved.
        </Typography>
      </Box>
    </>
  );
}

export default PostFooter;
