// src/components/post/PostHeader.tsx
import {
  Box,
  Button,
  Divider,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { PaletteMode } from "@mui/material";
import { Content } from "../../types/content.types";

// interface Post {
//   id: string | undefined;
//   title: string;
//   description: string;
//   date: string;
//   thumbnail?: string;
//   content: Array<{ type: string; url?: string; alt?: string; text?: string }>;
// }

interface PostHeaderProps {
  post: Content;
  mode: PaletteMode;
}

function PostHeader({ post, mode }: PostHeaderProps) {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/")}
          variant="text"
          color="inherit"
          sx={{
            textTransform: "none",
            fontWeight: "normal",
          }}
        >
          post
        </Button>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body2" sx={{ mr: 1 }}>
            {mode === "light" ? "[블로그 이름]" : "[블로그 이름]"}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          component="h1"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          {post.title}
        </Typography>

        <Typography variant="body1" sx={{ mb: 1 }}>
          {post.description}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {post.date}
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />
    </>
  );
}

export default PostHeader;
