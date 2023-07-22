import React from "react";
import { getPostsMeta } from "@/lib/posts";
import PostListItem from "@/components/PostListItem";
import paginate from "@/lib/paginate";
import Pagination from "@/components/Pagination";

export const revalidate = parseInt(process.env.REVALIDATE_INTERVAL);

export default async function Blog({ searchParams }) {
  const postsMeta = await getPostsMeta();

  if (!postsMeta) {
    return <p className="mt-10 text-center">Sorry, no posts available</p>;
  }

  let currentPage = parseInt(searchParams.page) || 1; // /blog?page=1
  const pageSize = 2; // posts per page

  const paginatedPosts = paginate(postsMeta, currentPage, pageSize);

  return (
    <div className="wrapper-post min-h-screen mb-20 px-4 py-2 flex flex-col justify-between">
      <main className="mt-6">
        <h1 className="text-3xl font-bold dark:text-white/90">
          Blog Posts{" "}
          <span className="text-sm font-normal ">
            (total {postsMeta.length})
          </span>
        </h1>
        <ul className="w-full list-none p-0">
          {paginatedPosts.map((meta) => (
            <PostListItem key={meta.slug} meta={meta} />
          ))}
        </ul>
      </main>
      {/* pagination */}
      <div className="self-end">
        <Pagination
          itemCount={postsMeta.length}
          currentPage={currentPage}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
}
