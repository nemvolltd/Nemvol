import { Resend } from 'resend'

export const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = (payload) =>
    resend.emails.send({ from: process.env.FROM_EMAIL, ...payload })

export const sendWhatsApp = async (text) => {
    const { WHATSAPP_TOKEN, WHATSAPP_PHONE_ID, WHATSAPP_RECIPIENT } = process.env
    if (!WHATSAPP_TOKEN || !WHATSAPP_PHONE_ID || !WHATSAPP_RECIPIENT) return

    const res = await fetch(`https://graph.facebook.com/v19.0/${WHATSAPP_PHONE_ID}/messages`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${WHATSAPP_TOKEN}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            messaging_product: 'whatsapp',
            to: WHATSAPP_RECIPIENT,
            type: 'text',
            text: { body: text }
        })
    })

    if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(`WhatsApp API ${res.status}: ${err?.error?.message ?? res.statusText}`)
    }
}

export const validate = (fields, body) => {
    const errors = []
    if (fields.includes('name') && !body.name?.trim()) errors.push('Name is required')
    if (fields.includes('email') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) errors.push('Valid email is required')
    return errors
}
