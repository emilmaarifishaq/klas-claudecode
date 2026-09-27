import Link from 'next/link'
import { notFound } from 'next/navigation'
import { stages } from '@/data/stages'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft } from 'lucide-react'
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
        Back to Classroom
      </Link>

      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{stage.emoji}</span>
            <div>
              <div className="text-xs text-muted-foreground mb-1">Stage {stage.id}</div>
              <h1 className="text-2xl font-bold text-foreground">{stage.title}</h1>
            </div>
          </div>
        </div>
        <p className="text-muted-foreground">{stage.description}</p>
        {stage.unlockLevel && (
          <Badge className="mt-3 bg-yellow-500/10 text-yellow-400 border-yellow-500/20">
            🔒 Requires Level {stage.unlockLevel}+
          </Badge>
        )}
      </div>

      {content ? (
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <ModuleLayout content={content} stageSlug={stage.slug} />
        </div>
      ) : (
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Modules <span className="text-muted-foreground font-normal text-sm">({stage.modules.length})</span>
          </h2>
          <div className="space-y-2">
            {stage.modules.map((mod, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3"
              >
                <span className="text-muted-foreground text-sm w-6 text-right">{i + 1}.</span>
                <span className="text-sm text-foreground">{mod.title}</span>
              </div>
            ))}
            {stage.modules.length === 0 && (
              <div className="text-sm text-muted-foreground bg-card border border-border rounded-lg px-4 py-6 text-center">
                Content coming soon.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
