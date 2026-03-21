import type { Post } from "../types.js";

interface PostsPageProps {
  posts: Post[];
}

function formatDate(date: string): string {
  return date.replace(/-/g, ".");
}

export function PostsPage({ posts }: PostsPageProps) {
  return (
    <ul className="post-list">
      {posts.map((post) => (
        <li key={post.slug} className="post-item">
          <a href={`/posts/${post.slug}/`} className="post-item__link">{post.title}</a>
          <time className="post-item__date">{formatDate(post.date)}</time>
        </li>
      ))}
    </ul>
  );
}
