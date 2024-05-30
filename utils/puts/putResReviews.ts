import axios from 'axios';

const urlBase = process.env.NEXT_PUBLIC_API_URL;
const putResCoworkings = async ({
  id,
  token,
  respuesta,
}: {
  id: string;
  token: string | undefined;
  respuesta: { res_coworking: string };
}) => {
  const url = `${urlBase}/reviews/${id}`;

  try {
    const response = await axios.put(url, respuesta, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default putResCoworkings;
