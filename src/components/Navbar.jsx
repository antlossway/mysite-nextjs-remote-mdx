"use client"

import { useGlobalContext } from '@/context/GlobalContext'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const items = [
  {
    "id": 1,
    "name": "home",
  	"url": "/"
  },
  {
    "id": 2,
    "name": "blog",
    "url": "/blog"
  },
  {
    "id": 3,
    "name": "bookmark",
    "url": "/bookmark"
  }
]



export default function Navbar() {

  const {activePage, setActivePage} = useGlobalContext()
  const [darkMode,setDarkMode] = useState('dark')

  const setHtmlTheme = (theme) => {

    if (theme === 'dark'){
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
      document.documentElement.style.cssText = "transition: background-color 0.5s ease 0s;color-scheme: dark;"
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      document.documentElement.style.cssText = "transition: background-color 0.5s ease 0s;color-scheme: light;"
    }

    // console.log("currentTheme: ", theme)
  }

  useEffect( () => {
    if (!('theme' in localStorage)) {
      localStorage.theme = darkMode
    }

    setHtmlTheme(localStorage.theme || 'dark') //set theme when page just loaded or toogle button clicked
  },[darkMode])



  const toggleDarkMode = () => {
    setDarkMode(prev => prev === 'dark'? 'light': 'dark')
    localStorage.theme = darkMode
  }

  const linkClass = "px-6 py-3 rounded-full cursor-pointer hover:text-black dark:hover:text-white/70"
  const linkActive = "bg-slate-200/70 dark:bg-slate-700/70"

  return (
    <div className='fixed bottom-0 inset-x-0 mx-auto mb-4 h-16 max-w-md px-2 '>

        <nav className='h-full w-full mx-auto px-4 rounded-full border border-black/40 bg-white/30 backdrop-blur-sm dark:border-white dark:bg-black/50 dark:text-white flex items-center justify-between capitalize text-xs sm:text-sm'>

                {
                    items.map(item => (

                        <Link href={item.url} key={item.id}
                            className={activePage === item.name ? `${linkClass} ${linkActive}` : linkClass }
                            onClick={() => setActivePage(item.name)}>
                                {item.name}
                        </Link>
                    ))
                }

                    <button onClick={toggleDarkMode}>
                            {
                                darkMode === 'dark' ?
                                <svg className='h-5 w-5 stroke-current stroke-1 fill-none hover:fill-current hover:transition-all hover:duration-300 active:translate-y-1 ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.15" d="M3 17C10.952 18.6176 16.6829 8.75775 11 3C16.0007 3.13144 20 7.11149 20 12C20 16.9715 16.1188 21 11 21C7.77111 21 4.65938 19.4319 3 17Z" />
<path d="M3 17C10.952 18.6176 16.6829 8.75775 11 3C16.0007 3.13144 20 7.11149 20 12C20 16.9715 16.1188 21 11 21C7.77111 21 4.65938 19.4319 3 17Z" />
</svg>
: <svg className='h-5 w-5 stroke-current stroke-1 fill-none hover:fill-current hover:transition-all hover:duration-300 active:translate-y-1 '  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path id="Vector" d="M12 4V2M12 20V22M6.41421 6.41421L5 5M17.728 17.728L19.1422 19.1422M4 12H2M20 12H22M17.7285 6.41421L19.1427 5M6.4147 17.728L5.00049 19.1422M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z" />
</svg>

                            }


                    </button>
        </nav>
    </div>
  )
}
