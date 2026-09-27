const sampleMembers = [
  { name: 'Duncan Rogoff', handle: 'duncanrogoff', level: 8, title: 'Claude Lord', emoji: '🔮', joined: 'Feb 2024', location: 'San Francisco, CA' },
  { name: 'Alex Chen', handle: 'alexchen', level: 7, title: 'Claude Master', emoji: '👑', joined: 'Mar 2024', location: 'New York, NY' },
  { name: 'Sarah Kim', handle: 'sarahkim', level: 7, title: 'Claude Master', emoji: '👑', joined: 'Mar 2024', location: 'Austin, TX' },
  { name: 'Marcus Thompson', handle: 'marcust', level: 4, title: 'AI Wizard', emoji: '🧙', joined: 'Apr 2024', location: 'London, UK' },
  { name: 'Priya Sharma', handle: 'priyas', level: 4, title: 'AI Wizard', emoji: '🧙', joined: 'Apr 2024', location: 'Toronto, CA' },
  { name: 'James Wu', handle: 'jameswu', level: 3, title: 'Architect', emoji: '🏛️', joined: 'May 2024', location: 'Seattle, WA' },
  { name: 'Maria Santos', handle: 'marias', level: 3, title: 'Architect', emoji: '🏛️', joined: 'May 2024', location: 'São Paulo, BR' },
  { name: 'David Park', handle: 'davidp', level: 2, title: 'Built Different', emoji: '🧱', joined: 'Jun 2024', location: 'Seoul, KR' },
  { name: 'Emil Maarif Ishaq', handle: 'emil-maarif-ishaq-1646', level: 2, title: 'Built Different', emoji: '🧱', joined: 'Jun 2026', location: 'Cikarang, ID', isYou: true },
]

export default function MembersPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Members</h1>
        <p className="text-muted-foreground mt-1">6,875 members worldwide</p>
      </div>

      <div className="bg-card border border-border rounded-xl p-4 text-sm text-muted-foreground">
        Showing a sample of members. Visit{' '}
        <a href="https://www.skool.com/claudecodeclub/-/members" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          Skool Members →
        </a>{' '}
        for the full list.
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sampleMembers.map(m => (
          <div key={m.handle} className={`bg-card border rounded-xl p-4 ${m.isYou ? 'border-primary/40 bg-primary/5' : 'border-border'}`}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-lg">
                {m.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-foreground truncate flex items-center gap-1">
                  {m.name}
                  {m.isYou && <span className="text-xs text-primary">(you)</span>}
                </div>
                <div className="text-xs text-muted-foreground">@{m.handle}</div>
              </div>
            </div>
            <div className="text-xs text-muted-foreground space-y-0.5">
              <div>Lv{m.level} {m.title}</div>
              <div>{m.location}</div>
              <div>Joined {m.joined}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
