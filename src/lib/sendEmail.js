import nodemailer from "nodemailer"

// export const sendEmail = async(data) => {
//     const transporter = nodemailer.createTransport(process.env.EMAIL_SERVER)

//   return await transporter.sendMail({
//         from: process.env.EMAIL_FROM,
//         ...data //to, subject, html
//     })
// }

// export default sendEmail

export default async function sendEmail(data) {
    const transporter = nodemailer.createTransport(process.env.EMAIL_SERVER)

  return await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        ...data //to, subject, html
    })
}
