import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { Sidebar } from '@/components/Sidebar'

// Server-side check in addition to proxy.ts, so lessons never render without a session.
export default async function PortalLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)
  if (!session?.user) redirect('/join')

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar userName={session.user.name ?? session.user.email ?? ''} />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  )
}
