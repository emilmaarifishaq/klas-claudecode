import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { Sidebar } from '@/components/Sidebar'
import { touchLastLogin } from '@/lib/db/users'

// Server-side check in addition to proxy.ts, so the portal never renders without a session.
export default async function PortalLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)
  if (!session?.user) redirect('/login')
  if (session.user.email) {
    await touchLastLogin(session.user.email).catch(error => console.error('[portal] last-login update failed', error))
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar userName={session.user.name ?? session.user.email ?? ''} />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  )
}
