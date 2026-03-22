import { getAllPosts } from "../../utils/posts.js";
import { Layout } from "../../components/Layout.js";
import { formatDate } from "../../utils/format.js";
import type { PageModule } from "../../types.js";

export const getPages: PageModule["getPages"] = () => {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
    element: (
      <Layout title={post.title} description={post.description} stylesheets={["/assets/styles/article.css", "/assets/styles/prose.css"]}>
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
      </Layout>
    ),
  }));
};
