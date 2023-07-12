"use client"

import React, { useState } from 'react'

export default function NewsLetter() {
    // const [email, setEmail] = useState('')
    const [newSub, setNewSub] = useState(false)

    const handleNewsletter = async(e) => {
        e.preventDefault()
        const email = e.target[0].value
        // console.log(email)

        // register the new subscriber's email into mailing list
        const res = await fetch("/api/newsletter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email
          })
        })
        // console.log(res)
        res.status === 201 && setNewSub(true)

    }

  return (
    <div className="grid place-items-center place-content-center
    ">

      <div className='p-3'>
        <h2 className='mb-3'>This is to test newletter function</h2>
        <form className='flex flex-col gap-4 sm:flex-row items-stretch justify-stretch'
          onSubmit={handleNewsletter}>
            <input type="email"
                placeholder='email'
                required
               className='px-4 py-2 bg-transparent outline-none border border-gray-400 focus:border-gray-200 rounded-lg dark:text-white/80' />

            <button className='px-4 py-2 bg-black/70 dark:bg-gray-500 rounded-lg text-white font-medium hover:scale-105 hover:transition-transform active:translate-y-1 '>Join newsletter</button>
        </form>
        {
          newSub && <p className='mt-3'>Thanks for subscribing to the newsletter!</p>
        }
      </div>
    </div>
  )
}
