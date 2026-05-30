import { sendEmail, sendWhatsApp, validate } from '../_lib/helpers.js'
import { bookingConfirmationTemplate } from '../_lib/templates/bookingConfirmation.js'
import { adminNotificationTemplate } from '../_lib/templates/adminNotification.js'

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ success: false, message: 'Method not allowed' })

    const { name, email, phone, date, message } = req.body
    const errors = validate(['name', 'email'], req.body)
    if (errors.length) return res.status(400).json({ success: false, errors })

    const results = await Promise.allSettled([
        sendEmail({
            to: process.env.RECIPIENT_EMAIL,
            replyTo: email,
            subject: `New Booking from ${name}`,
            html: adminNotificationTemplate({ type: 'booking', data: { name, email, phone, date, message } })
        }),
        sendEmail({
            to: email,
            subject: `Booking request received, ${name}`,
            html: bookingConfirmationTemplate({ name, date, phone, message })
        }),
        sendWhatsApp(
            `📅 New Booking\n\nName: ${name}\nEmail: ${email}${phone ? `\nPhone: ${phone}` : ''}${date ? `\nDate: ${date}` : ''}${message ? `\nMessage: ${message}` : ''}`
        )
    ])

    const [adminEmail, userEmail] = results
    results.forEach((r, i) => {
        if (r.status === 'rejected') console.error(`booking[${i}] failed:`, r.reason)
    })

    if (adminEmail.status === 'rejected' && userEmail.status === 'rejected') {
        return res.status(500).json({ success: false, message: 'Failed to process booking. Please try again.' })
    }

    res.json({ success: true, message: 'Booking request received! Confirmation sent to your email.' })
}
