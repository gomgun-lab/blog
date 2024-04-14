import type { MDXComponents } from "mdx/types";
import { Code } from "bright";
import Link from "next/link";
import Image from "next/image";

export const mdxComponents: MDXComponents = {
  a: ({ children, ...props }) => {
    return (
      <Link {...props} href={props.href || ""}>
        {children}
      </Link>
    );
  },
  img: ({ children, alt = "image", ...props }) => {
    //@ts-ignore
    return <Image alt={alt} {...props} />;
  },
  pre: Code,
};
