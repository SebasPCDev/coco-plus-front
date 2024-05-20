const urlBase = process.env.NEXT_PUBLIC_API_URL;
const GetCoworkings = async (page?: number, status?: string) => {
  if (page) {
    const url = `${urlBase}/coworkings?page=${page}&status=${status}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
};

export default GetCoworkings;
