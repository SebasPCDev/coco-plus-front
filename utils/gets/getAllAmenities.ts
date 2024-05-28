const urlBase = process.env.NEXT_PUBLIC_API_URL;

const getAllAmenities = async () => {
  const response = await fetch(`${urlBase}/amenities`);
  return response.json();
};

export default getAllAmenities;
