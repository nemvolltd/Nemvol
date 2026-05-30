/**
 * Send a WhatsApp message via Meta Cloud API
 * Requires WHATSAPP_TOKEN, WHATSAPP_PHONE_ID, WHATSAPP_RECIPIENT in .env
 */
export const sendWhatsApp = async (text) => {
    const { WHATSAPP_TOKEN, WHATSAPP_PHONE_ID, WHATSAPP_RECIPIENT } = process.env
    if (!WHATSAPP_TOKEN || !WHATSAPP_PHONE_ID || !WHATSAPP_RECIPIENT) return

    await fetch(`https://graph.facebook.com/v19.0/${WHATSAPP_PHONE_ID}/messages`, {
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
}
