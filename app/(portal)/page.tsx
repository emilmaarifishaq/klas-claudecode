import Link from 'next/link'
import { stages, courseStages } from '@/data/stages'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'

const levelInfo = [
  { level: 1, title: 'Inner Circle', points: 0 },
  { level: 2, title: 'Built Different', points: 5 },
  { level: 3, title: 'Architect', points: 20 },
  { level: 4, title: 'AI Wizard', points: 65 },
  { level: 5, title: 'Untouchable', points: 155 },
  { level: 6, title: 'Claude Legend', points: 515 },
  { level: 7, title: 'Claude Master', points: 2015 },
  { level: 8, title: 'Claude Lord', points: 8015 },
  { level: 9, title: 'Claude Almighty', points: 33015 },
]

const stats = [
  { label: 'Total Stages', value: stages.length, emoji: '📚' },
  { label: 'Course Stages', value: courseStages.length, emoji: '🎓' },
  { label: 'Total Modules', value: stages.reduce((a, s) => a + s.modules.length, 0), emoji: '📖' },
  { label: 'Members', value: '6,875', emoji: '👥' },
]

export default function DashboardPage() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Welcome back, Emil 👋</h1>
        <p className="text-muted-foreground mt-1">Claude Code Club — Personal Learning Portal</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map(s => (
          <div key={s.label} className="bg-card border border-border rounded-xl p-4">
            <div className="text-2xl mb-1">{s.emoji}</div>
            <div className="text-2xl font-bold text-foreground">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Your Progress</h2>
            <p className="text-muted-foreground text-sm">Emil maarif Ishaq · @emil-maarif-ishaq-1646</p>
          </div>
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
            🧱 Level 2 — Built Different
          </Badge>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>6 / 20 points to Level 3 (Architect)</span>
            <span>30%</span>
          </div>
          <Progress value={30} className="h-2" />
        </div>
        <div className="mt-4 grid grid-cols-3 md:grid-cols-9 gap-2">
          {levelInfo.map(l => (
            <div key={l.level} className={`text-center p-2 rounded-lg text-xs ${l.level <= 2 ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
              <div className="font-bold">Lv{l.level}</div>
              <div className="truncate text-[10px]">{l.title.split(' ')[0]}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Continue Learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {courseStages.slice(0, 6).map(stage => (
            <Link
              key={stage.id}
              href={`/classroom/${stage.slug}`}
              className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 hover:bg-primary/5 transition-colors group"
            >
              <div className="text-2xl mb-2">{stage.emoji}</div>
              <div className="font-medium text-foreground group-hover:text-primary text-sm line-clamp-1">{stage.title}</div>
              <div className="text-xs text-muted-foreground mt-1">{stage.description}</div>
              <div className="text-xs text-muted-foreground mt-2">{stage.modules.length} modules</div>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Level Unlock Roadmap</h2>
        <div className="space-y-2">
          {levelInfo.map(l => (
            <div key={l.level} className={`flex items-center gap-4 p-3 rounded-lg border ${l.level <= 2 ? 'border-primary/30 bg-primary/5' : 'border-border bg-card'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${l.level <= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                {l.level}
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-foreground">{l.title}</div>
                <div className="text-xs text-muted-foreground">{l.points.toLocaleString()} engagement points</div>
              </div>
              {l.level <= 2 && <Badge variant="outline" className="text-xs text-primary border-primary/30">Unlocked ✓</Badge>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
