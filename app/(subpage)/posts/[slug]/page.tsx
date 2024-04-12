import { getPost } from "@/lib/post";
import { PostBody } from "./components/post-body";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = await getPost(params.slug);

  if (!post) return notFound();

  return <PostBody>{post.body}</PostBody>;
}
