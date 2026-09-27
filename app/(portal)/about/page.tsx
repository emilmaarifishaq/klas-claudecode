export default function AboutPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">About Claude Code Club</h1>
        <p className="text-muted-foreground mt-1">The #1 community for AI-powered developers</p>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-4xl">🦀</span>
          <div>
            <div className="text-xl font-bold text-foreground">Claude Code Club</div>
            <div className="text-sm text-muted-foreground">Skool Community · $9/month</div>
          </div>
        </div>

        <p className="text-sm text-foreground leading-relaxed">
          Claude Code Club is the premier community for developers learning to build with Claude Code and AI-powered development workflows.
          Founded by Duncan Rogoff (Forbes 30 Under 30, YCombinator alumni), the community provides structured learning, live sessions, and a
          supportive network of AI-forward developers.
        </p>

        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'Members', value: '6,875+', emoji: '👥' },
            { label: 'Monthly Cost', value: '$9 / mo', emoji: '💳' },
            { label: 'Course Stages', value: '36 stages', emoji: '📚' },
            { label: 'Founder', value: 'Duncan Rogoff', emoji: '👤' },
          ].map(s => (
            <div key={s.label} className="bg-muted rounded-lg p-3">
              <div className="text-lg mb-0.5">{s.emoji}</div>
              <div className="text-sm font-medium text-foreground">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 space-y-3">
        <h2 className="text-lg font-semibold text-foreground">What You Get</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {[
            '36-stage structured curriculum from beginner to advanced Claude Code usage',
            'Bonus content: MCP servers, deep dives, live session recordings',
            'Active community with 1,500+ posts across 8 categories',
            'Level-based progression system (9 levels, 33,000+ pts max)',
            'Direct access to founder and community experts',
            'Regular live sessions and Q&As',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 space-y-3">
        <h2 className="text-lg font-semibold text-foreground">About the Founder</h2>
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-xl shrink-0">👤</div>
          <div>
            <div className="font-medium text-foreground">Duncan Rogoff</div>
            <div className="text-xs text-muted-foreground mb-2">Founder · Forbes 30 Under 30 · YCombinator</div>
            <p className="text-sm text-muted-foreground">
              Serial entrepreneur and AI educator. Built multiple YC-backed companies before focusing on education around AI-first development.
              Created Claude Code Club to help developers unlock the full potential of AI-assisted coding.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <a
          href="https://www.skool.com/claudecodeclub"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Visit Claude Code Club on Skool →
        </a>
      </div>
    </div>
  )
}
