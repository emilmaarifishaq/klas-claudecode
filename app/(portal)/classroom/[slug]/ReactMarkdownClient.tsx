'use client'

import ReactMarkdown from 'react-markdown'
import type { AnchorHTMLAttributes } from 'react'

function MarkdownLink({ href, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isPdf = href?.endsWith('.pdf')
  return (
    <a href={href} {...(isPdf ? { download: true, target: '_blank' } : { target: '_blank', rel: 'noopener noreferrer' })} {...props}>
      {children}
    </a>
  )
}

export default function ReactMarkdownClient({ content }: { content: string }) {
  return (
    <div className="prose prose-invert prose-sm max-w-none
      prose-headings:text-foreground prose-headings:font-bold
      prose-h1:text-2xl prose-h1:mb-4 prose-h1:mt-0
      prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3 prose-h2:border-b prose-h2:border-border prose-h2:pb-2
      prose-h3:text-base prose-h3:mt-5 prose-h3:mb-2
      prose-p:text-muted-foreground prose-p:leading-relaxed
      prose-strong:text-foreground prose-strong:font-semibold
      prose-em:text-muted-foreground
      prose-code:bg-muted prose-code:text-primary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-xs prose-code:font-mono
      prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:rounded-lg
      prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-lg prose-blockquote:py-1 prose-blockquote:not-italic
      prose-blockquote:text-muted-foreground
      prose-ul:text-muted-foreground prose-ol:text-muted-foreground
      prose-li:text-muted-foreground
      prose-hr:border-border prose-hr:my-6
      prose-a:text-primary prose-a:no-underline hover:prose-a:underline
      prose-img:rounded-lg prose-img:border prose-img:border-border prose-img:w-full prose-img:my-4">
      <ReactMarkdown components={{ a: MarkdownLink }}>{content}</ReactMarkdown>
    </div>
  )
}
