import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { compare } from 'bcryptjs'
import { getUser } from './db/users'

// No fallback secret: without NEXTAUTH_SECRET, NextAuth refuses to sign sessions
// in production instead of silently using a guessable key.
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) throw new Error('Email dan password wajib diisi')
        const user = await getUser(credentials.email)
        if (!user || !(await compare(credentials.password, user.password))) {
          throw new Error('Email atau password salah')
        }
        return { id: user.email, email: user.email, name: user.name }
      },
    }),
  ],
  pages: { signIn: '/login' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id
        session.user.email = token.email
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: 'jwt', maxAge: 30 * 24 * 60 * 60 },
}
