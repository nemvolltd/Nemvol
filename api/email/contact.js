import { sendEmail, sendWhatsApp, validate } from '../_lib/helpers.js'
import { contactEmailTemplate } from '../_lib/templates/contactEmail.js'
import { confirmationEmailTemplate } from '../_lib/templates/confirmationEmail.js'

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ success: false, message: 'Method not allowed' })

    const { name, email, projectType, message } = req.body
    const errors = validate(['name', 'email'], req.body)
    if (errors.length) return res.status(400).json({ success: false, errors })

    const results = await Promise.allSettled([
        sendEmail({
            to: process.env.RECIPIENT_EMAIL,
            replyTo: email,
            subject: `New Strategy Session Request from ${name}`,
            html: contactEmailTemplate({ name, email, projectType, message })
        }),
        sendEmail({
            to: email,
            subject: `We got your request, ${name}`,
            html: confirmationEmailTemplate({ name, projectType })
        }),
        sendWhatsApp(
            `📩 New Strategy Session\n\nName: ${name}\nEmail: ${email}\nProject: ${projectType || 'Not specified'}${message ? `\nMessage: ${message}` : ''}`
        )
    ])

    results.forEach((r, i) => {
        if (r.status === 'rejected') console.error(`contact[${i}] failed:`, r.reason)
    })

    res.json({ success: true, message: 'Consultation request sent successfully!' })
}
