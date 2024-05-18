const urlBase = process.env.NEXT_PUBLIC_API_URL;
const GetCoworkings = async (page?: number) => {
  if (page) {
    const url = `${urlBase}/coworkings?page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } else {
    const url = `${urlBase}/coworkings`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  }
};

export default GetCoworkings;
