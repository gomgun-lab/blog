import { Post } from "@/types";

export function PostHeader({ post }: { post: Post }) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        {post.title}
      </h1>
      <p className="leading-7">{post.date}</p>
    </div>
  );
}
