import { NextResponse } from 'next/server'
import { randomUUID } from 'crypto'
import { createOrder, attachTripayReference } from '@/lib/db/orders'
import { hasUser } from '@/lib/db/users'
import { createQrisTransaction } from '@/lib/tripay'
import { PRODUCT_NAME, PRODUCT_PRICE_IDR } from '@/lib/product'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  if (!PRODUCT_PRICE_IDR || PRODUCT_PRICE_IDR <= 0) {
    return NextResponse.json({ error: 'Harga produk belum diatur' }, { status: 500 })
  }

  const body: unknown = await request.json().catch(() => null)
  const record = (body && typeof body === 'object' ? body : {}) as Record<string, unknown>
  const email = typeof record.email === 'string' ? record.email.trim().toLowerCase() : ''
  const name = typeof record.name === 'string' ? record.name.trim().slice(0, 100) : ''

  if (!name || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Nama dan email yang valid wajib diisi' }, { status: 400 })
  }
  if (await hasUser(email)) {
    return NextResponse.json({ error: 'Email ini sudah punya akun. Silakan masuk.' }, { status: 409 })
  }

  const merchantRef = `KLAS-${Date.now()}-${randomUUID().slice(0, 8)}`
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || new URL(request.url).origin

  await createOrder({ merchantRef, customerName: name, customerEmail: email, amount: PRODUCT_PRICE_IDR })

  try {
    const transaction = await createQrisTransaction({
      merchantRef,
      amount: PRODUCT_PRICE_IDR,
      customerName: name,
      customerEmail: email,
      productName: PRODUCT_NAME,
      callbackUrl: `${appUrl}/api/tripay-callback`,
      returnUrl: `${appUrl}/checkout/thank-you`,
    })
    await attachTripayReference(merchantRef, transaction.reference, transaction.checkoutUrl)
    return NextResponse.json({ checkoutUrl: transaction.checkoutUrl })
  } catch (error) {
    console.error('[checkout] Tripay error', merchantRef, error)
    return NextResponse.json({ error: 'Gagal memulai pembayaran. Coba lagi.' }, { status: 502 })
  }
}
