/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useState, useEffect } from 'react';

import IResponseCoworking from '@/utils/types/coworkingsResponse';
import getCountriesfilter from '@/utils/gets/countriesFilter';
import GetCoworkingsFilter from '@/utils/gets/getCoworkingsFilter';
import getoptions from '@/utils/gets/getoptionsFilter';
import getoptionsFilterLocations from '@/utils/gets/getOptionFilterAndLocation';
import getAllCoworkings from '@/utils/gets/getCoworkingsAll';

const useCoworkings = () => {
  const [coworkings, setCoworkings] = useState<IResponseCoworking[]>([]);
  const [countries, setCountries] = useState<any[]>([]);
  const [states, setStates] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  const [filter, setFilter] = useState({ country: '', state: '', city: '' });
  const [cameraPropsNew, setCameraPropsNew] = useState({
    center: { lat: -17.797610035031738, lng: -63.52392568413111 },
    zoom: 3,
  });

  const getOptions = async () => {
    const options = await getoptionsFilterLocations({ filter });
    console.log(filter);

    console.log(options);

    if (filter.city) {
    } else if (filter.state) {
      setCities(options.cities);
    } else if (filter.country) {
      setStates(options.states);
    } else {
      setCountries(options);
    }
  };
  const getCowokings = async () => {
    const currentcoworkings = await getAllCoworkings();
    setCoworkings(currentcoworkings);
  };

  useEffect(() => {
    getOptions();
    getCowokings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getOptions();
    console.log(cameraPropsNew);
    console.log(filter);
    
    
  }, [filter]);

  const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value} = event.target;
    console.log(name, value);
    const newfilter = { country: '', state: '', city: '' };
    if (name === 'country') {
      const country = countries.find((country) => country.id == value);
      setCameraPropsNew({
        center: { lat: Number(country?.lat), lng: Number(country?.long) },
        zoom: 5,
      });
      newfilter.country = value;
      newfilter.state = '';
      newfilter.city = '';
      setCities([]);
      setStates([]);
    }
    if (name === 'state') {
      const state = states.find((state) => state.id == value);
      setCameraPropsNew({
        center: { lat: Number(state?.lat), lng: Number(state?.long) },
        zoom: 7,
      });
      newfilter.country = filter.country;
      newfilter.state = value;
      newfilter.city = '';
      setCities([]);
    }
    if (name === 'city') {
      const city = cities.find((city) => city.id == value);
      setCameraPropsNew({
        center: { lat: Number(city?.lat), lng: Number(city?.long) },
        zoom: 12,
      });
      newfilter.country = filter.country;
      newfilter.state = filter.state;
      newfilter.city = value;
    }
    setFilter(newfilter);
    console.log('filter', filter);
    console.log('newfilter', newfilter);
    console.log(coworkings);
  };

  return {
    coworkings,
    countries,
    states,
    cities,
    handleChange,
    filter,
    cameraPropsNew,
  };
};
export default useCoworkings;
