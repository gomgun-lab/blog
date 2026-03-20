import type { ReactElement } from "react";
import { z } from "zod";

export const PostMetaSchema = z.object({
  title: z.string().min(1),
  date: z.string().min(1),
  description: z.string().min(1),
});

export type PostMeta = z.infer<typeof PostMetaSchema>;

export interface Post extends PostMeta {
  slug: string;
  htmlContent: string;
}

export interface PageEntry {
  slug: string;
  element: ReactElement;
}

export interface PageModule {
  getPages: () => PageEntry[];
}
