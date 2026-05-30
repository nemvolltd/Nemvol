import { Router } from 'express'
import { body, validationResult } from 'express-validator'
import resend from '../config/resend.js'
import { contactEmailTemplate } from '../templates/contactEmail.js'
import { confirmationEmailTemplate } from '../templates/confirmationEmail.js'
import { bookingConfirmationTemplate } from '../templates/bookingConfirmation.js'
import { newsletterWelcomeTemplate } from '../templates/newsletterWelcome.js'
import { adminNotificationTemplate } from '../templates/adminNotification.js'
import { emailLimiter } from '../middleware/rateLimit.js'
import { sendWhatsApp } from '../utils/whatsapp.js'

const router = Router()

router.use(emailLimiter)

// ─── Helpers ─────────────────────────────────────────────────────────────────

const validate = (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).json({ success: false, errors: errors.array() })
        return false
    }
    return true
}

const sendEmail = (payload) =>
    resend.emails.send({ from: process.env.FROM_EMAIL, ...payload })

// ─── POST /api/email/contact ──────────────────────────────────────────────────

router.post('/contact', [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('message').optional().trim()
], async (req, res) => {
    if (!validate(req, res)) return

    const { name, email, projectType, message } = req.body

    try {
        const results = await Promise.allSettled([
            sendEmail({
                to: process.env.RECIPIENT_EMAIL,
                replyTo: email,
                subject: `New Strategy Session Request from ${name}`,
                html: contactEmailTemplate({ name, email, projectType, message })
            }),
            sendEmail({
                to: email,
                subject: `We got your request, ${name} 👋`,
                html: confirmationEmailTemplate({ name, projectType })
            }),
            sendWhatsApp(
                `📩 New Strategy Session Request\n\nName: ${name}\nEmail: ${email}\nProject: ${projectType || 'Not specified'}${message ? `\nMessage: ${message}` : ''}`
            )
        ])

        const failed = results.filter(r => r.status === 'rejected')
        if (failed.length) {
            failed.forEach(f => console.error('Contact send partial failure:', f.reason))
        }

        res.json({ success: true, message: 'Consultation request sent successfully!' })
    } catch (error) {
        console.error('Contact route error:', error)
        res.status(500).json({ success: false, message: 'Failed to send. Please try again.' })
    }
})

// ─── POST /api/email/newsletter ───────────────────────────────────────────────

router.post('/newsletter', [
    body('email').isEmail().withMessage('Valid email is required')
], async (req, res) => {
    if (!validate(req, res)) return

    const { email } = req.body

    try {
        await Promise.all([
            sendEmail({
                to: email,
                subject: 'Welcome to Nemvol Insights 🎉',
                html: newsletterWelcomeTemplate({ email })
            }),
            sendEmail({
                to: process.env.RECIPIENT_EMAIL,
                subject: `[Nemvol] New Newsletter Subscriber: ${email}`,
                html: adminNotificationTemplate({ type: 'newsletter', data: { email } })
            })
        ])

        res.json({ success: true, message: 'Successfully subscribed!' })
    } catch (error) {
        console.error('Newsletter signup error:', error)
        res.status(500).json({ success: false, message: 'Failed to subscribe. Please try again.' })
    }
})

// ─── POST /api/email/lead-magnet ──────────────────────────────────────────────

router.post('/lead-magnet', [
    body('email').isEmail().withMessage('Valid email is required')
], async (req, res) => {
    if (!validate(req, res)) return

    const { email } = req.body

    try {
        await Promise.all([
            sendEmail({
                to: email,
                subject: 'Your 2026 MVP Playbook is Ready 🚀',
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
        console.error('Lead magnet error:', error)
        res.status(500).json({ success: false, message: 'Failed to send playbook. Please try again.' })
    }
})

// ─── POST /api/email/booking ──────────────────────────────────────────────────

router.post('/booking', [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('phone').optional().trim(),
    body('date').optional().trim(),
    body('message').optional().trim()
], async (req, res) => {
    if (!validate(req, res)) return

    const { name, email, phone, date, message } = req.body

    try {
        const results = await Promise.allSettled([
            sendEmail({
                to: process.env.RECIPIENT_EMAIL,
                replyTo: email,
                subject: `New Booking from ${name}`,
                html: adminNotificationTemplate({ type: 'booking', data: { name, email, phone, date, message } })
            }),
            sendEmail({
                to: email,
                subject: `We received your booking, ${name}`,
                html: bookingConfirmationTemplate({ name, date, phone, message })
            }),
            sendWhatsApp(
                `📅 New Booking\n\nName: ${name}\nEmail: ${email}${phone ? `\nPhone: ${phone}` : ''}${date ? `\nPreferred date: ${date}` : ''}${message ? `\nMessage: ${message}` : ''}`
            )
        ])

        const [adminEmail, userEmail, whatsapp] = results

        if (adminEmail.status === 'rejected') {
            console.error('Booking admin email failed:', adminEmail.reason)
        }
        if (userEmail.status === 'rejected') {
            console.error('Booking user confirmation failed:', userEmail.reason)
        }
        if (whatsapp.status === 'rejected') {
            console.warn('Booking WhatsApp notification failed:', whatsapp.reason)
        }

        // Fail the request only if both emails failed
        if (adminEmail.status === 'rejected' && userEmail.status === 'rejected') {
            return res.status(500).json({ success: false, message: 'Failed to process booking. Please try again.' })
        }

        res.json({ success: true, message: 'Booking request received! Confirmation sent to your email.' })
    } catch (error) {
        console.error('Booking route error:', error)
        res.status(500).json({ success: false, message: 'Failed to process booking. Please try again.' })
    }
})

export default router
