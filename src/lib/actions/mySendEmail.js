"use server"
// use resend to send email
import { Resend } from "resend"
import NewsLetterEmail from "@/app/email-template/newsletter"
import React from "react"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function newsLetterSignup(subscriberEmail) {
  try {
    const data = await resend.emails.send({
      from: "MySite Notif <onboarding@resend.dev>", // TODO: my own domain
      to: process.env.EMAIL_PERSONAL, // send to myself
      subject: `new subscriber ${subscriberEmail}`,
      reply_to: subscriberEmail,
      // text: "new subscriber alert",
      react: <NewsLetterEmail subscriberEmail={subscriberEmail} />,
      // react: React.createElement(NewsLetterEmail, { subscriberEmail }),
    })
    return data
  } catch (error) {
    return {
      error: "something wrong with the email sending process",
    }
  }
}
