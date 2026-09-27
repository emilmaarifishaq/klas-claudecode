'use client'

import { useState, useEffect } from 'react'
import ReactMarkdownClient from './ReactMarkdownClient'

interface Module {
  title: string
  content: string
}

const STORAGE_KEY = 'portal-progress'

function getCompleted(stageSlug: string): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return new Set()
    const all = JSON.parse(raw) as Record<string, string[]>
    return new Set(all[stageSlug] ?? [])
  } catch {
    return new Set()
  }
}

function saveCompleted(stageSlug: string, completed: Set<string>) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const all = raw ? (JSON.parse(raw) as Record<string, string[]>) : {}
    all[stageSlug] = Array.from(completed)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all))
    // Notify other tabs / components
    window.dispatchEvent(new Event('portal-progress-change'))
  } catch {}
}

function parseModules(markdown: string): Module[] {
  const lines = markdown.split('\n')
  const modules: Module[] = []
  let currentTitle = ''
  let currentLines: string[] = []

  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (currentTitle) {
        modules.push({ title: currentTitle, content: currentLines.join('\n').trim() })
      }
      currentTitle = line.replace(/^## /, '').trim()
      currentLines = []
    } else {
      currentLines.push(line)
    }
  }
  if (currentTitle) {
    modules.push({ title: currentTitle, content: currentLines.join('\n').trim() })
  }
  return modules
}

export default function ModuleLayout({ content, stageSlug }: { content: string; stageSlug: string }) {
  const modules = parseModules(content)
  const [selected, setSelected] = useState(0)
  const [completed, setCompleted] = useState<Set<string>>(new Set())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const sync = () => {
      setCompleted(getCompleted(stageSlug))
      setMounted(true)
    }
    sync()
    window.addEventListener('portal-progress-change', sync)
    return () => window.removeEventListener('portal-progress-change', sync)
  }, [stageSlug])

  function toggleDone(title: string) {
    const next = new Set(completed)
    if (next.has(title)) {
      next.delete(title)
    } else {
      next.add(title)
    }
    setCompleted(next)
    saveCompleted(stageSlug, next)
  }

  if (modules.length === 0) {
    return <ReactMarkdownClient content={content} />
  }

  const currentTitle = modules[selected].title
  const isDone = mounted && completed.has(currentTitle)

  return (
    <div className="flex gap-0 min-h-[600px]">
      {/* Left sidebar */}
      <div className="w-64 shrink-0 border-r border-border overflow-y-auto">
        <div className="p-3 border-b border-border flex items-center justify-between">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            {modules.length} Lessons
          </p>
          {mounted && (
            <span className="text-xs text-muted-foreground">
              {completed.size}/{modules.length}
            </span>
          )}
        </div>
        <div className="py-2">
          {modules.map((mod, i) => {
            const emojiMatch = mod.title.match(/^([\u{1F000}-\u{1FFFF}]|[☀-⛿]|[✀-➿]|[\uD83C-\uDBFF][\uDC00-\uDFFF])\s*/u)
            const emoji = emojiMatch ? emojiMatch[0].trim() : null
            const titleText = emoji ? mod.title.replace(emojiMatch![0], '').trim() : mod.title
            const isModDone = mounted && completed.has(mod.title)

            return (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`w-full text-left px-3 py-2.5 flex items-start gap-2.5 transition-colors group ${
                  selected === i
                    ? 'bg-primary/10 border-l-2 border-primary'
                    : 'border-l-2 border-transparent hover:bg-muted/50'
                }`}
              >
                {/* Done checkmark or emoji/number */}
                <span className="shrink-0 w-5 text-center leading-none mt-0.5">
                  {isModDone ? (
                    <span className="text-green-500 text-sm">✓</span>
                  ) : emoji ? (
                    <span className="text-base">{emoji}</span>
                  ) : (
                    <span className="text-muted-foreground text-xs font-mono">{i + 1}</span>
                  )}
                </span>
                <span className={`text-xs leading-snug ${
                  isModDone
                    ? 'text-green-600 dark:text-green-400'
                    : selected === i
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground group-hover:text-foreground'
                }`}>
                  {titleText}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Right content */}
      <div className="flex-1 overflow-y-auto p-6 min-w-0">
        <div className="max-w-2xl">
          {/* Header row with title + mark done button */}
          <div className="flex items-start justify-between gap-4 mb-4 pb-3 border-b border-border">
            <h2 className="text-xl font-bold text-foreground leading-tight">
              {currentTitle}
            </h2>
            {mounted && (
              <button
                onClick={() => toggleDone(currentTitle)}
                title={isDone ? 'Mark as incomplete' : 'Mark as done'}
                className={`shrink-0 flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-all ${
                  isDone
                    ? 'bg-green-500/10 text-green-600 border-green-500/30 hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/30'
                    : 'bg-muted text-muted-foreground border-border hover:bg-green-500/10 hover:text-green-600 hover:border-green-500/30'
                }`}
              >
                <span>{isDone ? '✓' : '○'}</span>
                <span>{isDone ? 'Done' : 'Mark as done'}</span>
              </button>
            )}
          </div>
          <ReactMarkdownClient content={modules[selected].content} />
        </div>
      </div>
    </div>
  )
}
