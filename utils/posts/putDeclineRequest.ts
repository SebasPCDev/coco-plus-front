import axios from 'axios';

const urlBase = process.env.NEXT_PUBLIC_API_URL;

const DeclineRequest = async ({
  Id,
  token,
}: {
  Id: string;
  token: string | undefined;
}) => {
  const url = `${urlBase}/requests/decline/${Id}`;
  const objetId = {
    status: 'close',
  };

  try {
    const response = await axios.put(url, objetId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log('hay un error', error);
  }
};

export default DeclineRequest;
