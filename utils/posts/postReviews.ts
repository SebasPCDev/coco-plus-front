const urlBase = process.env.NEXT_PUBLIC_API_URL;

import axios from 'axios';
interface IReview {
  coworking_rating: number;
  comment: string;
  user_id: string;
  coworking_id: string;
}

const postReview = async ({
  newReview,
  token,
}: {
  newReview: IReview;
  token: string | undefined;
}) => {
  const url = `${urlBase}/reviews`;

  try {
    const response = await axios.post(`${urlBase}/reviews`, newReview, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default postReview;
