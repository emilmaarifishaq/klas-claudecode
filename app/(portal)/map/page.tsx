const regions = [
  { name: 'United States', flag: '🇺🇸', members: '~2,800', pct: 41, bar: 41 },
  { name: 'United Kingdom', flag: '🇬🇧', members: '~550', pct: 8, bar: 8 },
  { name: 'Canada', flag: '🇨🇦', members: '~480', pct: 7, bar: 7 },
  { name: 'Australia', flag: '🇦🇺', members: '~340', pct: 5, bar: 5 },
  { name: 'Germany', flag: '🇩🇪', members: '~275', pct: 4, bar: 4 },
  { name: 'India', flag: '🇮🇳', members: '~275', pct: 4, bar: 4 },
  { name: 'Netherlands', flag: '🇳🇱', members: '~205', pct: 3, bar: 3 },
  { name: 'Brazil', flag: '🇧🇷', members: '~205', pct: 3, bar: 3 },
  { name: 'France', flag: '🇫🇷', members: '~205', pct: 3, bar: 3 },
  { name: 'Indonesia', flag: '🇮🇩', members: '~140', pct: 2, bar: 2, highlight: true },
  { name: 'Other', flag: '🌍', members: '~1,400', pct: 20, bar: 20 },
]

export default function MapPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Member Map</h1>
        <p className="text-muted-foreground mt-1">6,875 members in 90+ countries</p>
      </div>

      <div className="bg-card border border-border rounded-xl p-5 text-sm text-muted-foreground">
        Global distribution snapshot. For the interactive map visit{' '}
        <a href="https://www.skool.com/claudecodeclub/-/map?is=1" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          Skool Map →
        </a>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-foreground mb-3">Distribution by Country</h2>
        <div className="space-y-3">
          {regions.map(r => (
            <div key={r.name} className={`bg-card border rounded-xl p-4 ${r.highlight ? 'border-primary/40' : 'border-border'}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span>{r.flag}</span>
                  <span className={`text-sm font-medium ${r.highlight ? 'text-primary' : 'text-foreground'}`}>
                    {r.name} {r.highlight && '(you)'}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">{r.members} ({r.pct}%)</div>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${r.highlight ? 'bg-primary' : 'bg-border'}`}
                  style={{ width: `${Math.max(r.bar * 2, 2)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-4 text-sm text-muted-foreground">
        <div className="font-medium text-foreground mb-1">Top Cities</div>
        San Francisco · New York · London · Sydney · Toronto · Berlin · Amsterdam · Austin · Singapore · Jakarta
      </div>
    </div>
  )
}
