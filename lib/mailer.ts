import { Resend } from 'resend'
import { PRODUCT_NAME } from './product'

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)
}

export async function sendLoginCredentialsEmail(params: { to: string; name: string; password: string }): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) throw new Error('Missing required environment variable: RESEND_API_KEY')

  const resend = new Resend(apiKey)
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || ''
  const name = escapeHtml(params.name)
  const email = escapeHtml(params.to)
  const product = escapeHtml(PRODUCT_NAME)

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM || 'onboarding@resend.dev',
    to: params.to,
    subject: `Akun ${PRODUCT_NAME} kamu sudah aktif`,
    html: `
      <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto;">
        <h2>Terima kasih, ${name}!</h2>
        <p>Pembayaran kamu sudah kami terima. Berikut akun untuk masuk ke ${product}:</p>
        <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
          <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0; font-weight: bold;">${email}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Password</td><td style="padding: 8px 0; font-weight: bold;">${escapeHtml(params.password)}</td></tr>
        </table>
        <p><a href="${appUrl}/login" style="display: inline-block; background: #171717; color: #fff; padding: 10px 20px; border-radius: 8px; text-decoration: none;">Masuk ke ${product}</a></p>
        <p style="color: #999; font-size: 12px; margin-top: 24px;">Simpan email ini baik-baik.</p>
      </div>
    `,
  })
  if (error) throw new Error(`Resend failed: ${error.message}`)
}
