import axios from 'axios';

const urlBase = process.env.NEXT_PUBLIC_API_URL;

const forgotPassword = async(email: string) => {
  const url = `${urlBase}/auth/forgot-password`;

  try {
    const response = await axios.put(url, {email}, {
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

export default forgotPassword;
