import { getPostsMeta, getPostByName } from "@/lib/posts";
import {notFound} from "next/navigation"
import formatDate from "@/lib/formatDate";
import Link from "next/link";
import "highlight.js/styles/github-dark.css"

export const revalidate = parseInt(process.env.REVALIDATE_INTERVAL) // 0: equivalent to "cache: no-cache", for development, and need to comment out generateStaticParams

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
        <main className="px-6 py-6 mx-auto prose prose-base md:prose-lg prose-slate dark:prose-invert prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline ">
            <p className="mt-6 text-sm">{pubDate}</p>
            <article>
                {content}
            </article>
            <section>
                <h2>Related:</h2>
                <div className="flex flex-row gap-4">{tags}</div>
            </section>

        </main>

        </>
    )

}