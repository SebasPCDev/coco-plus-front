import axios from 'axios';

import IChangePassForm from '../types/changePassFormInterface';
import { getSession } from '@/app/lib/session';
import { UserSession } from '@/app/lib/definitions';
const urlBase = process.env.NEXT_PUBLIC_API_URL;

const PutUpdateUser = async (data: IChangePassForm) => {
  const session = await getSession();
  if (!session) throw 'Session not found';

  try {
    const user = session.user as UserSession;
    const url = `${urlBase}/users/${user.id}`;

    const response = await axios.put(url, data, {
      headers: {
        Authorization: `Bearer ${session.token}`,
      },
    });

    return response.data;
  } catch (error: any) {
    console.log('error', error);
    return { error: error.message || 'error desconcido' };
  }
};

export default PutUpdateUser;
