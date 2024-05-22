import React, { useState, useEffect } from 'react';
import IResponseCoworking from '@/utils/types/coworkingsResponse';
import getCountriesfilter from '@/utils/gets/countriesFilter';
import GetCoworkingsFilter from '@/utils/gets/getCoworkingsFilter';
import getoptions from '@/utils/gets/getoptionsFilter';
import { usePathname, useSearchParams } from 'next/navigation';
import page from '../coworkings/page';

const useCoworkings = () => {
  const searchParams = useSearchParams();
  const [totalCoworkings, setTotalCoworkings] = useState(0);
  const [coworkings, setCoworkings] = useState<IResponseCoworking[]>([]);
  const [countries, setCountries] = useState<any[]>([]);
  const [states, setStates] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  const [filter, setFilter] = useState({
    country: '',
    state: '',
    city: '',
    page: 1,
    limit: 3,
  });
  useEffect(() => {
    const getCountries = async () => {
      const countries = await getCountriesfilter();
      const currentcoworkings = await GetCoworkingsFilter({ filter });
      setCoworkings(currentcoworkings.coworking);
      setTotalCoworkings(currentcoworkings.total);
      setCountries(countries);
    };
    getCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updatedFilter = () => {
    const currentPage = Number(searchParams.get('page')) || 1;
    setFilter({ ...filter, page: currentPage });
  };

  useEffect(() => {
    updatedFilter();
  }, [searchParams]);

  useEffect(() => {
    const getOptions = async () => {
      const options = await getoptions({ filter });
      if (filter.city) {
        const currentcoworkings = await GetCoworkingsFilter({ filter });
        setCoworkings(currentcoworkings.coworking);
        setTotalCoworkings(currentcoworkings.total);
      } else if (filter.state) {
        setCities(options);
        const currentcoworkings = await GetCoworkingsFilter({ filter });
        setCoworkings(currentcoworkings.coworking);
        setTotalCoworkings(currentcoworkings.total);
      } else if (filter.country) {
        console.log(filter);
        setStates(options);
        const currentcoworkings = await GetCoworkingsFilter({ filter });
        setCoworkings(currentcoworkings.coworking);
        setTotalCoworkings(currentcoworkings.total);
      } else if (filter.page) {
        const currentcoworkings = await GetCoworkingsFilter({ filter });
        setCoworkings(currentcoworkings.coworking);
        setTotalCoworkings(currentcoworkings.total);
      }
    };
    getOptions();
  }, [filter]);

  const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    const newfilter = { country: '', state: '', city: '', page: 1, limit: 3 };
    if (name === 'country') {
      newfilter.country = value;
      newfilter.state = '';
      newfilter.city = '';

      setCities([]);
      setStates([]);
    }
    if (name === 'state') {
      newfilter.country = filter.country;
      newfilter.state = value;
      newfilter.city = '';

      setCities([]);
    }
    if (name === 'city') {
      newfilter.country = filter.country;
      newfilter.state = filter.state;
      newfilter.city = value;
    }
    setFilter(newfilter);
  };

  return {
    coworkings,
    countries,
    states,
    cities,
    handleChange,
    totalCoworkings,
  };
};
export default useCoworkings;
