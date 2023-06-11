import Introduction from '@/components/Introduction'
import React from 'react'

export default function layout({children}) {
  return (
    <div>
        {children}
        <Introduction />
    </div>
  )
}
