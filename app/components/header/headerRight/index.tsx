'use client';
import { RiMenuLine, RiUserLine } from '@remixicon/react';
import Link from 'next/link';
import { useUserContext } from '../../context';
import { use, useEffect, useState } from 'react';
import Logout from '../logout';

const HeaderRight = ({ initialToken }: { initialToken: string }) => {
  const [visibleLogin, setVisibleLogin] = useState(
    initialToken ? 'hidden' : 'block',
  );
  const [visibleProfile, setVisibleProfile] = useState(
    initialToken ? 'flex' : 'hidden',
  );
  const [firstLetter, setFirstLetter] = useState('');
  const [name, setName] = useState('');

  const { user, token } = useUserContext();

  useEffect(() => {
    if (token) {
      setVisibleLogin('hidden');
      setVisibleProfile('flex');
      setFirstLetter(user ? user.name.slice(0, 1) : '');
      setName(user ? user.name : '');
    } else {
      setVisibleLogin('block');
      setVisibleProfile('hidden');
    }
  }, [token]);

  return (
    <div className=" mx-20">
      <div className={visibleLogin}>
        <div className="hidden md:block">
          <Link href="/login">
            <button className="flex rounded-full bg-custom-primary px-10 py-5 text-3xl font-bold text-white hover:bg-custom-tertiary">
              <RiUserLine color="#ffffff" />
              Login
            </button>
          </Link>
        </div>
      </div>
      <div className={` ${visibleProfile} items-center gap-3`}>
        <div>
          <Link href={`/dashboard/${user?.role}`}>
            <button className="flex gap-4 rounded-full px-6 py-4 text-3xl font-semibold text-zinc-50 transition duration-300 hover:bg-zinc-900 hover:text-zinc-50">
              <RiMenuLine />
              Dashboard
            </button>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-custom-primary text-custom-secondary">
            {firstLetter}
          </div>
          <div className="rounded-md px-3 py-4 text-3xl font-semibold text-zinc-50 transition duration-300 ">
            {name}
          </div>
        </div>

        <div className="flex cursor-pointer items-center rounded-lg px-5 py-5 transition duration-300 hover:bg-zinc-900 hover:text-zinc-50 ">
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default HeaderRight;
