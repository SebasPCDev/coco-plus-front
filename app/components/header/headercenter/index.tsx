import { UserSession } from '@/app/lib/definitions';
import { getSession } from '@/app/lib/session';
import { RiMenuLine } from '@remixicon/react';
import Link from 'next/link'

const HeaderCenter = async () => {
  const session = await getSession();
  const user = session?.user as UserSession;

  console.log("USERRRR", user);

  const url = process.env.NEXT_PUBLIC_FRONT_URL;
  return (
    <div className="items-center hidden md:flex">
      <Link
        href={`${url}/#Service`}
        className="text-zinc-50 hover:text-zinc-50 hover:bg-zinc-900 px-6 py-4 rounded-md text-xl font-semibold transition duration-300"
      >
        Como reservar
      </Link>
      <Link
        href={`${url}/#Coworks`}
        className="text-zinc-50 hover:text-zinc-50 hover:bg-zinc-900 px-6 py-4 rounded-md text-xl font-semibold transition duration-300"
      >
        Nuestros espacios
      </Link>
      <div>
        <Link href={`/dashboard/${user?.role}`}>
          <button className="text-zinc-50 hover:text-zinc-50 hover:bg-zinc-900 px-6 py-4 rounded-md text-xl font-semibold transition duration-300">
            Dashboard
          </button>
        </Link>
      </div>
    </div>
  )
}
export default HeaderCenter