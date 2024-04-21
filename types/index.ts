import type unist from "unist";
import type vfile from "vfile";

export type Base = {
  title: string;
  description: string;
  href?: string;
};

export type Post = Base & {
  slug: string;
  date: string;
  tags: string[];
  body: string;
};

export type TableOfContent = {
  type: string;
  value: string;
  depth: number;
  data: Data;
  children: Literal[];
}

export type Parent = unist.Parent;
export type Node = unist.Node;
export type Literal = unist.Literal;
export type Data = vfile.Data;
export type VFile = vfile.VFile;