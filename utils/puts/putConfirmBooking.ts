import axios from 'axios';

import IChangePassForm from '../types/auth/changePassFormInterface';
import { getSession } from '@/app/lib/session';
import { UserSession } from '@/app/lib/definitions';
const urlBase = process.env.NEXT_PUBLIC_API_URL;

const PutConfirmBooking = async ({
  idCoworking,
  token,
  idBooking,
}: {
  idCoworking: string | undefined;
  token: string | undefined;
  idBooking: string | undefined;
}) => {
  const data = {
    status: 'active',
  };

  try {
    const url = `${urlBase}/coworkings/${idCoworking}/booking/${idBooking}`;

    const response = await axios.put(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error: any) {
    let message = '';
    if (error.response.data.message) {
      message = error.response.data.message;
    } else {
      message = error.message;
    }
    return { error: message || 'Error actualizando el usuario' };
  }
};

export default PutConfirmBooking;
