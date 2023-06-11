import React from 'react'
import formatDate from '@/lib/formatDate'
import Link from 'next/link'

export default function PostListItem({post}) {
  const {slug, title, date} = post
  const pubDate = formatDate(date)

  return (
    <li className='mt-4 text-2xl dark:text-white/90'>
      <Link className='underline hover:text-black/70 dark:hover:text-white'
        href={`/blog/${slug}`} >
          {title}
      </Link>

      <span className='ml-6 text-sm'>{pubDate}</span>
    </li>
  )
}
