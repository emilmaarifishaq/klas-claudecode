import { PRODUCT_NAME } from '@/lib/product'

export default function AboutPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Tentang {PRODUCT_NAME}</h1>
        <p className="text-muted-foreground mt-1">Kelas online belajar membangun software dengan Claude Code</p>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 space-y-3">
        <h2 className="text-lg font-semibold text-foreground">Yang Kamu Dapatkan</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {[
            'Materi bertahap dari instalasi sampai proyek nyata',
            'Pelacak progres di setiap materi',
            'Akses selamanya, sekali bayar',
          ].map(item => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 text-sm text-muted-foreground">
        Butuh bantuan dengan akun atau pembayaran? Balas email berisi akun yang kami kirim setelah pembayaran.
      </div>
    </div>
  )
}
