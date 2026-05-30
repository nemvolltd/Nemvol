const BASE = `font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif`

export const newsletterWelcomeTemplate = ({ email }) => `<!DOCTYPE html>
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
            <p style="margin:0 0 16px;font-size:20px;font-weight:700;color:#111827;">You're subscribed.</p>
            <p style="margin:0 0 16px;font-size:15px;color:#374151;line-height:1.7;">
              Welcome to Nemvol Insights. Every month we send founders and product teams practical advice on MVPs, product strategy, and growth — no fluff.
            </p>
            <p style="margin:0 0 28px;font-size:15px;color:#374151;line-height:1.7;">
              Check out our latest thinking at
              <a href="https://nemvol.com/blog" style="color:#2563eb;text-decoration:none;">nemvol.com/blog</a>.
            </p>
            <p style="margin:0;font-size:14px;color:#6b7280;">
              Questions? Write to <a href="mailto:hello@nemvol.com" style="color:#2563eb;text-decoration:none;">hello@nemvol.com</a>
            </p>
          </td>
        </tr>

        <tr>
          <td style="padding:16px 32px;border-top:1px solid #f3f4f6;">
            <p style="margin:0 0 4px;font-size:11px;color:#9ca3af;">You subscribed with ${email}</p>
            <p style="margin:0;font-size:11px;color:#9ca3af;">© ${new Date().getFullYear()} Nemvol Limited · <a href="https://nemvol.com" style="color:#2563eb;text-decoration:none;">nemvol.com</a></p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
