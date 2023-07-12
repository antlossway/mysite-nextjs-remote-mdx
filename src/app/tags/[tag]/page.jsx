import React from 'react'
import { getPostsMeta } from '@/lib/posts'
import PostListItem from '@/components/PostListItem'
import BackToList from '@/components/BackToList'

export const revalidate = parseInt(process.env.REVALIDATE_INTERVAL)

export async function generateStaticParams() {
    const posts = await getPostsMeta() //deduped

    if (!posts) return []

    const tags = new Set(posts.map(post => post.tags).flat())

    return Array.from(tags).map(tag => {tag})
}

export async function generateMetadata ({params}) {
    const {tag} = params

    return {
        title: `posts with tag ${tag}`,
    }
}

export default async function TagPostList({params}) {
    const {tag} = params

  const postsMeta = await getPostsMeta()

  if (!postsMeta) {
    return <p className='mt-10 text-center'>Sorry, no posts available</p>
  }

  const tagPosts = postsMeta.filter(meta => meta.tags.includes(tag))

  if (!tagPosts.length) {
    return (
        <div className='text-center'>
            <p className='mt-10'>
                Sorry, no posts has that tag.
            </p>
            <BackToList />
        </div>
    )
  }

  return (
    <main className='px-6 mt-6 mx-auto max-w-2xl'>
        <BackToList />
        <h2 className='text-4xl font-bold dark:text-white/90'>Posts with tag #{tag}</h2>
        <ul className='w-full list-none p-0'>
            {tagPosts.map(meta => (
                <PostListItem key={meta.slug} meta={meta} />
            ))}
        </ul>
    </main>
  )
}
