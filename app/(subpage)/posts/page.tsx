import { getPosts } from "@/lib/post";
import { PostList } from "./components/post-list";

export default async function Page() {
  const posts = await getPosts();

  return <PostList posts={posts} />;
}
