import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {

  const cookiesStore = cookies();
  const token = cookiesStore.get('token')?.value;

  if (token) {
    console.log(`Logueado ${token}`);
  } else {
    console.log('No Logueado');
  }
}