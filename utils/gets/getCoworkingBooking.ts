import axios from 'axios';

const urlBase = process.env.API_URL;

const GetCoworkingBooking = async (limit: number) => {
  const url = `${urlBase}/coworkings?limit=${limit}`;

  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.log('hay un error', error);
  }
};

export default GetCoworkingBooking;
