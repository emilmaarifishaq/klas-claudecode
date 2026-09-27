import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { stages, courseStages } from '@/data/stages'
import { countLessons } from '@/lib/content'
import StageProgress from './classroom/StageProgress'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  const firstName = session?.user?.name?.split(' ')[0] ?? ''
  const totalLessons = stages.reduce((a, s) => a + countLessons(s.id), 0)

  const stats = [
    { label: 'Total Stage', value: stages.length, emoji: '📚' },
    { label: 'Stage Inti', value: courseStages.length, emoji: '🎓' },
    { label: 'Total Materi', value: totalLessons, emoji: '📖' },
  ]

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Halo, {firstName} 👋</h1>
        <p className="text-muted-foreground mt-1">Lanjutkan belajarmu hari ini.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map(s => (
          <div key={s.label} className="bg-card border border-border rounded-xl p-4">
            <div className="text-2xl mb-1">{s.emoji}</div>
            <div className="text-2xl font-bold text-foreground">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Lanjutkan Belajar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {courseStages.map(stage => (
            <Link
              key={stage.id}
              href={`/classroom/${stage.slug}`}
              className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 hover:bg-primary/5 transition-colors group"
            >
              <div className="text-2xl mb-2">{stage.emoji}</div>
              <div className="font-medium text-foreground group-hover:text-primary text-sm line-clamp-1">{stage.title}</div>
              <div className="text-xs text-muted-foreground mt-1 mb-3">{stage.description}</div>
              <StageProgress stageSlug={stage.slug} totalModules={countLessons(stage.id)} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
