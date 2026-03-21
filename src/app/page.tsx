import { site } from "../site.js";
import { getAllPosts } from "../utils/posts.js";
import { Layout } from "../components/Layout.js";
import { formatDate } from "../utils/format.js";
import type { PageModule } from "../types.js";

export const getPages: PageModule["getPages"] = () => {
  const posts = getAllPosts().slice(0, site.recentPostCount);

  return [
    {
      slug: "",
      element: (
        <Layout title="Home" description={site.description} activePage="home">
          <section>
            <ul className="post-list">
              {posts.map((post) => (
                <li key={post.slug} className="post-item">
                  <a href={`/posts/${post.slug}/`} className="post-item__link">{post.title}</a>
                  <time className="post-item__date">{formatDate(post.date)}</time>
                </li>
              ))}
            </ul>
            <a href="/posts/" className="view-all">모든 글 보기</a>
          </section>
        </Layout>
      ),
    },
  ];
};
