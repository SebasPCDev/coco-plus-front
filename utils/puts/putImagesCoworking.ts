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
  const response = await axios.put(
    `http://localhost:3000/files/upload-image-coworking/${id}`,
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
