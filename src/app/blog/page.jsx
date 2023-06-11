import React from 'react'
import { getPostsMeta } from '@/lib/posts'
import PostListItem from '@/components/PostListItem'
import Button from '@/components/Button'

export const revalidate = 86400

export default async function Blog() {

  const posts = await getPostsMeta()

  if (!posts) {
    return <p className='mt-10 text-center'>Sorry, no posts available</p>
  }

  return (
    <main className='px-6 mt-6 mx-auto max-w-2xl'>
        <Button text="Home"/>
        <h2 className='text-4xl font-bold dark:text-white/90'>Blog Posts</h2>
        <ul className='w-full list-none p-0'>
            {posts.map(post => (
                <PostListItem key={post.slug} post={post} />
            ))}
        </ul>
    </main>
  )
}
