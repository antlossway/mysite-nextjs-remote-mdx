import Image from 'next/image'
import React from 'react'

export default function Introduction({width=100, height=100}) {
  return (
    <div className='max-w-xl mx-auto px-2 py-2 bg-blue-50 dark:bg-transparent rounded-md shadow-sm
        flex flex-col sm:flex-row items-center justify-center gap-4 dark:bg-black'>
        <Image src="/img/avatar1.png" alt="avatar"
            width={width}
            height={height}
            priority={true}
            className='rounded-full' />

        <p className='text-gray-800 dark:text-white/80 text-center sm:text-left'>Hi, I'm <span className='font-bold'>Quinn</span>, a web developer, I like to learn new stuff. </p>
    </div>
  )
}
