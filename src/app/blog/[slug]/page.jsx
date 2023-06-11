import { getPostsMeta, getPostByName } from "@/lib/posts";
import {notFound} from "next/navigation"
import formatDate from "@/lib/formatDate";
import Link from "next/link";
import Button from "@/components/Button"
import { MDXRemote } from "next-mdx-remote";
import "highlight.js/styles/github-dark.css"

export const revalidate = process.env.REVALIDATE_INTERVAL // 0: equivalent to "cache: no-cache", for development, and need to comment out generateStaticParams

export async function generateStaticParams() {
    const posts = await getPostsMeta() // deduped! (de-duplication)
    if (!posts) return []

    return posts.map(post => ({
        slug: post.slug
    }))
}

export async function generateMetadata ({params}) {
    const {slug} = params
    const post = await getPostByName(`${slug}.mdx`) // deduped! (de-duplication)

    if (!post) {
        return {
            title: "Post Not Found"
        }
    }

    return {
        title: post.meta.title,
        date: post.meta.date,
        description: post.meta.description,
        tags: post.meta.tags,
    }
}

export default async function Post ({params}) {
    const {slug} = params
    const post = await getPostByName(`${slug}.mdx`) // deduped! (de-duplication)

    if (!post) {
        return notFound()
    }

    const {meta, content} = post
    const pubDate = formatDate(meta.date)

    const tags = meta.tags.map( (tag, i) => (
        <Link key={i} href={`/tags/${tag}`}>{tag}</Link>
    ))

    return (
        <>
        <main className="px-6 mx-auto prose prose-xl prose-slate dark:prose-invert">
            <h1 className="text-3xl mt-4 mb-0">{meta.title}</h1>
            <p className="mt-0 text-sm">{pubDate}</p>
            <article>
                {content}
            </article>
            <section>
                <h2>Related:</h2>
                <div className="flex flex-row gap-4">{tags}</div>
            </section>
            <p className="mb-10">
                <Link href="/blog"> Back To List</Link>
            </p>
        </main>

        </>
    )

}