import { RiUserLine } from '@remixicon/react';
import Link from 'next/link';
import { getSession } from '@/app/lib/session';
import Logout from '../logout';
import { UserSession } from '@/app/lib/definitions';

const HeaderRight = async () => {
  const session = await getSession();
  const user = session?.user as UserSession;

  return (
    <>
      {user ? (
        <div className="flex items-center gap-3">

          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-custom-primary text-custom-secondary">
              {user ? user.name.slice(0, 1) : ''}
            </div>
            <div className="rounded-md px-3 py-4 text-3xl font-semibold text-zinc-50 transition duration-300 ">
              {user ? user.name : ''}
            </div>
          </div>

          <div className="flex cursor-pointer items-center rounded-lg px-5 py-5 transition duration-300 hover:bg-zinc-900 hover:text-zinc-50 ">
            <Logout />
          </div>
        </div>
      ) : (
        <Link href="/login">
          <button className="flex rounded-full bg-custom-primary px-4 py-2 text-xl font-bold text-gray-900 hover:bg-custom-tertiary">
            <RiUserLine color="#111827" />
            <span className='ml-4'>Login</span>
          </button>
        </Link>
      )
      }
    </>
  );
};

export default HeaderRight;
