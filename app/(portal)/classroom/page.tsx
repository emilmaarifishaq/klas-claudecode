import Link from 'next/link'
import { stages, courseStages, bonusStages, type Stage } from '@/data/stages'
import { countLessons } from '@/lib/content'
import StageProgress from './StageProgress'

const cardGradient: Record<Stage['category'], string> = {
  course: 'from-blue-700 via-blue-600 to-indigo-700',
  bonus: 'from-purple-700 via-violet-600 to-purple-800',
}

function StageCard({ stage }: { stage: Stage }) {
  return (
    <Link
      href={`/classroom/${stage.slug}`}
      className="bg-white dark:bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group flex flex-col"
    >
      <div className={`relative h-44 bg-gradient-to-br ${cardGradient[stage.category]} flex items-center justify-center`}>
        <span className="text-7xl drop-shadow-lg select-none">{stage.emoji}</span>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="font-bold text-foreground text-sm leading-tight mb-1 group-hover:text-primary transition-colors">
          {stage.title}
        </div>
        <div className="text-xs text-muted-foreground mb-4 line-clamp-2 flex-1">{stage.description}</div>
        <StageProgress stageSlug={stage.slug} totalModules={countLessons(stage.id)} />
      </div>
    </Link>
  )
}

function StageGrid({ title, items }: { title: string; items: Stage[] }) {
  if (items.length === 0) return null
  return (
    <div>
      <h2 className="text-base font-semibold text-foreground mb-4 pb-2 border-b border-border">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map(stage => <StageCard key={stage.id} stage={stage} />)}
      </div>
    </div>
  )
}

export default function ClassroomPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-10">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Kelas</h1>
        <p className="text-muted-foreground text-sm mt-1">
          {stages.length} stage · {stages.reduce((a, s) => a + countLessons(s.id), 0)} materi
        </p>
      </div>
      <StageGrid title="📚 Materi Inti" items={courseStages} />
      <StageGrid title="⭐ Bonus" items={bonusStages} />
    </div>
  )
}
