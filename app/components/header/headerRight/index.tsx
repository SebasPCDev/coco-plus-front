import Link from 'next/link';
import { getSession } from '@/app/lib/session';
import { UserSession } from '@/app/lib/definitions';
import { RiUserLine } from '@remixicon/react';
import HeaderUser from '../headerUser';
import HeaderMenuMobile from '../headerMenuMobile';

const HeaderRight = async () => {
  const session = await getSession();
  const user = session?.user as UserSession;

  return (
    <>
      <div className='hidden lg:block'>
        {user ? (
          // Desktop
          <div className="flex items-center gap-3">
            <HeaderUser />
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
      </div>
      {/* Mobile */}
      <HeaderMenuMobile user={user} />
    </>
  );
};

export default HeaderRight;
