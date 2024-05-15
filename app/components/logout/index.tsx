'use client';

import { PowerIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useUserContext } from '@/app/components/context';
import Cookie from 'js-cookie';

export default function Logout() {
  const router = useRouter();
  const { setToken, setUser } = useUserContext();

  const handleClick = (event: any) => {
    event.preventDefault();
    setToken(undefined);
    setUser(undefined);
    Cookie.remove('token');
    Cookie.remove('user');
    router.push('/');
  };
  return (
    <button
      onClick={handleClick}
      className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
    >
      <PowerIcon className="w-6" />
      <div className="hidden md:block">Cerrar Sesión</div>
    </button>
  );
}
