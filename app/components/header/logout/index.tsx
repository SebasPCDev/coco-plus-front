'use client';
import { RiLogoutBoxLine } from '@remixicon/react';
import { useUserContext } from '../..//context';
import { useRouter } from 'next/navigation';

import Cookie from 'js-cookie';
import { HandleLogout } from '@/actions/auth';

const Logout = () => {
  const router = useRouter();
  const { setToken, setUser } = useUserContext();
  const handleClick = () => {
    HandleLogout();
    setToken(undefined);
    setUser(undefined);
    Cookie.remove('token');
    Cookie.remove('user');
    router.push('/');
  };

  return (
    <div onClick={handleClick}>
      <RiLogoutBoxLine color="white" />
    </div>
  );
};

export default Logout;
