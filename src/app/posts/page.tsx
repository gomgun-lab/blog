import { config } from "../../config.js";
import { getAllPosts } from "../../utils/posts.js";
import { Layout } from "../../components/Layout.js";
import { PostsPage } from "../../components/PostsPage.js";
import type { PageModule } from "../../types.js";

export const getPages: PageModule["getPages"] = () => {
  const posts = getAllPosts();

  return [
    {
      slug: "",
      element: (
        <Layout title="Posts" description={config.site.description} activePage="posts">
          <PostsPage posts={posts} />
        </Layout>
      ),
    },
  ];
};
