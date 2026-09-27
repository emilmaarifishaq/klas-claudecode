import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { stages } from '@/data/stages'
import { getStageContent } from '@/lib/content'
import ModuleLayout from './ModuleLayout'

export default async function StagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const stage = stages.find(s => s.slug === slug)
  if (!stage) notFound()

  const content = getStageContent(stage.id)

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <Link href="/classroom" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft size={14} />
        Kembali ke Kelas
      </Link>

      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{stage.emoji}</span>
          <div>
            <div className="text-xs text-muted-foreground mb-1">Stage {stage.id}</div>
            <h1 className="text-2xl font-bold text-foreground">{stage.title}</h1>
          </div>
        </div>
        <p className="text-muted-foreground">{stage.description}</p>
      </div>

      {content ? (
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <ModuleLayout content={content} stageSlug={stage.slug} />
        </div>
      ) : (
        <div className="text-sm text-muted-foreground bg-card border border-border rounded-lg px-4 py-6 text-center">
          Materi segera hadir.
        </div>
      )}
    </div>
  )
}
