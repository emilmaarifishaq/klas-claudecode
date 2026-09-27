import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { listMembers } from '@/lib/db/users'

function formatDate(date: Date) {
  return new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default async function MembersPage() {
  const session = await getServerSession(authOptions)
  const members = await listMembers()

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Members</h1>
        <p className="text-muted-foreground mt-1">
          {members.length} {members.length === 1 ? 'member has' : 'members have'} signed in
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map(m => {
          const isYou = m.email === session?.user?.email
          return (
            <div key={m.email} className={`bg-card border rounded-xl p-4 ${isYou ? 'border-primary/40 bg-primary/5' : 'border-border'}`}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-semibold text-foreground">
                  {m.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-foreground truncate flex items-center gap-1">
                    {m.name}
                    {isYou && <span className="text-xs text-primary">(you)</span>}
                  </div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground space-y-0.5">
                <div>Joined {formatDate(m.joinedAt)}</div>
                <div>Last sign-in {formatDate(m.lastLoginAt)}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
