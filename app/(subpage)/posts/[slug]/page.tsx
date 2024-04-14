import { getPost, getPosts } from "@/lib/post";
import { PostBody } from "./components/post-body";
import { notFound } from "next/navigation";
import { PostHeader } from "./components/post-header";
import { PostFooter } from "./components/post-footer";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = await getPost(params.slug);

  if (!post) return notFound();

  return (
    <div className="flex flex-col gap-8">
      <PostHeader post={post} />
      <PostBody>{post.body}</PostBody>
      <PostFooter />
    </div>
  );
}
