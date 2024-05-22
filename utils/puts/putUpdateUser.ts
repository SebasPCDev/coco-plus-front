import axios from 'axios';

import IChangePassForm from '../types/auth/changePassFormInterface';
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
    let message = ''
    if (error.response.data.message) {
      message = error.response.data.message;
    } else {
      message = error.message
    }
    return { error: message || 'Error actualizando el usuario' };
  }
};

export default PutUpdateUser;
