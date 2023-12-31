import { getPostByName } from "@/lib/posts";
import { notFound } from "next/navigation";
import "highlight.js/styles/github-dark.css";

export const revalidate = parseInt(process.env.REVALIDATE_INTERVAL);

export async function generateMetadata() {
  const post = await getPostByName("bookmark.mdx"); // deduped! (de-duplication)

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta.title,
    // date: post.meta.date,
    description: post.meta.description,
    // tags: post.meta.tags,
  };
}

export default async function Bookmark() {
  const post = await getPostByName("bookmark.mdx"); // deduped! (de-duplication)

  if (!post) {
    return notFound();
  }

  const { meta, content } = post;

  return (
    <main className="mt-6 mb-16 px-6 py-6 mx-auto prose prose-base md:prose-lg prose-slate dark:prose-invert">
      <article>{content}</article>
    </main>
  );
}
