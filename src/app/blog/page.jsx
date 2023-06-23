import React from 'react'
import { getPostsMeta } from '@/lib/posts'
import PostListItem from '@/components/PostListItem'

export const revalidate = parseInt(process.env.REVALIDATE_INTERVAL)

export default async function Blog() {

  const posts = await getPostsMeta()

  if (!posts) {
    return <p className='mt-10 text-center'>Sorry, no posts available</p>
  }

  return (
    <div className='mx-auto max-w-3xl min-h-screen mb-16'>
      <main className='px-6 mt-6 '>
          <h2 className='text-3xl font-bold dark:text-white/90'>Blog Posts</h2>
          <ul className='w-full list-none p-0'>
              {posts.map(post => (
                  <PostListItem key={post.slug} post={post} />
              ))}
          </ul>
      </main>
    </div>
  )
}
