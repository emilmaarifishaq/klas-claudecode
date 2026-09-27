import Link from 'next/link'
import { stages } from '@/data/stages'
import { PRODUCT_NAME, PRODUCT_PRICE_IDR, formatIdr } from '@/lib/product'

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-16 space-y-10">
        <div className="text-center space-y-4">
          <div className="text-5xl">🎓</div>
          <h1 className="text-4xl font-bold text-foreground">{PRODUCT_NAME}</h1>
          <p className="text-lg text-muted-foreground">
            Belajar membangun software bersama Claude Code, langkah demi langkah, dalam Bahasa Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link href="/checkout" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90">
              Beli Akses — {formatIdr(PRODUCT_PRICE_IDR)}
            </Link>
            <Link href="/login" className="border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted">
              Sudah punya akun? Masuk
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">Sekali bayar, akses selamanya. Pembayaran via QRIS.</p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Isi Kelas</h2>
          <div className="space-y-2">
            {stages.map(s => (
              <div key={s.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <span className="text-2xl">{s.emoji}</span>
                <div>
                  <div className="text-sm font-medium text-foreground">{s.title}</div>
                  <div className="text-xs text-muted-foreground">{s.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
