import nodemailer from "nodemailer"
import { ApiErrors } from "./ApiErrors.js"

const mailSender = async (email, title, body) => {
    try {
        const mailHost = process.env.MAIL_HOST
        const mailUser = process.env.MAIL_USER
        const mailPass = process.env.MAIL_PASS
        const mailPort = process.env.MAIL_PORT ? Number(process.env.MAIL_PORT) : 587
        const mailSecure = String(process.env.MAIL_SECURE).toLowerCase() === "true"
        let transporter

        if (!mailHost || !mailUser || !mailPass) {
            if (process.env.NODE_ENV === "production") {
                const message = "Missing email configuration. Set MAIL_HOST, MAIL_USER, and MAIL_PASS in .env"
                console.log(message)
                throw new ApiErrors(500, message)
            }

            const testAccount = await nodemailer.createTestAccount()
            transporter = nodemailer.createTransport({
                host: testAccount.smtp.host,
                port: testAccount.smtp.port,
                secure: testAccount.smtp.secure,
                auth: {
                    user: testAccount.user,
                    pass: testAccount.pass,
                },
            })
        } else {
            process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
            transporter = nodemailer.createTransport({
                host: mailHost,
                port: mailPort,
                secure: mailSecure,
                auth: {
                    user: mailUser,
                    pass: mailPass,
                },
            })
        }

        let info = await transporter.sendMail({
            from: "LearnSphere - by Atul Pandey",
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`,
        })

        if (!mailHost || !mailUser || !mailPass) {
            const previewUrl = nodemailer.getTestMessageUrl(info)
            console.log("OTP email preview URL:", previewUrl)
        }

        return info
    } catch (error) {
        console.log("Email send failed:", error.message || error)
        throw new ApiErrors(500, error.message || "Error occurred while sending email")
    }
}

export {mailSender}