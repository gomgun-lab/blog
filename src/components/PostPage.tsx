import type { Post } from "../types.js";

interface PostPageProps {
  post: Post;
}

function formatDate(date: string): string {
  return date.replace(/-/g, ".");
}

export function PostPage({ post }: PostPageProps) {
  return (
    <article className="article">
      <div className="article__header">
        <time className="article__date">{formatDate(post.date)}</time>
        <h1 className="article__title">{post.title}</h1>
      </div>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.htmlContent }}
      />
      <a href="/posts/" className="article__back">목록으로</a>
    </article>
  );
}
