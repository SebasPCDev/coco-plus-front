import { NextRequest, NextResponse } from 'next/server';
import { getSession } from './app/lib/session';
import { UserSession } from './app/lib/definitions';

export const config = {
  matcher: [
    '/login',
    '/dashboard/:path*',
    '/forgot-password',
    '/recovery-password'
  ]
}

// const protectedRoutes = ['/dashboard/superadmin', '/dashboard/adminCoworking', '/dashboard/adminCompany', '/dashboard/employee', '/dashboard/coworking']
const publicRoutes = ['/login', '/', '/recovery-password', '/forgot-password']

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  console.log("path", path);
  const isProtectedRoute = path.startsWith('/dashboard')

  const session = await getSession();

  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }

  if (session) {
    const { activationDate } = session?.user as UserSession
    if (!activationDate) return NextResponse.redirect(new URL('/change-password', request.url))
    if (publicRoutes.includes(path)) 
      return NextResponse.redirect(new URL('/', request.url))
  }

  if (isProtectedRoute && session) {
  
    const { role } = session.user as UserSession
    if (path.startsWith(`/dashboard/superadmin`) && role !== 'superadmin') {
      return NextResponse.redirect(new URL('/', request.nextUrl))
    }
    if (path.startsWith('/dashboard/adminCoworking') && role !== 'adminCoworking') {
      return NextResponse.redirect(new URL('/', request.nextUrl))
    }
    if (path.startsWith('/dashboard/adminCompany') && role !== 'adminCompany') {
      return NextResponse.redirect(new URL('/', request.nextUrl))
    }
    if (path.startsWith('/dashboard/employee') && role !== 'employee') {
      return NextResponse.redirect(new URL('/', request.nextUrl))
    }
    if (path.startsWith('/dashboard/coworking') && role !== 'coworking') {
      return NextResponse.redirect(new URL('/', request.nextUrl))
    }
  }
  

}