const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const getReviewsCo = async ({ id }: { id: string | undefined }) => {
  const url = `${baseUrl}/reviews/firstfive/${id}`;
  console.log(url);

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getReviewsCo;
