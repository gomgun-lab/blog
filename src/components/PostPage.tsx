import type { Post } from "../types.js";

interface PostPageProps {
  post: Post;
}

export function PostPage({ post }: PostPageProps) {
  return (
    <article className="post">
      <header className="post-header">
        <h1>{post.title}</h1>
        <time dateTime={post.date}>{post.date}</time>
      </header>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.htmlContent }}
      />
    </article>
  );
}
