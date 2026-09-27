import { sql } from '@vercel/postgres'
import { ensureSchema } from './schema'

export interface Order {
  merchantRef: string
  tripayReference: string | null
  customerName: string
  customerEmail: string
  amount: number
  status: 'pending' | 'paid' | 'failed' | 'expired'
  checkoutUrl: string | null
}

export async function createOrder(order: {
  merchantRef: string
  customerName: string
  customerEmail: string
  amount: number
}): Promise<void> {
  await ensureSchema()
  await sql`
    INSERT INTO orders (merchant_ref, customer_name, customer_email, amount, status)
    VALUES (${order.merchantRef}, ${order.customerName}, ${order.customerEmail}, ${order.amount}, 'pending')
  `
}

export async function attachTripayReference(merchantRef: string, tripayReference: string, checkoutUrl: string): Promise<void> {
  await ensureSchema()
  await sql`
    UPDATE orders SET tripay_reference = ${tripayReference}, checkout_url = ${checkoutUrl}
    WHERE merchant_ref = ${merchantRef}
  `
}

export async function getOrderByMerchantRef(merchantRef: string): Promise<Order | undefined> {
  await ensureSchema()
  const { rows } = await sql`
    SELECT merchant_ref, tripay_reference, customer_name, customer_email, amount, status, checkout_url
    FROM orders WHERE merchant_ref = ${merchantRef}
  `
  const row = rows[0]
  if (!row) return undefined
  return {
    merchantRef: row.merchant_ref,
    tripayReference: row.tripay_reference,
    customerName: row.customer_name,
    customerEmail: row.customer_email,
    amount: row.amount,
    status: row.status,
    checkoutUrl: row.checkout_url,
  }
}

// Atomic: only the first caller for a pending order gets true, so duplicate
// callbacks never create a second account or send a second email.
export async function markOrderPaid(merchantRef: string): Promise<boolean> {
  await ensureSchema()
  const { rowCount } = await sql`
    UPDATE orders SET status = 'paid', paid_at = now()
    WHERE merchant_ref = ${merchantRef} AND status = 'pending'
  `
  return (rowCount ?? 0) > 0
}

export async function markOrderStatus(merchantRef: string, status: 'failed' | 'expired'): Promise<void> {
  await ensureSchema()
  await sql`UPDATE orders SET status = ${status} WHERE merchant_ref = ${merchantRef} AND status = 'pending'`
}
