
const urlBase = process.env.NEXT_PUBLIC_API_URL;
import axios from 'axios';
interface IState {
  name: string;
  lat: string;
  long: string;
  countryId: number;
}

const postState = async ({ newState }: { newState: IState }) => {
    const url = `${urlBase}/states`;
    console.log(url);
    console.log(newState);
    
    
  try {
    const response = await axios.post(url, newState);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default postState;
