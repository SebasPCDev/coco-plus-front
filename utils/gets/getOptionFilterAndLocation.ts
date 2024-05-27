const urlBase = process.env.NEXT_PUBLIC_API_URL;

interface IFilterOptions {
  country?: string;
  state?: string;
  city?: string;
  page?: number;
}

const getoptionsFilterLocations = async ({
  filter,
}: {
  filter: IFilterOptions;
}) => {
  const { country, state, city, page } = filter;

  let url = `${urlBase}/countries`;

  if (city) {
    url = `${urlBase}/cities/${city}`;
    console.log(url);
  } else if (state) {
    url = `${urlBase}/states/${state}`;
    console.log(url);
  } else if (country) {
    url = `${urlBase}/countries/${country}`;
    console.log(url);
  } else {
    url = `${urlBase}/countries`;
    console.log(url);
  }

  console.log(url);  
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  return data;
};

export default getoptionsFilterLocations;
