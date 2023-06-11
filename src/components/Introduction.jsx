import Image from 'next/image'
import React from 'react'

export default function Introduction() {
  return (
    <div className='max-w-2xl mx-auto p-6 bg-blue-50 rounded-md shadow-sm
        flex items-center gap-4 '>
        <Image src="/img/avatar1.png" alt="avatar"
            width={100}
            height={100}
            className='rounded-full' />

        <p className='text-gray-800'>I'm Quinn, I like to learn new stuff </p>
    </div>
  )
}
