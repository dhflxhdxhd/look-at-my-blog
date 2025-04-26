import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "../components/layout/Header";
import PostHeader from "../components/post/PostHeader";
import PostContent from "../components/post/PostContent";
import PostFooter from "../components/post/PostFooter";
import FloatingActionButtons from "../components/post/FloatingActionButtons";
import { useThemeContext } from "../theme/ThemeProvider";
import { useEffect, useMemo, useState } from "react";
import { Content } from "../types/content.types";
import { renderNotionBlock } from "../utils/renderNotionBlock";
import { CodeBlock } from "../components/blocks/CodeBlock";

function PostDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { mode, toggleColorMode } = useThemeContext();
  const [pageContent, setPageContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [contentHeader, setContentHeader] = useState<Content | null>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log(id);
  }, []);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(`/api/notion-page-content`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pageId: id }),
      });

      if (!response.ok) {
        throw new Error(`API 요청 실패: ${response.status}`);
      }
      const { results } = await response.json();
      setPageContent(results);
      setContentHeader(null);
      console.log("포스트 가져오기 :", results);
    } catch (err) {
      console.error("포스트 가져오기 오류:", err);
      setError(
        err instanceof Error
          ? err.message
          : "포스트를 가져오는 중 오류가 발생했습니다"
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        로딩 중...
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          color: "error.main",
        }}
      >
        오류: {error}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        position: "relative",
      }}
    >
      <Header mode={mode} toggleColorMode={toggleColorMode} />
      <Box sx={{ height: { xs: 56, md: 64 } }} />

      {/* <FloatingActionButtons
        postId={post.id}
        likeCount={post.likeCount}
        commentCount={post.commentCount}
      /> */}

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pb: { xs: 8, md: 4 },
        }}
      >
        <Box
          sx={{
            maxWidth: "900px",
            width: "100%",
            px: 2,
            py: { xs: 2, md: 3 },
          }}
        >
          {/* <PostHeader post={post} mode={mode} /> */}
          {/* <PostContent content={post.content} /> */}
          <Box className="notion-content">
            {pageContent.map((content) => renderNotionBlock(content))}
          </Box>
          <PostFooter />
        </Box>
      </Box>
    </Box>
  );
}

export default PostDetailPage;
