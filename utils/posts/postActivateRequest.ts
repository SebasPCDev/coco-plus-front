import axios from 'axios';
import ICompaniesInfo from '../types/requests/companiesFormInterface';
const urlBase = process.env.NEXT_PUBLIC_API_URL;

const PostActivateRequest = async ({
  id,
  token,
  type,
}: {
  type: string | undefined | null;
  id: string | undefined;
  token: string | undefined;
}) => {
  const url = `${urlBase}/${type}/activate`;
  const objetId = {
    id: id,
  };

  try {
    const response = await axios.post(url, objetId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error: any) {
    console.log('ERRROR', error);
    let message = '';
    if (error.response.data.message) {
      message = error.response.data.message;
    } else {
      message = error.message;
    }
    throw message;
  }
};

export default PostActivateRequest;
