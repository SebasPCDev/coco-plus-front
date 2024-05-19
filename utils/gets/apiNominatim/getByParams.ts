import axios from 'axios';


// Define la interfaz correctamente
interface IAddress {
  country?: string;
  state?: string;
  city?: string;
  address?: string;
}

const urlBase = process.env.NEXT_PUBLIC_API_ADDRESS;

const GetAddressByParams = async ({ address }: { address: IAddress }) => {
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

export default GetAddressByParams;
