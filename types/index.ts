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
