import axios from 'axios';

interface IParams {
  token: string | undefined;
  params?: {
    page?: number;
  };
}

const urlBase = process.env.NEXT_PUBLIC_API_URL;

const GetCompanies = async ({ token }: IParams) => {
  const url = `${urlBase}/companies`;
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
