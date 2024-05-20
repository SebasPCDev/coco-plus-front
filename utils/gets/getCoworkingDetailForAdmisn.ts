import axios from 'axios';

const urlBase = process.env.NEXT_PUBLIC_API_URL;

const GetCoworkingDetailForAdmin = async ({
  id,
  token,
}: {
  id: string;
  token: string | undefined;
}) => {
  const url = `${urlBase}/coworkings/${id}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log('esto e slo que se envio', id, token);

    console.log('hay un error', error);
  }
};

export default GetCoworkingDetailForAdmin;
