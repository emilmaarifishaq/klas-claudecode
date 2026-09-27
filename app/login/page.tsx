'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { AuthCard, inputClass, buttonClass } from '@/components/AuthCard'

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({ email: '', password: '' })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setIsLoading(true)
    const result = await signIn('credentials', { ...formData, redirect: false })
    if (result?.ok) {
      router.push('/')
      router.refresh()
      return
    }
    setError(result?.error || 'Gagal masuk')
    setIsLoading(false)
  }

  return (
    <AuthCard title="Masuk" subtitle="Masuk ke kelasmu">
      {error && <div className="mb-4 p-3 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive text-sm">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Email</label>
          <input type="email" required value={formData.email} placeholder="kamu@contoh.com" className={inputClass}
            onChange={e => setFormData({ ...formData, email: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Password</label>
          <input type="password" required value={formData.password} placeholder="••••••••" className={inputClass}
            onChange={e => setFormData({ ...formData, password: e.target.value })} />
        </div>
        <button type="submit" disabled={isLoading} className={buttonClass}>
          {isLoading ? 'Masuk...' : 'Masuk'}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Belum punya akses? <a href="/checkout" className="text-primary font-semibold hover:underline">Beli di sini</a>
      </p>
    </AuthCard>
  )
}
