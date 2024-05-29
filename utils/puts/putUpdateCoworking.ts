import axios from 'axios';
import { ICoworkingDataPost } from '../types/newCoworkingPot';
const urlBase = process.env.NEXT_PUBLIC_API_URL;
interface ICoworking {
  name?: string;
  phone?: string;
  email?: string;
  open?: string;
  close?: string;
  address?: string;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  lat?: string | null;
  long?: string | null;
  capacity?: number;
  message?: string;
  status?: string | null;
  amenities?: string[];
}

const PutUpdateCoworking = async ({
  id,
  newInfo,
  token,
}: {
  id: string | undefined;
  newInfo: ICoworking;
  token: string | undefined;
}) => {
  console.log('newInfo', newInfo);

  const url = `${urlBase}/coworkings/${id}`;

  try {
    const response = await axios.put(url, newInfo, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error al activar el coworking:', error);
  }
};

export default PutUpdateCoworking;
