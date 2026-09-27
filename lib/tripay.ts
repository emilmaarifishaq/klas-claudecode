import { createHmac, timingSafeEqual } from 'crypto'

const SANDBOX = process.env.TRIPAY_SANDBOX !== 'false'
const BASE_URL = SANDBOX ? 'https://tripay.co.id/api-sandbox' : 'https://tripay.co.id/api'

function requireEnv(name: string): string {
  const value = process.env[name]
  if (!value) throw new Error(`Missing required environment variable: ${name}`)
  return value
}

export interface CreateTransactionResult {
  reference: string
  checkoutUrl: string
}

export async function createQrisTransaction(params: {
  merchantRef: string
  amount: number
  customerName: string
  customerEmail: string
  productName: string
  callbackUrl: string
  returnUrl: string
}): Promise<CreateTransactionResult> {
  const merchantCode = requireEnv('TRIPAY_MERCHANT_CODE')
  const apiKey = requireEnv('TRIPAY_API_KEY')
  const privateKey = requireEnv('TRIPAY_PRIVATE_KEY')

  const signature = createHmac('sha256', privateKey)
    .update(`${merchantCode}${params.merchantRef}${params.amount}`)
    .digest('hex')

  const response = await fetch(`${BASE_URL}/transaction/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      method: 'QRIS',
      merchant_ref: params.merchantRef,
      amount: params.amount,
      customer_name: params.customerName,
      customer_email: params.customerEmail,
      order_items: [{ name: params.productName, price: params.amount, quantity: 1 }],
      callback_url: params.callbackUrl,
      return_url: params.returnUrl,
      expired_time: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
      signature,
    }),
  })

  const data = (await response.json().catch(() => null)) as {
    success?: boolean
    message?: string
    data?: { reference: string; checkout_url: string }
  } | null
  if (!response.ok || !data?.success || !data.data) {
    throw new Error(data?.message || `Tripay transaction creation failed (${response.status})`)
  }
  return { reference: data.data.reference, checkoutUrl: data.data.checkout_url }
}

export function verifyCallbackSignature(rawBody: string, signatureHeader: string | null): boolean {
  if (!signatureHeader) return false
  const expected = Buffer.from(createHmac('sha256', requireEnv('TRIPAY_PRIVATE_KEY')).update(rawBody).digest('hex'))
  const received = Buffer.from(signatureHeader)
  return expected.length === received.length && timingSafeEqual(expected, received)
}
