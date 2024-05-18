import axios from 'axios';

const PutImageThumbnail = async ({
  id,
  imageThumbnail,
  token,
}: {
  id: string;
  imageThumbnail: FormData;
  token: string | undefined;
}) => {
  const response = await axios.put(
    `http://localhost:3000/files/upload-thumbnail-coworking/${id}`,
    imageThumbnail,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response
};

export default PutImageThumbnail;
