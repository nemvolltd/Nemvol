import { Router } from 'express'
import { body, validationResult } from 'express-validator'
import resend from '../config/resend.js'
import { contactEmailTemplate } from '../templates/contactEmail.js'
import { newsletterWelcomeTemplate } from '../templates/newsletterWelcome.js'
import { adminNotificationTemplate } from '../templates/adminNotification.js'
import { emailLimiter } from '../middleware/rateLimit.js'
import { sendWhatsApp } from '../utils/whatsapp.js'

const router = Router()

// Apply rate limiting to all email routes
router.use(emailLimiter)

/**
 * POST /api/email/contact
 * Contact form → branded email to admin + confirmation to sender
 */
router.post('/contact', [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('message').optional().trim()
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() })
    }

    const { name, email, projectType, message } = req.body

    try {
        await Promise.all([
            // Notify Nemvol with full submission details
            resend.emails.send({
                from: process.env.FROM_EMAIL,
                to: process.env.RECIPIENT_EMAIL,
                replyTo: email,
                subject: `New Strategy Session Request from ${name}`,
                html: contactEmailTemplate({ name, email, projectType, message })
            }),
            // Confirmation email to the user
            resend.emails.send({
                from: process.env.FROM_EMAIL,
                to: email,
                subject: `We got your request, ${name} 👋`,
                html: adminNotificationTemplate({
                    type: 'contact',
                    data: { name, email, projectType, message }
                })
            }),
            // WhatsApp notification
            sendWhatsApp(
                `📩 New Strategy Session Request\n\nName: ${name}\nEmail: ${email}\nProject: ${projectType || 'Not specified'}${message ? `\nMessage: ${message}` : ''}`
            )
        ])

        res.json({ success: true, message: 'Consultation request sent successfully!' })
    } catch (error) {
        console.error('Email send error:', error)
        res.status(500).json({ success: false, message: 'Failed to send email. Please try again.' })
    }
})

/**
 * POST /api/email/newsletter
 * Newsletter signup → welcome email to subscriber + notify admin
 */
router.post('/newsletter', [
    body('email').isEmail().withMessage('Valid email is required')
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() })
    }

    const { email } = req.body

    try {
        // Send welcome email to subscriber
        await resend.emails.send({
            from: process.env.FROM_EMAIL,
            to: email,
            subject: 'Welcome to Nemvol Insights 🎉',
            html: newsletterWelcomeTemplate({ email })
        })

        // Notify admin
        await resend.emails.send({
            from: process.env.FROM_EMAIL,
            to: process.env.RECIPIENT_EMAIL,
            subject: `[Nemvol] New Newsletter Subscriber: ${email}`,
            html: adminNotificationTemplate({
                type: 'newsletter',
                data: { email }
            })
        })

        res.json({ success: true, message: 'Successfully subscribed!' })
    } catch (error) {
        console.error('Newsletter signup error:', error)
        res.status(500).json({ success: false, message: 'Failed to subscribe. Please try again.' })
    }
})

/**
 * POST /api/email/lead-magnet
 * Lead magnet → send download link + notify admin
 */
router.post('/lead-magnet', [
    body('email').isEmail().withMessage('Valid email is required')
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() })
    }

    const { email } = req.body

    try {
        // Send playbook link to subscriber
        await resend.emails.send({
            from: process.env.FROM_EMAIL,
            to: email,
            subject: 'Your 2026 MVP Playbook is Ready 🚀',
            html: newsletterWelcomeTemplate({ email }) // Reuse welcome template for now
        })

        // Notify admin
        await resend.emails.send({
            from: process.env.FROM_EMAIL,
            to: process.env.RECIPIENT_EMAIL,
            subject: `[Nemvol] Playbook Downloaded: ${email}`,
            html: adminNotificationTemplate({
                type: 'lead-magnet',
                data: { email }
            })
        })

        res.json({ success: true, message: 'Playbook sent to your email!' })
    } catch (error) {
        console.error('Lead magnet error:', error)
        res.status(500).json({ success: false, message: 'Failed to send playbook. Please try again.' })
    }
})

export default router
