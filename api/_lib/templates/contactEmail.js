const BASE = `font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif`

export const contactEmailTemplate = ({ name, email, projectType, message }) => `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f9fafb;${BASE}">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
    <tr><td align="center">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="width:100%;max-width:560px;background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">

        <tr>
          <td style="padding:24px 32px;border-bottom:1px solid #e5e7eb;">
            <span style="font-size:18px;font-weight:700;color:#111827;">NEMVOL</span>
          </td>
        </tr>

        <tr>
          <td style="padding:28px 32px;">
            <p style="margin:0 0 4px;font-size:11px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:1px;">Strategy Session Request</p>
            <p style="margin:0 0 24px;font-size:20px;font-weight:700;color:#111827;">${name} wants to connect</p>

            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;margin-bottom:24px;">
              <tr>
                <td style="padding:10px 16px;font-size:12px;font-weight:600;color:#6b7280;width:120px;border-bottom:1px solid #f3f4f6;">Name</td>
                <td style="padding:10px 16px;font-size:14px;color:#111827;border-bottom:1px solid #f3f4f6;">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 16px;font-size:12px;font-weight:600;color:#6b7280;border-bottom:1px solid #f3f4f6;">Email</td>
                <td style="padding:10px 16px;font-size:14px;border-bottom:1px solid #f3f4f6;"><a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 16px;font-size:12px;font-weight:600;color:#6b7280;${message ? 'border-bottom:1px solid #f3f4f6;' : ''}">Project</td>
                <td style="padding:10px 16px;font-size:14px;color:#111827;${message ? 'border-bottom:1px solid #f3f4f6;' : ''}">${projectType || '—'}</td>
              </tr>
              ${message ? `<tr>
                <td style="padding:10px 16px;font-size:12px;font-weight:600;color:#6b7280;vertical-align:top;">Message</td>
                <td style="padding:10px 16px;font-size:14px;color:#374151;line-height:1.6;">${message}</td>
              </tr>` : ''}
            </table>

            <a href="mailto:${email}?subject=Re: Your Strategy Session — Nemvol"
               style="display:inline-block;background:#2563eb;color:#ffffff;padding:11px 24px;border-radius:6px;font-size:13px;font-weight:600;text-decoration:none;">
              Reply to ${name}
            </a>
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
