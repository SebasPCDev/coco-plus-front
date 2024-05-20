import axios from 'axios';
import { ICoworkingDataPost } from '../types/newCoworkingPot';
const urlBase = process.env.NEXT_PUBLIC_API_URL;

const PostNewCoworking = async ({
  formData,
  token,
}: {
  formData: ICoworkingDataPost;
  token: string | undefined;
}) => {
  const url = `${urlBase}/coworkings`;

  const response = await axios.post(url, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;

  
};

export default PostNewCoworking;
