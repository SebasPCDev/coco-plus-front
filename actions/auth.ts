"use server"
import { createSession, deleteSession, getSession } from '@/app/lib/session';
import PostLogin from '@/utils/posts/postSignin';
import PutUpdateUser from '@/utils/puts/putUpdateUser';
import IChangePassForm from '@/utils/types/auth/changePassFormInterface';
import ILoginForm from '@/utils/types/auth/loginFormInterface';

export const HandleLogin = async (credentials: ILoginForm) => {

  const data = await PostLogin(credentials);
  if (!data.error) await createSession(data);

  return data;
}

export const HandleChangePass = async (credentials: IChangePassForm) => {

  const data = await PutUpdateUser(credentials);
  if (!data.error) await createSession(data);

  return data;
}

export const getServerSession = async () => {

  const data = await getSession();
  return data;
}

export const HandleLogout = async () => {
  await deleteSession();
}