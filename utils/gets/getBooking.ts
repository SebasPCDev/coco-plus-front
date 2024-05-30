import axios from 'axios';

interface IParams {
  id: string;
  token: string | undefined;
}

const urlBase = process.env.NEXT_PUBLIC_API_URL;

const GetBooking = async ({ token, id }: IParams) => {
  const url = `${urlBase}/bookings/${id}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error: any) {
    let message = '';
    if (error.response.data.message) {
      message = error.response.data.message;
    } else {
      message = error.message;
    }
    throw message;
  }
};

export default GetBooking;
