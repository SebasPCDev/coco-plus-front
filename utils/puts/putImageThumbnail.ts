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
  const url = process.env.NEXT_PUBLIC_API_URL

  const response = await axios.put(
    `${url}/files/upload-thumbnail-coworking/${id}`,
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
