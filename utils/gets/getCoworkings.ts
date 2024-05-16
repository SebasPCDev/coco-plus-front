const urlBase = process.env.NEXT_PUBLIC_API_URL;
const GetCoworkings = async () => {
  const url = `${urlBase}/coworkings?page=1&limit=35`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export default GetCoworkings;
