import { Stack } from "@mui/material";
import PostCard from "./PostCard";
import { Post } from "../../types/post.types";

interface PostListProps {
  posts: Post[];
}

function PostList({ posts }: PostListProps) {
  return (
    <Stack
      spacing={{ xs: 2, md: 3 }}
      sx={{
        width: "100%",
      }}
    >
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Stack>
  );
}

export default PostList;
