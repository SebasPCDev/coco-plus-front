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
            <button className="flex rounded-full bg-green-500 px-10 py-5 text-3xl font-bold text-white hover:bg-green-600">
              <RiUserLine color="#ffffff" />
              Login
            </button>
          </Link>
        </div>
      </div>
      <div className={` ${visibleProfile} items-center gap-4 `}>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-custom-primary text-custom-secondary">
          {firstLetter}
        </div>
        <div className="text-3xl text-custom-white">{name}</div>
        <Logout />
      </div>
    </div>
  );
};

export default HeaderRight;
