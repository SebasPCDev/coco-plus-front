import { NextRequest, NextResponse } from 'next/server';
import { getSession } from './app/lib/session';
import { UserSession } from './app/lib/definitions';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';

export const config = {
  matcher: [
    '/login',
    '/dashboard/:path*'
  ]
}

const protectedRoutes = ['/dashboard/superadmin', '/dashboard/admincoworking']
const publicRoutes = ['/login', '/signup', '/']

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)

  const session = await getSession();

  if (session) {
    const { activationDate } = session?.user as UserSession
    if (!activationDate) return NextResponse.redirect(new URL('/change-password', request.url))
  }

  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }

  if (isProtectedRoute && session) {
    const { role } = session.user as UserSession
    if (path === '/dashboard/superadmin' && role !== 'superadmin') {
      return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
    if (path === '/dashboard/admincoworking' && role !== 'admincoworking') {
      return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
  }



}