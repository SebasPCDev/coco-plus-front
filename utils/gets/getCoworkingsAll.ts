const urlBase = process.env.NEXT_PUBLIC_API_URL;


const getAllCoworkings = async () => {
 

  let url = `${urlBase}/coworkings/all`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export default getAllCoworkings;
