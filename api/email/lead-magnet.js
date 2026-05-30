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
                subject: 'Your 2026 MVP Playbook is Ready',
                html: newsletterWelcomeTemplate({ email })
            }),
            sendEmail({
                to: process.env.RECIPIENT_EMAIL,
                subject: `[Nemvol] Playbook Downloaded: ${email}`,
                html: adminNotificationTemplate({ type: 'lead-magnet', data: { email } })
            })
        ])

        res.json({ success: true, message: 'Playbook sent to your email!' })
    } catch (error) {
        console.error('lead-magnet error:', error)
        res.status(500).json({ success: false, message: 'Failed to send playbook. Please try again.' })
    }
}
