import { AuthCard, buttonClass } from '@/components/AuthCard'

export default function ThankYouPage() {
  return (
    <AuthCard title="Terima kasih!">
      <p className="text-sm text-muted-foreground text-center mb-6">
        Kami sedang memproses pembayaranmu. Email dan password untuk masuk akan dikirim ke email kamu dalam beberapa
        menit setelah pembayaran dikonfirmasi. Cek juga folder spam.
      </p>
      <a href="/login" className={`${buttonClass} block text-center`}>Ke halaman masuk</a>
    </AuthCard>
  )
}
