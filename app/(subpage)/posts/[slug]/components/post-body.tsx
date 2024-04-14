import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "./markdown-components";

import "github-markdown-css";

export function PostBody({ children }: { children: string }) {
  return (
    <div className="markdown-body">
      <MDXRemote source={children} components={mdxComponents} />
    </div>
  );
}
