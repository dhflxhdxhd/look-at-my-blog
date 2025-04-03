// src/pages/PostDetailPage.tsx
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "../components/layout/Header";
import PostHeader from "../components/post/PostHeader";
import PostContent from "../components/post/PostContent";
import PostFooter from "../components/post/PostFooter";
import FloatingActionButtons from "../components/post/FloatingActionButtons";
import { useThemeContext } from "../theme/ThemeProvider";
import { useMemo } from "react";

function PostDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { mode, toggleColorMode } = useThemeContext();

  // 샘플 포스트 데이터 - 실제로는 API 호출 등을 통해 가져올 수 있습니다
  const post = useMemo(
    () => ({
      id: id,
      title: "React.memo로 컴포넌트 렌더링 최적화하기",
      description: "불필요한 렌더링을 줄이고 성능을 높이는 방법 🚀",
      date: "2024.12.23",
      thumbnail: "최적화",
      content: [
        {
          type: "image",
          url: "https://placehold.co/400x300",
          alt: "React 최적화 이미지",
        },
        {
          type: "paragraph",
          text: "리액트에서는 부모 컴포넌트가 렌더링되면 모든 자식 컴포넌트도 함께 렌더링됩니다. 이것은 리액트의 기본적인 동작 방식이지만, 때로는 불필요한 렌더링으로 인해 성능 문제가 발생할 수 있습니다.",
        },
        {
          type: "image",
          url: "https://placehold.co/400x400",
          alt: "코드 예시 이미지",
        },
        {
          type: "paragraph",
          text: "React.memo는 고차 컴포넌트(Higher Order Component)로, 컴포넌트의 props가 변경되지 않았다면 리렌더링을 방지하여 성능을 최적화합니다. 특히 자주 렌더링되는 큰 컴포넌트 트리에서 유용합니다.",
        },
        {
          type: "paragraph",
          text: "일반적으로 React.memo는 다음과 같은 상황에서 사용하면 좋습니다:",
        },
        {
          type: "paragraph",
          text: "1. 동일한 props로 렌더링이 자주 일어나는 컴포넌트\n2. 렌더링 비용이 비싼 컴포넌트\n3. 부모 컴포넌트의 상태 변화로 불필요하게 다시 렌더링되는 컴포넌트",
        },
        {
          type: "image",
          url: "https://placehold.co/400x400",
          alt: "최적화 결과 이미지",
        },
      ],
    }),
    [id]
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        position: "relative", // 부모 요소에 relative 설정
      }}
    >
      <Header mode={mode} toggleColorMode={toggleColorMode} />
      <Box sx={{ height: { xs: 56, md: 64 } }} />
      <FloatingActionButtons />

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
          <PostHeader post={post} mode={mode} />
          <PostContent content={post.content} />
          <PostFooter />
        </Box>
      </Box>
    </Box>
  );
}

export default PostDetailPage;
