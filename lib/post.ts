import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import { Post } from "@/types";

export const getPosts = async () => {
  const posts = await fs.readdir("./posts/");

  return Promise.all(
    posts
      .filter(file => path.extname(file) === ".mdx")
      .map(async file => {
        const filePath = `./posts/${file}`;
        const postContent = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(postContent);

        return { ...data, body: content } as Post;
      }),
  );
};

export async function getPost(slug: string) {
  const posts = await getPosts();
  return posts.find(post => post.slug === slug);
}
