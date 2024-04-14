import "./global.css";
import "./reset.css";

import { Nav } from "@/components/nav";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html>
      <body className="max-w-[736px] mx-auto my-8 px-4">
        <Nav />
        {children}
      </body>
    </html>
  );
}
