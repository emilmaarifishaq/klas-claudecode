import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const secret = process.env.NEXTAUTH_SECRET
  const token = secret ? await getToken({ req: request, secret }) : null
  const isLogin = pathname === '/login'

  if (!token && !isLogin) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  if (token && isLogin) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  return NextResponse.next()
}

// Also gates PDFs and resource downloads; images are left out so the login page loads fast
// (the whole deployment additionally sits behind Vercel Authentication).
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|webp|gif|ico)$).*)'],
}
