import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Post } from "../../types/post.types";

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        overflow: "hidden",
        height: "auto",
        bgcolor: "background.paper",
        width: "100%",
      }}
    >
      {/* 썸네일 영역 */}
      <Box
        component={Link}
        to={`/post/${post.id}`}
        sx={{
          width: { xs: "100%", sm: 240 },
          height: { xs: 160, sm: 160 },
          bgcolor: "#26a69a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          color: "white",
          "&:hover": {
            opacity: 0.9,
          },
        }}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{
            fontWeight: "bold",
            color: "white",
          }}
        >
          {post.thumbnail}
        </Typography>
      </Box>

      {/* 포스트 내용 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          bgcolor: theme.palette.mode === "light" ? "grey.100" : "grey.900",
        }}
      >
        <CardContent sx={{ flexGrow: 1, p: { xs: 2, sm: 3 } }}>
          <Box
            component={Link}
            to={`/post/${post.id}`}
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography
              variant={isMobile ? "h6" : "h5"}
              component="h2"
              gutterBottom
              sx={{
                fontWeight: "bold",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              {post.title}
            </Typography>
          </Box>

          <Typography
            variant="body2"
            color="text.secondary"
            paragraph
            sx={{ mb: 2 }}
          >
            {post.description}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "center" },
              gap: 1,
            }}
          >
            {/* 태그 목록 */}
            <Stack
              direction="row"
              spacing={1}
              sx={{
                flexWrap: "wrap",
                gap: 0.5,
              }}
            >
              {post.tags &&
                post.tags.length > 0 &&
                post.tags.map((tag, index) => (
                  <Chip
                    key={`${post.id}-${index}`}
                    label={tag}
                    size="small"
                    sx={{
                      bgcolor:
                        theme.palette.mode === "light"
                          ? "grey.200"
                          : "grey.800",
                      "&:hover": {
                        bgcolor:
                          theme.palette.mode === "light"
                            ? "grey.300"
                            : "grey.700",
                      },
                    }}
                  />
                ))}
            </Stack>

            {/* 날짜 */}
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                mt: { xs: 1, sm: 0 },
                fontSize: { xs: 12, sm: 13 },
              }}
            >
              {post.date}
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}

export default PostCard;
