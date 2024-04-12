import { Post } from "@/types";
import { PostItem } from "./post-item";

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {posts.map((post, index) => (
        <li key={index}>
          <PostItem post={post} />
        </li>
      ))}
    </ul>
  );
}
