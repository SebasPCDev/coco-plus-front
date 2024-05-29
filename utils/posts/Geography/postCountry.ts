const urlBase = process.env.NEXT_PUBLIC_API_URL;
import axios from 'axios';
interface ICountry {
    name: string;
    lat: string;
    long: string;
}

const postCountry = async ({ newCountry }: { newCountry: ICountry }) => {
    const url =`${urlBase}/countries`
    try {
        const response = await axios.post(url, newCountry)
        console.log(response.data);
        return response.data
        
    } catch (error) {
        
    }
    ;
}

export default postCountry