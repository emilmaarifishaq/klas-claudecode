export function AuthCard({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8 pb-4 text-center">
          <div className="text-4xl mb-3">🎓</div>
          <h1 className="text-2xl font-bold text-foreground">{title}</h1>
          {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
        </div>
        <div className="p-8 pt-4">{children}</div>
      </div>
    </main>
  )
}

export const inputClass =
  'w-full px-4 py-2 bg-background text-foreground border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
export const buttonClass =
  'w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-primary/90 transition disabled:opacity-50'
