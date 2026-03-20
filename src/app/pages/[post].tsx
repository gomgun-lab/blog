import { getAllPosts } from "../../utils/posts.js";
import { Layout } from "../../components/Layout.js";
import { PostPage } from "../../components/PostPage.js";
import type { PageModule } from "../../types.js";

export const getPages: PageModule["getPages"] = () => {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
    element: (
      <Layout title={post.title} description={post.description}>
        <PostPage post={post} />
      </Layout>
    ),
  }));
};
