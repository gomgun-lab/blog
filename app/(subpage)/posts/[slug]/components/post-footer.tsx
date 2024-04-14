import Link from "next/link";

export function PostFooter() {
  return (
    <Link className="hover:underline" href={"/posts"}>
      Back to List
    </Link>
  );
}
