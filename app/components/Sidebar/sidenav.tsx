'use client';
import Link from 'next/link';
import NavLinks from './navlinks/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import CocoLogo from '../../ui/coco-logo';
import { useRouter } from 'next/navigation';
import { useUserContext } from '@/app/components/context';
import Cookie from 'js-cookie';

export default function SideNav() {
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
    <div className="flex h-full flex-col justify-center px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 w-full rounded-md bg-custom-fourth p-4 md:h-40"
        href="/dashboard"
      >
        <CocoLogo />
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button
            onClick={handleClick}
            className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Cerrar Sesión</div>
          </button>
        </form>
      </div>
    </div>
  );
}
