import React from 'react'

export default function LinkToNewTab({text, url}) {
  return (
    <a href={url} target="_blank" className='text-purple-400 no-underline hover:underline-offset-2'>{text} &#8599;</a>
  )
}
