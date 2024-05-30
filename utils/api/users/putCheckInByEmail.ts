import axios from 'axios';

const urlBase = process.env.NEXT_PUBLIC_API_URL;
const putCheckInByEmail = async (token: string) => {
  const url = `${urlBase}/users/checkIn/email`;

  try {
    const response = await axios.put(url, { token }, {
      headers: {
        'Content-Type': 'application/json',
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

export default putCheckInByEmail;
