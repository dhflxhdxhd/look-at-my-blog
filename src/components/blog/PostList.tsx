import { Stack } from "@mui/material";
import PostCard from "./PostCard";
interface PostListProps {
  posts: Array<Post>;
}
interface Post {
  id: string;
  title: string;
  subtitle: string;
  createdTime: string;
  tags: Array<string>;
  coverImage: string;
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
