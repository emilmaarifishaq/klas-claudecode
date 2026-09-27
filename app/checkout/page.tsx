'use client'

import { useState } from 'react'
import { AuthCard, inputClass, buttonClass } from '@/components/AuthCard'

export default function CheckoutPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({ name: '', email: '' })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setIsLoading(true)
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = (await response.json().catch(() => ({}))) as { error?: string; checkoutUrl?: string }
      if (!response.ok || !data.checkoutUrl) throw new Error(data.error || 'Gagal memulai pembayaran')
      window.location.href = data.checkoutUrl
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan')
      setIsLoading(false)
    }
  }

  return (
    <AuthCard title="Beli Akses" subtitle="Sekali bayar, akses selamanya">
      {error && <div className="mb-4 p-3 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive text-sm">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Nama Lengkap</label>
          <input type="text" required value={formData.name} placeholder="Nama kamu" className={inputClass}
            onChange={e => setFormData({ ...formData, name: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Email Aktif</label>
          <input type="email" required value={formData.email} placeholder="kamu@contoh.com" className={inputClass}
            onChange={e => setFormData({ ...formData, email: e.target.value })} />
          <p className="mt-1 text-xs text-muted-foreground">Email dan password untuk masuk dikirim ke sini setelah pembayaran berhasil.</p>
        </div>
        <button type="submit" disabled={isLoading} className={buttonClass}>
          {isLoading ? 'Menyiapkan pembayaran...' : 'Bayar dengan QRIS'}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Sudah punya akun? <a href="/login" className="text-primary font-semibold hover:underline">Masuk di sini</a>
      </p>
    </AuthCard>
  )
}
