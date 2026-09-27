'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { BookOpen, Info, Home, ChevronLeft, ChevronRight, Sun, Moon, LogOut } from 'lucide-react'
import { useTheme } from 'next-themes'
import { signOut } from 'next-auth/react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'Dashboard', icon: Home },
  { href: '/classroom', label: 'Kelas', icon: BookOpen },
  { href: '/about', label: 'Tentang', icon: Info },
]

export function Sidebar({ userName }: { userName: string }) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <aside className={cn(
      'flex flex-col h-full border-r border-border bg-card transition-all duration-300',
      collapsed ? 'w-16' : 'w-56'
    )}>
      {/* Logo */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <span className="text-xl">🎓</span>
            <span className="font-bold text-sm text-foreground">KLAS</span>
          </div>
        )}
        {collapsed && <span className="text-xl mx-auto">🎓</span>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded hover:bg-muted text-muted-foreground ml-auto"
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-2 space-y-1">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors',
                active
                  ? 'bg-primary/10 text-primary font-medium'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              <Icon size={16} className="shrink-0" />
              {!collapsed && <span>{label}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Account + theme */}
      <div className="p-2 border-t border-border space-y-1">
        {!collapsed && <div className="px-3 py-1 text-xs text-muted-foreground truncate">{userName}</div>}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-muted hover:text-foreground w-full"
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          {!collapsed && <span>{theme === 'dark' ? 'Mode Terang' : 'Mode Gelap'}</span>}
        </button>
        <button
          onClick={() => signOut({ callbackUrl: '/login' })}
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-muted hover:text-foreground w-full"
        >
          <LogOut size={16} />
          {!collapsed && <span>Keluar</span>}
        </button>
      </div>
    </aside>
  )
}
