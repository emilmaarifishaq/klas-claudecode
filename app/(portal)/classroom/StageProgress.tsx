'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'klas-progress'

function getPercent(stageSlug: string, totalModules: number): number {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw || totalModules === 0) return 0
    const all = JSON.parse(raw) as Record<string, string[]>
    const done = (all[stageSlug] ?? []).length
    return Math.round((done / totalModules) * 100)
  } catch {
    return 0
  }
}

export default function StageProgress({ stageSlug, totalModules }: { stageSlug: string; totalModules: number }) {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const update = () => setPct(getPercent(stageSlug, totalModules))
    update()
    window.addEventListener('klas-progress-change', update)
    return () => window.removeEventListener('klas-progress-change', update)
  }, [stageSlug, totalModules])

  return (
    <div>
      <div className="h-2.5 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500 rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="text-xs text-muted-foreground mt-1">{pct}%</div>
    </div>
  )
}
