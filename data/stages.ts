// Course structure. Each stage's lessons live in content/stage-<id>.md,
// one lesson per "## " heading.
export type Stage = {
  id: number
  slug: string
  title: string
  description: string
  emoji: string
  category: 'course' | 'bonus'
}

export const stages: Stage[] = [
  { id: 1, slug: 'mulai', title: 'STAGE 1 — MULAI', description: 'Install dan kenalan dengan Claude Code', emoji: '🚀', category: 'course' },
  { id: 2, slug: 'memori', title: 'STAGE 2 — MEMORI PROYEK', description: 'Membuat CLAUDE.md yang berguna', emoji: '🧠', category: 'course' },
  { id: 3, slug: 'proyek-pertama', title: 'STAGE 3 — PROYEK PERTAMA', description: 'Membangun aplikasi kecil dari nol', emoji: '🛠️', category: 'course' },
  { id: 4, slug: 'bonus-tips', title: 'BONUS — TIPS HARIAN', description: 'Kebiasaan kecil yang menghemat waktu', emoji: '⭐', category: 'bonus' },
]

export const courseStages = stages.filter(s => s.category === 'course')
export const bonusStages = stages.filter(s => s.category === 'bonus')
