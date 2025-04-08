import { Box, Toolbar } from "@mui/material";
import Header from "../components/layout/Header";
import Banner from "../components/blog/Banner";
import CategoryTabs from "../components/blog/CategoryTabs";
import PostList from "../components/blog/PostList";
import { useState, useEffect } from "react";
import { Category } from "../types/post.types";
import { useThemeContext } from "../theme/ThemeProvider";

function MainPage() {
  const { mode, toggleColorMode } = useThemeContext();
  const [activeTab, setActiveTab] = useState<Category>("POSTS");
  const [posts, setPosts] = useState([]);

  // const posts: Post[] = [
  //   {
  //     id: 1,
  //     title: "REACT.MEMO로 컴포넌트 렌더링 최적화하기",
  //     description: "불필요한 렌더링을 줄이고 성능을 높이는 방법 🚀",
  //     date: "2024.11.23",
  //     thumbnail: "최적화",
  //     content: undefined,
  //     tags: ["Chip", "Chip", "Chip"],
  //   },
  //   {
  //     id: 2,
  //     title: "REACT.MEMO로 컴포넌트 렌더링 최적화하기",
  //     description: "불필요한 렌더링을 줄이고 성능을 높이는 방법 🚀",
  //     date: "2024.11.22",
  //     thumbnail: "최적화",
  //     content: undefined,
  //     tags: ["Chip", "Chip", "Chip"],
  //   },
  //   {
  //     id: 3,
  //     title: "REACT.MEMO로 컴포넌트 렌더링 최적화하기",
  //     description: "불필요한 렌더링을 줄이고 성능을 높이는 방법 🚀",
  //     date: "2024.11.21",
  //     thumbnail: "최적화",
  //     content: undefined,
  //     tags: ["Chip", "Chip", "Chip"],
  //   },
  // ];

  useEffect(() => {
    fetch("/api/posts/all")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.results);
        console.log("!!", data);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Header mode={mode} toggleColorMode={toggleColorMode} />

      <Toolbar variant="dense" sx={{ mb: 1 }} />

      <Box sx={{ height: 1, bgcolor: "divider" }} />

      <Box
        sx={{
          py: { xs: 2, md: 3 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            maxWidth: "900px",
            width: "100%",
            px: 2,
          }}
        >
          <Banner mode={mode} />
          <CategoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          <PostList posts={posts} />
        </Box>
      </Box>
    </Box>
  );
}

export default MainPage;
