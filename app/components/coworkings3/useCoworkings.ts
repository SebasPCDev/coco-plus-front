/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useState, useEffect } from 'react';
import IResponseCoworking from '@/utils/types/coworkingsResponse';
import getoptionsFilterLocations from '@/utils/gets/getOptionFilterAndLocation';
import getAllCoworkings from '@/utils/gets/getCoworkingsAll';

const useCoworkings = () => {
  const [Allcoworkings, setAllCoworkings] = useState<IResponseCoworking[]>([]);
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
    setAllCoworkings(currentcoworkings);
    setCoworkings(currentcoworkings);
  };

  useEffect(() => {
    getOptions();
    getCowokings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getOptions();
  }, [filter]);

  const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    const newfilter = { country: '', state: '', city: '' };

    if (name === 'country') {
      if (value) {
        const country = countries.find(
          (country) => country.id === Number(value),
        );
        setCameraPropsNew({
          center: { lat: Number(country?.lat), lng: Number(country?.long) },
          zoom: 5,
        });
      } else {
        setCameraPropsNew({
          center: { lat: -17.797610035031738, lng: -63.52392568413111 },
          zoom: 3,
        });
      }
      newfilter.country = value;
      newfilter.state = '';
      newfilter.city = '';
      setCities([]);
      setStates([]);
    }
    if (name === 'state') {
      if (value) {
        const state = states.find((state) => state.id == value);
        setCameraPropsNew({
          center: { lat: Number(state?.lat), lng: Number(state?.long) },
          zoom: 7,
        });
      }

      newfilter.country = filter.country;
      newfilter.state = value;
      newfilter.city = '';
      setCities([]);
    }
    if (name === 'city') {
      if (value) {
        const city = cities.find((city) => city.id == value);
        setCameraPropsNew({
          center: { lat: Number(city?.lat), lng: Number(city?.long) },
          zoom: 12,
        });
      }

      newfilter.country = filter.country;
      newfilter.state = filter.state;
      newfilter.city = value;
    }
    setFilter(newfilter);
  };
  const FilterMap = async (bounds: any) => {
    const { south, west, north, east } = bounds;

    const filteredCoworkings = Allcoworkings.filter((coworking) => {
      return (
        Number(coworking.lat) >= south &&
        Number(coworking.lat) <= north &&
        Number(coworking.long) >= west &&
        Number(coworking.long) <= east
      );
    });

    setCoworkings(filteredCoworkings);
  };

  return {
    coworkings,
    countries,
    states,
    cities,
    handleChange,
    filter,
    cameraPropsNew,
    FilterMap,
  };
};
export default useCoworkings;
