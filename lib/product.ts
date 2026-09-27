export const PRODUCT_NAME = process.env.PRODUCT_NAME || 'KLAS Claude Code'
export const PRODUCT_PRICE_IDR = Number(process.env.PRODUCT_PRICE_IDR || 99000)

export function formatIdr(amount: number): string {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(amount)
}
