import { Box, Toolbar } from "@mui/material";
import Header from "../components/layout/Header";
import Banner from "../components/blog/Banner";
import CategoryTabs from "../components/blog/CategoryTabs";
import PostList from "../components/blog/PostList";
import { useState, useEffect } from "react";
import { Category } from "../types/post.types";
import { useThemeContext } from "../theme/ThemeProvider";

interface Post {
  id: string;
  title: string;
  subtitle: string;
  createdTime: string;
  tags: Array<string>;
  coverImage: string;
}

interface Tag {
  id: string;
  name: string;
  color: string;
}

function MainPage() {
  const { mode, toggleColorMode } = useThemeContext();
  const [activeTab, setActiveTab] = useState<Category>("POSTS");
  const [notionPosts, setNotionPosts] = useState<Array<Post>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);

        const response = await fetch("/api/notion-posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            page_size: 20,
          }),
        });
        if (!response.ok) {
          throw new Error(`API 요청 실패: ${response.status}`);
        }

        const { results } = await response.json();

        const posts: Array<Post> = [];
        for (let i = 0; i < results.length; i++) {
          const properties = results[i].properties;

          if (!properties) continue;
          if (properties.status.status.name !== "완료") continue;

          const id = results[i].id;
          const title =
            properties.title.title.length > 0
              ? properties.title.title[0].plain_text
              : "";
          const subtitle =
            properties.subtitle.rich_text.length > 0
              ? properties.subtitle.rich_text[0].text.content
              : "";

          const tags = properties.tags.multi_select.map((tag: Tag) => tag.name);
          const cover = results[i].cover;

          let coverImage = "";
          if (cover) {
            const imageType = cover.type;
            coverImage = cover[imageType].url;
          }
          const createdTime = results[i].created_time || "";

          const data: Post = {
            id: id,
            title: title,
            subtitle: subtitle,
            tags: tags,
            coverImage: coverImage,
            createdTime: createdTime,
          };
          posts.push(data);
        }

        setNotionPosts(posts);
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

    fetchPosts();
  }, []);

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

          <PostList posts={notionPosts} />
        </Box>
      </Box>
    </Box>
  );
}

export default MainPage;
