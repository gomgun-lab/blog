import "./global.css";
import "./reset.css";

import { Header } from "@/components/header";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html>
      <body className="max-w-[736px] mx-auto my-8 px-4">
        <Header />
        {children}
      </body>
    </html>
  );
}
