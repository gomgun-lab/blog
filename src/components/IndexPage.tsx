import type { Post } from "../types.js";

interface IndexPageProps {
  posts: Post[];
}

function formatDate(date: string): string {
  return date.replace(/-/g, ".");
}

export function IndexPage({ posts }: IndexPageProps) {
  const recentPosts = posts.slice(0, 5);

  return (
    <>
      <section className="intro">
        <pre className="intro__art">{`                  *
           /\\
     /\\        /  \\   /\\   ||
     /  \\  /\\  /    \\_/  \\ /||\\
 ___/    \\/  \\/           \\||||
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`}</pre>
      </section>

      <section>
        <h2 className="section-title">Recent Posts</h2>
        <ul className="post-list">
          {recentPosts.map((post) => (
            <li key={post.slug} className="post-item">
              <a href={`/posts/${post.slug}/`} className="post-item__link">{post.title}</a>
              <time className="post-item__date">{formatDate(post.date)}</time>
            </li>
          ))}
        </ul>
        <a href="/posts/" className="view-all">모든 글 보기</a>
      </section>
    </>
  );
}
