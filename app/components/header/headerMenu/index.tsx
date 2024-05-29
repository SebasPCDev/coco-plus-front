'use client';
import { UserSession } from '@/app/lib/definitions';
import Link from 'next/link';

const HeaderMenu = ({ user }: { user: UserSession }) => {
  return (
    <div className="flex flex-col items-center lg:flex-row">
      <Link
        href={`/#services`}
        className="rounded-md px-4 py-2 text-xl font-semibold text-zinc-50 transition duration-300 hover:bg-zinc-900 hover:text-zinc-50"
      >
        Como reservar
      </Link>
      <Link
        href={`/#coworkings`}
        className="rounded-md px-4 py-2 text-xl font-semibold text-zinc-50 transition duration-300 hover:bg-zinc-900 hover:text-zinc-50"
      >
        Nuestros espacios
      </Link>
      {user && (
        <div>
          <Link href={`/dashboard/${user?.role}`}>
            <button className="rounded-md px-4 py-2 text-xl font-semibold text-zinc-50 transition duration-300 hover:bg-zinc-900 hover:text-zinc-50">
              Dashboard
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default HeaderMenu;
