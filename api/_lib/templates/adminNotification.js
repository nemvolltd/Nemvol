const typeLabels = {
    contact: 'Strategy Session Request',
    newsletter: 'Newsletter Subscription',
    'lead-magnet': 'Playbook Download',
    booking: 'Booking Request'
}

const BASE = `font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif`

export const adminNotificationTemplate = ({ type, data }) => {
    const label = typeLabels[type] || 'New Submission'

    const rows = Object.entries(data)
        .filter(([, v]) => v)
        .map(([key, value]) => `
      <tr>
        <td style="padding:10px 16px;font-size:12px;font-weight:600;color:#6b7280;text-transform:capitalize;width:120px;border-bottom:1px solid #f3f4f6;">${key}</td>
        <td style="padding:10px 16px;font-size:14px;color:#111827;border-bottom:1px solid #f3f4f6;">${value}</td>
      </tr>`).join('')

    return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f9fafb;${BASE}">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
    <tr><td align="center">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="width:100%;max-width:560px;background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">

        <tr>
          <td style="padding:24px 32px;border-bottom:1px solid #e5e7eb;">
            <span style="font-size:18px;font-weight:700;color:#111827;letter-spacing:-0.3px;">NEMVOL</span>
          </td>
        </tr>

        <tr>
          <td style="padding:28px 32px;">
            <p style="margin:0 0 4px;font-size:11px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:1px;">${label}</p>
            <p style="margin:0 0 24px;font-size:20px;font-weight:700;color:#111827;">New submission received</p>

            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
              ${rows}
            </table>

            <p style="margin:20px 0 0;font-size:12px;color:#9ca3af;">
              Received ${new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}
            </p>
          </td>
        </tr>

        <tr>
          <td style="padding:16px 32px;border-top:1px solid #f3f4f6;">
            <p style="margin:0;font-size:11px;color:#9ca3af;">© ${new Date().getFullYear()} Nemvol Limited · <a href="https://nemvol.com" style="color:#2563eb;text-decoration:none;">nemvol.com</a></p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}
