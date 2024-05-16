import axios from 'axios';

interface IParams {
  token: string | undefined;
}

const urlBase = process.env.NEXT_PUBLIC_API_URL;

const GetUsers = async ({ token }: IParams) => {
  const url = `${urlBase}/users`;

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

export default GetUsers;
