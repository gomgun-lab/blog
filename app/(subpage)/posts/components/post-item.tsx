import { Post } from "@/types";
import Link from "next/link";

export function PostItem({ post }: { post: Post }) {
  return (
    <div className="flex justify-between">
      <Link href={`posts/${post.slug}`}>
        <span className="text-lg hover:underline hover:cursor-pointer">
          {post.title}
        </span>
      </Link>
      <span className="text-lg">{post.date}</span>
    </div>
  );
}
