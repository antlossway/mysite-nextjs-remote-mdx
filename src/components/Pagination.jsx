import Link from 'next/link'
import React from 'react'

export default function Pagination({itemCount, pageSize, currentPage}) {
    const pageCount = Math.ceil(itemCount / pageSize )

    if (pageCount === 1) return null // no need to paginate

    const pages = Array.from({length: pageCount}, (_,i) => i + 1) //[1,2,3,xxx]

    const style = "grid place-items-center place-content-center w-6 h-6 p-1 rounded-full hover:border hover:border-green-400 "

    return (
        <div>
            <ul className='flex gap-4 w- '>
                {pages.map( (pageNumber) => (
                    <li key={pageNumber}
                        className={currentPage === pageNumber ? style + ' bg-green-400': style } >
                        <Link href={`/blog?page=${pageNumber}`} >
                            {pageNumber}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
