import { config } from "../config.js";
import { getAllPosts } from "../utils/posts.js";
import { Layout } from "../components/Layout.js";
import { IndexPage } from "../components/IndexPage.js";
import type { PageModule } from "../types.js";

export const getPages: PageModule["getPages"] = () => {
  const posts = getAllPosts();

  return [
    {
      slug: "",
      element: (
        <Layout title="Home" description={config.site.description} activePage="home">
          <IndexPage posts={posts} />
        </Layout>
      ),
    },
  ];
};
