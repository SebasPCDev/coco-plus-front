/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useState, useEffect } from 'react';

import IResponseCoworking from '@/utils/types/coworkingsResponse';
import getCountriesfilter from '@/utils/gets/countriesFilter';
import GetCoworkingsFilter from '@/utils/gets/getCoworkingsFilter';
import getoptions from '@/utils/gets/getoptionsFilter';


const useCoworkings = () => {
  const [coworkings, setCoworkings] = useState<IResponseCoworking[]>([]);
  const [countries, setCountries] = useState<any[]>([]);
  const [states, setStates] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  const [filter, setFilter] = useState({ country: '', state: '', city: '' });

  const getOptions = async () => {
    const options = await getoptions({ filter });
    if (filter.city) {
      const currentcoworkings = await GetCoworkingsFilter({ filter });
      setCoworkings(currentcoworkings.coworking);
    } else if (filter.state) {
      setCities(options);
      const currentcoworkings = await GetCoworkingsFilter({ filter });
      setCoworkings(currentcoworkings.coworking);
    } else {
      if (filter.country) setStates(options);
      const currentcoworkings = await GetCoworkingsFilter({ filter });
      setCoworkings(currentcoworkings.coworking);
    }
  };

  useEffect(() => {
    const getCountries = async () => {
      const countries = await getCountriesfilter();
      const currentcoworkings = await GetCoworkingsFilter({ filter });
      setCoworkings(currentcoworkings.coworking);
      setCountries(countries);
    };
    getCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getOptions();
  }, [filter]);

  const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    const newfilter = { country: '', state: '', city: '' };
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
    console.log("filter", filter);
    console.log("newfilter", newfilter);
    
    
  };

  return { coworkings, countries, states, cities, handleChange, filter };
}
export default useCoworkings