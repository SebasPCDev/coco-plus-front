'use client';
import { createContext, useState, useEffect, useContext } from 'react';
import IUser from '@/utils/types/userResponseInterface';
import IUserContext from '@/utils/types/userContextInterface';
import Cookie from 'js-cookie';
import { cookies } from 'next/headers';

const userContext = createContext<IUserContext>({
  user: undefined,
  setUser: () => {},
  token: undefined,
  setToken: () => {},
});

const UserProvider = ({ children }: any) => {
  const [token, setToken] = useState<string | undefined>(Cookie.get('token'));
  const [user, setUser] = useState<IUser | undefined>(
    JSON.parse(Cookie.get('user') || 'null'),
  );

  useEffect(() => {
    const tokenFromCookie = Cookie.get('token');
    const userFromCookie = Cookie.get('user');

    if (tokenFromCookie) {
      setToken(tokenFromCookie);
    }

    if (userFromCookie) {
      try {
        setUser(JSON.parse(userFromCookie) as IUser);
      } catch (error) {
        setUser(undefined);
      }
    }
  }, []);

  useEffect(() => {
    if (user) {
      Cookie.set('user', JSON.stringify(user));
    }
    if (token) {
      Cookie.set('token', token);
    }
  }, [user, token]);

  return (
    <userContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </userContext.Provider>
  );
};

const useUserContext = () => useContext(userContext);

export { UserProvider, useUserContext };
