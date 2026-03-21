import { Layout } from "../../components/Layout.js";
import type { PageModule } from "../../types.js";

export const getPages: PageModule["getPages"] = () => [
  {
    slug: "",
    element: (
      <Layout title="404" description="페이지를 찾을 수 없습니다." stylesheets={["/assets/styles/not-found.css"]}>
        <div className="not-found">
          <h1 className="not-found__title">404</h1>
          <p className="not-found__desc">페이지를 찾을 수 없습니다.</p>
          <a href="/" className="not-found__link">홈으로 돌아가기</a>
        </div>
      </Layout>
    ),
  },
];
