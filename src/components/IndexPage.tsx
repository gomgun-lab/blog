import type { Post } from "../types.js";

interface IndexPageProps {
  posts: Post[];
}

export function IndexPage({ posts }: IndexPageProps) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <a key={post.slug} href={`/pages/${post.slug}/`} className="post-card">
          <h2>{post.title}</h2>
          <time dateTime={post.date}>{post.date}</time>
          <p>{post.description}</p>
        </a>
      ))}
    </div>
  );
}
