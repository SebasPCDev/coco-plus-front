import axios from 'axios';

const urlBase = process.env.NEXT_PUBLIC_API_URL;

const GetProfile = async ({ token }: { token: string | undefined }) => {
  const url = `${urlBase}/users/profile`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log('hay un error', error);
  }
};

export default GetProfile;
