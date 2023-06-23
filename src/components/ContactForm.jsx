"use client"

import React, { useState } from 'react'
import FormInput from './FormInput'

export default function ContactForm() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: "",
    })


    const [sent, setSent] = useState(false)

    const inputs = [
        {
            id: 1,
            name: "name",
            label: "Name",
            type: "text",
            placeholder: "How to address you?",
        },
        {
            id: 2,
            name: "email",
            label: "Email",
            type: "email",
            placehoder: "john@mail.com",
            errorMessage: "Please use a valid email address",
            required: true,
        },
        {
            id: 3,
            name: "message",
            label: "Message",
            type: "textarea",
            placehoder: "Hi",
            errorMessage: "Please type your message",
            required: true,
        },
    ]

    const handleSubmit = async (e) => {
        e.preventDefault()


        const res = await fetch('/api/sendmail', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })

        if(res.ok) {
            setSent(true)
        }
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

  return (
    <div className='max-w-xl px-4 pt-4 border rounded-lg border-gray-300 shadow-md'>
        <form onSubmit={handleSubmit}>
            <h1 className='text-lg font-semibold mb-2'>Send me a message</h1>
            {inputs.map((input) => (
                <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                    />
                    ))}

            <button className=' mt-6 px-4 py-3 w-full bg-gray-700 text-white font-semibold hover:bg-gray-500 active:translate-y-1 transition-all'>Send</button>
        </form>

        { sent && <p className='mt-4 mb-2 text-center'>Thank you, I will come back to you soon!</p>}
    </div>
  )
}
