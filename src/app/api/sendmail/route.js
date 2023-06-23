import sendEmail from "@/lib/sendEmail";
import { NextResponse } from "next/server";

export const POST = async(req) => {
    const data = await req.json()

    const emailData = {
        to: data.email,
        subject: `${data.name} send you a message`,
        html: data.message
    }

    await sendEmail(emailData)

    return new NextResponse("email sent", {status: 200})
}