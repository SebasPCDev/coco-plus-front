const urlBase = process.env.NEXT_PUBLIC_API_URL;
import axios from 'axios';
interface ICity {
  name: string;
  lat: string;
  long: string;
  stateId: number;
}

const postCity = async ({ newCity }: { newCity: ICity }) => {
  const url = `${urlBase}/cities`;
  console.log(url);
  console.log(newCity);

  try {
    const response = await axios.post(url, newCity);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default postCity;
