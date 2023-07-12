import React from 'react'
import formatDate from '@/lib/formatDate'
import Link from 'next/link'

export default function PostListItem({meta}) {
  const {slug, title, date} = meta
  const pubDate = formatDate(date)
  // console.log("debug meta: ", meta)

  return (
    <li className='mt-4 text-xl dark:text-white/90 flex flex-col items-start sm:flex-row sm:justify-between  '>
      <Link className='underline hover:text-black/70 dark:hover:text-white'
        href={`/blog/${slug}`} >
          {title}
      </Link>

      <span className='ml-6 text-sm'>{pubDate}</span>
    </li>
  )
}
