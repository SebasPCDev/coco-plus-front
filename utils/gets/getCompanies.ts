import axios from 'axios';

interface IParams {
  token: string | undefined;
}

const urlBase = process.env.NEXT_PUBLIC_API_URL;

const GetCompanies = async ({ token }: IParams) => {
  const url = `${urlBase}/companies?page=1&limit=35`;

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

export default GetCompanies;
