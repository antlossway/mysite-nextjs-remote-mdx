import NewsLetter from '@/components/NewsLetter'
import React from 'react'

export default function layout({children}) {
  return (
    <div className='mb-56'>
        {children}
        <div className='wrapper-post'>
          <NewsLetter />
        </div>
    </div>
  )
}
