import axios from 'axios';
import { cookies } from 'next/headers';

import IChangePassForm from '../types/changePassFormInterface';
const urlBase = process.env.NEXT_PUBLIC_API_URL;

const PutUpdateUser = async (data: IChangePassForm) => {

  const cookiesStore = cookies();
  const token = cookiesStore.get('token')?.value;
  const dataUser = cookiesStore.get('user')?.value;

  try {
    if (!dataUser) throw 'User not found';
    const user = JSON.parse(dataUser)
    const url = `${urlBase}/users/${user.id}`;

    const response = await axios.put(url, data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

    return response.data;
  } catch (error: any) {
    console.log("error", error);
    return { error: error.message || 'error desconcido' };
  }
};

export default PutUpdateUser;
