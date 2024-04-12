import { getPosts } from "@/lib/post";
import { PostBody } from "./[slug]/components/post-body";
import { PostList } from "./components/post-list";

export default async function Page() {
  const posts = await getPosts();

  console.log(posts[0].title);
  console.log(posts[0].description);
  console.log(posts[0].date);

  return <PostList posts={posts} />;
}
