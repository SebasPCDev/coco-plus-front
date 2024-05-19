import axios from 'axios';

interface IAddress {
    q: string;
}

const urlBase = process.env.NEXT_PUBLIC_API_ADDRESS;

const GetAddressFree = async ({ address }: { address: IAddress }) => {
  const params = { ...address, format: 'json' };
  const url = `${urlBase}`;

  try {
    const response = await axios.get(url, { params });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching coworkings:', error);
    throw error;
  }
};

export default GetAddressFree;
