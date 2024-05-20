'use client';
import { UserSession } from '@/app/lib/definitions';
import Link from 'next/link'

const HeaderMenu = ({ user }: { user: UserSession }) => {

  const url = process.env.NEXT_PUBLIC_FRONT_URL;
  return (
    <div className="items-center flex flex-col lg:flex-row">
      <Link
        href={`${url}/#services`}
        className="text-zinc-50 hover:text-zinc-50 hover:bg-zinc-900 px-4 py-2 rounded-md text-xl font-semibold transition duration-300"
      >
        Como reservar
      </Link>
      <Link
        href={`${url}/#coworkings`}
        className="text-zinc-50 hover:text-zinc-50 hover:bg-zinc-900 px-4 py-2 rounded-md text-xl font-semibold transition duration-300"
      >
        Nuestros espacios
      </Link>
      {user && (
        <div>
          <Link href={`/dashboard/${user?.role}`}>
            <button className="text-zinc-50 hover:text-zinc-50 hover:bg-zinc-900 px-4 py-2 rounded-md text-xl font-semibold transition duration-300">
              Dashboard
            </button>
          </Link>
        </div>)
      }
    </div>
  )
}
export default HeaderMenu