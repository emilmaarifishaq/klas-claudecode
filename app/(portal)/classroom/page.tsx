import Link from 'next/link'
import { stages, courseStages, bonusStages, rankStages, resourceStages } from '@/data/stages'
import { countLessons } from '@/lib/content'
import StageProgress from './StageProgress'

const cardGradient: Record<string, string> = {
  course: 'from-blue-700 via-blue-600 to-indigo-700',
  bonus: 'from-purple-700 via-violet-600 to-purple-800',
  resource: 'from-emerald-700 via-teal-600 to-green-700',
  rank: 'from-amber-600 via-yellow-500 to-orange-600',
}

function StageCard({ stage }: { stage: typeof stages[0] }) {
  const isLocked = !!stage.unlockLevel
  const gradient = cardGradient[stage.category]
  const totalModules = countLessons(stage.id) || stage.modules.length

  return (
    <Link
      href={`/classroom/${stage.slug}`}
      className="bg-white dark:bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group flex flex-col"
    >
      {/* Banner image area */}
      <div className={`relative h-44 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
        <span className="text-7xl drop-shadow-lg select-none">{stage.emoji}</span>
        {isLocked && (
          <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center gap-1">
            <span className="text-4xl">🔒</span>
            <span className="text-white text-sm font-semibold">Unlock at Level {stage.unlockLevel}</span>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col flex-1">
        <div className="font-bold text-foreground text-sm leading-tight mb-1 group-hover:text-primary transition-colors">
          {stage.title}
        </div>
        <div className="text-xs text-muted-foreground mb-4 line-clamp-2 flex-1">{stage.description}</div>

        {/* Progress bar — reads localStorage, updates live */}
        <StageProgress stageSlug={stage.slug} totalModules={totalModules} />
      </div>
    </Link>
  )
}

function StageGrid({ title, items }: { title: string; items: typeof stages }) {
  return (
    <div>
      <h2 className="text-base font-semibold text-foreground mb-4 pb-2 border-b border-border">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map(stage => (
          <StageCard key={stage.id} stage={stage} />
        ))}
      </div>
    </div>
  )
}

export default function ClassroomPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-10">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Classroom</h1>
        <p className="text-muted-foreground text-sm mt-1">
          {stages.length} stages · {stages.reduce((a, s) => a + s.modules.length, 0)} total modules
        </p>
      </div>

      <StageGrid title="📚 Core Course" items={courseStages} />
      <StageGrid title="⭐ Bonus Content" items={bonusStages} />
      <StageGrid title="🔧 Resources" items={resourceStages} />
      <StageGrid title="🏆 Rank Unlocks" items={rankStages} />
    </div>
  )
}
