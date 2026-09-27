import { Badge } from '@/components/ui/badge'

const levelInfo = [
  { level: 1, title: 'Inner Circle', points: 0, emoji: '🌱' },
  { level: 2, title: 'Built Different', points: 5, emoji: '🧱' },
  { level: 3, title: 'Architect', points: 20, emoji: '🏛️' },
  { level: 4, title: 'AI Wizard', points: 65, emoji: '🧙' },
  { level: 5, title: 'Untouchable', points: 155, emoji: '⚡' },
  { level: 6, title: 'Claude Legend', points: 515, emoji: '🌟' },
  { level: 7, title: 'Claude Master', points: 2015, emoji: '👑' },
  { level: 8, title: 'Claude Lord', points: 8015, emoji: '🔮' },
  { level: 9, title: 'Claude Almighty', points: 33015, emoji: '🦀' },
]

const leaderboard7d = [
  { rank: 1, name: 'Alex Chen', points: 145, level: 4 },
  { rank: 2, name: 'Sarah Kim', points: 132, level: 4 },
  { rank: 3, name: 'Marcus T.', points: 118, level: 3 },
  { rank: 4, name: 'Priya S.', points: 97, level: 3 },
  { rank: 5, name: 'James Wu', points: 89, level: 3 },
]

const leaderboardAllTime = [
  { rank: 1, name: 'Duncan Rogoff', points: 12540, level: 8 },
  { rank: 2, name: 'Alex Chen', points: 4210, level: 7 },
  { rank: 3, name: 'Sarah Kim', points: 3890, level: 7 },
  { rank: 4, name: 'Marcus T.', points: 2150, level: 7 },
  { rank: 5, name: 'Priya S.', points: 1840, level: 6 },
]

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) return <span className="text-lg">🥇</span>
  if (rank === 2) return <span className="text-lg">🥈</span>
  if (rank === 3) return <span className="text-lg">🥉</span>
  return <span className="text-muted-foreground text-sm w-6 text-center">#{rank}</span>
}

function LeaderboardTable({ title, data }: { title: string; data: typeof leaderboard7d }) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-foreground mb-3">{title}</h2>
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        {data.map((entry, i) => (
          <div key={i} className={`flex items-center gap-4 px-4 py-3 ${i < data.length - 1 ? 'border-b border-border' : ''}`}>
            <div className="w-8 flex justify-center">
              <RankBadge rank={entry.rank} />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground">{entry.name}</div>
              <div className="text-xs text-muted-foreground">{levelInfo[entry.level - 1]?.title}</div>
            </div>
            <div className="text-sm text-foreground font-medium">{entry.points.toLocaleString()} pts</div>
          </div>
        ))}
        <div className="flex items-center gap-4 px-4 py-3 bg-primary/5 border-t border-primary/20">
          <div className="w-8 flex justify-center">
            <span className="text-muted-foreground text-sm">…</span>
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-primary">Emil Maarif Ishaq (You)</div>
            <div className="text-xs text-muted-foreground">Built Different</div>
          </div>
          <div className="text-sm text-muted-foreground">6 pts</div>
        </div>
      </div>
    </div>
  )
}

export default function LeaderboardPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Leaderboard</h1>
        <p className="text-muted-foreground mt-1">Rank up by contributing to the community</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-foreground mb-3">Level System</h2>
        <div className="space-y-2">
          {levelInfo.map(l => (
            <div key={l.level} className={`flex items-center gap-4 p-3 rounded-lg border ${l.level <= 2 ? 'border-primary/30 bg-primary/5' : 'border-border bg-card'}`}>
              <span className="text-xl w-8 text-center">{l.emoji}</span>
              <div className="flex-1">
                <div className="text-sm font-medium text-foreground">Level {l.level} — {l.title}</div>
                <div className="text-xs text-muted-foreground">{l.points.toLocaleString()} engagement points to unlock</div>
              </div>
              {l.level <= 2 && <Badge variant="outline" className="text-xs text-primary border-primary/30">Unlocked ✓</Badge>}
            </div>
          ))}
        </div>
      </div>

      <LeaderboardTable title="🔥 7-Day Leaders" data={leaderboard7d} />
      <LeaderboardTable title="🏆 All-Time Leaders" data={leaderboardAllTime} />

      <div className="bg-card border border-border rounded-xl p-4 text-sm text-muted-foreground">
        <strong className="text-foreground">Your stats:</strong> Rank #273 (7d) · #591 (30d) · #883 (all-time) · 6 total points
      </div>
    </div>
  )
}
