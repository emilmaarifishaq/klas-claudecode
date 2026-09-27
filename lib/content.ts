import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

// Lessons live outside public/ so they are only reachable through the logged-in portal.
export function getStageContent(stageId: number): string | null {
  const filePath = join(process.cwd(), 'content', `stage-${stageId}.md`)
  return existsSync(filePath) ? readFileSync(filePath, 'utf-8') : null
}

export function countLessons(stageId: number): number {
  return (getStageContent(stageId)?.match(/^## /gm) ?? []).length
}
