import axios from 'axios';

const PutImagesCoworking = async ({
  id,
  formData,
  token,
}: {
  id: string;
  formData: FormData;
  token: string | undefined;
}) => {
  const url = process.env.NEXT_PUBLIC_API_URL
  const response = await axios.put(
    `${url}/files/upload-image-coworking/${id}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response;
};

export default PutImagesCoworking;
