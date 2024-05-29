import axios from 'axios';
const urlBase = process.env.NEXT_PUBLIC_API_URL;

const PutStatusEmployee = async ({
  companyId,
  userId,
  token,
  status,
}: {
  companyId: string | undefined;
  userId: string;
  token: string | undefined;
  status: string;
}) => {
  const block =
    status === 'blocked' ? { status: 'active' } : { status: 'blocked' };
  const url = `${urlBase}/companies/${companyId}/update-employee/${userId}`;
  console.log(url);

  try {
    const response = await axios.put(url, block, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    let message = '';
    if (error.response && error.response.data && error.response.data.message) {
      message = error.response.data.message;
    } else {
      message = error.message;
    }
    throw message;
  }
};

export default PutStatusEmployee;
