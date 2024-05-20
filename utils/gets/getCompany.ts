import axios from 'axios';

interface IParams {
  token: string | undefined;
  companyId: string;
}

const urlBase = process.env.NEXT_PUBLIC_API_URL;

const GetCompany = async ({ token, companyId }: IParams) => {
  const url = `${urlBase}/companies/${companyId}`;

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

export default GetCompany;
