import { Badge } from '@/components/ui/badge'

const categories = [
  { name: 'Announcements', emoji: '📢', description: 'Official updates from the team' },
  { name: 'Ask AI Anything', emoji: '🤖', description: 'Questions about AI & Claude' },
  { name: 'Wins', emoji: '🏆', description: 'Share your wins and progress' },
  { name: 'Showcase', emoji: '✨', description: 'Show off what you built' },
  { name: 'Claude Code Tips', emoji: '💡', description: 'Tips and tricks for Claude Code' },
  { name: 'Introductions', emoji: '👋', description: 'Introduce yourself' },
  { name: 'General', emoji: '💬', description: 'General discussion' },
  { name: 'Feedback & Ideas', emoji: '💭', description: 'Suggest improvements' },
]

const pinnedPosts = [
  {
    title: 'START HERE: How to get the most out of Claude Code Club',
    author: 'Duncan Rogoff',
    emoji: '📌',
    date: 'Pinned',
  },
  {
    title: 'The Claude Code Workflow — Master Thread',
    author: 'Duncan Rogoff',
    emoji: '📌',
    date: 'Pinned',
  },
  {
    title: 'Share Your Claude Code Projects Here!',
    author: 'Duncan Rogoff',
    emoji: '📌',
    date: 'Pinned',
  },
]

export default function CommunityPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Community</h1>
        <p className="text-muted-foreground mt-1">1,576 posts · 6,875 members</p>
      </div>

      <div className="bg-card border border-border rounded-xl p-5">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-yellow-400">⚠️</span>
          <span className="text-sm font-medium text-foreground">Static Snapshot</span>
        </div>
        <p className="text-sm text-muted-foreground">
          This is a saved snapshot of the community structure. For live posts and discussions, visit{' '}
          <a href="https://www.skool.com/claudecodeclub" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Skool Community →
          </a>
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-foreground mb-3">📌 Pinned Posts</h2>
        <div className="space-y-2">
          {pinnedPosts.map((post, i) => (
            <div key={i} className="bg-card border border-border rounded-lg px-4 py-3 flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-foreground">{post.title}</div>
                <div className="text-xs text-muted-foreground mt-0.5">by {post.author}</div>
              </div>
              <Badge variant="outline" className="text-xs shrink-0">Pinned</Badge>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-foreground mb-3">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {categories.map(cat => (
            <div key={cat.name} className="bg-card border border-border rounded-xl p-4 flex items-start gap-3">
              <span className="text-2xl">{cat.emoji}</span>
              <div>
                <div className="font-medium text-foreground text-sm">{cat.name}</div>
                <div className="text-xs text-muted-foreground">{cat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
