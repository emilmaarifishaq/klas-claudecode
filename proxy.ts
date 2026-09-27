import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_PATHS = ['/join', '/login', '/checkout']

function isPublic(pathname: string) {
  return PUBLIC_PATHS.some(p => pathname === p || pathname.startsWith(`${p}/`))
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const secret = process.env.NEXTAUTH_SECRET
  const token = secret ? await getToken({ req: request, secret }) : null

  if (!token && !isPublic(pathname)) {
    return NextResponse.redirect(new URL('/join', request.url))
  }
  if (token && (pathname === '/login' || pathname === '/join')) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|webp|ico)$).*)'],
}
