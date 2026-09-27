import { NextResponse } from 'next/server'
import { randomBytes } from 'crypto'
import { hash } from 'bcryptjs'
import { verifyCallbackSignature } from '@/lib/tripay'
import { getOrderByMerchantRef, markOrderPaid, markOrderStatus } from '@/lib/db/orders'
import { createUser } from '@/lib/db/users'
import { sendLoginCredentialsEmail } from '@/lib/mailer'

export async function POST(request: Request) {
  const rawBody = await request.text()

  if (!verifyCallbackSignature(rawBody, request.headers.get('X-Callback-Signature'))) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 403 })
  }
  if (request.headers.get('X-Callback-Event') !== 'payment_status') {
    return NextResponse.json({ error: 'Unsupported event' }, { status: 400 })
  }

  let payload: { merchant_ref?: string; status?: string }
  try {
    payload = JSON.parse(rawBody)
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const merchantRef = payload.merchant_ref
  if (!merchantRef) return NextResponse.json({ error: 'Missing merchant_ref' }, { status: 400 })

  const order = await getOrderByMerchantRef(merchantRef)
  if (!order) return NextResponse.json({ error: 'Unknown order' }, { status: 404 })

  if (payload.status === 'PAID') {
    if (await markOrderPaid(merchantRef)) {
      const password = randomBytes(9).toString('base64url')
      const created = await createUser({
        email: order.customerEmail,
        password: await hash(password, 12),
        name: order.customerName,
      })
      if (!created) {
        console.warn('[tripay-callback] paid order for existing account', merchantRef, order.customerEmail)
      } else {
        try {
          await sendLoginCredentialsEmail({ to: order.customerEmail, name: order.customerName, password })
        } catch (error) {
          // Account exists but the buyer has no password: needs a manual resend (see SETUP.md).
          console.error('[tripay-callback] credential email failed', merchantRef, order.customerEmail, error)
        }
      }
    }
  } else if (payload.status === 'FAILED' || payload.status === 'EXPIRED') {
    await markOrderStatus(merchantRef, payload.status === 'FAILED' ? 'failed' : 'expired')
  }

  return NextResponse.json({ success: true })
}
