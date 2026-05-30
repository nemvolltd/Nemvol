import { sendEmail, validate } from '../_lib/helpers.js'
import { newsletterWelcomeTemplate } from '../_lib/templates/newsletterWelcome.js'
import { adminNotificationTemplate } from '../_lib/templates/adminNotification.js'

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ success: false, message: 'Method not allowed' })

    const { email } = req.body
    const errors = validate(['email'], req.body)
    if (errors.length) return res.status(400).json({ success: false, errors })

    try {
        await Promise.all([
            sendEmail({
                to: email,
                subject: 'Welcome to Nemvol Insights',
                html: newsletterWelcomeTemplate({ email })
            }),
            sendEmail({
                to: process.env.RECIPIENT_EMAIL,
                subject: `[Nemvol] New Subscriber: ${email}`,
                html: adminNotificationTemplate({ type: 'newsletter', data: { email } })
            })
        ])

        res.json({ success: true, message: 'Successfully subscribed!' })
    } catch (error) {
        console.error('newsletter error:', error)
        res.status(500).json({ success: false, message: 'Failed to subscribe. Please try again.' })
    }
}
