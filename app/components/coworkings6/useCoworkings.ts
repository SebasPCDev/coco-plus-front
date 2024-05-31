/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useState, useEffect } from 'react';
import IResponseCoworking from '@/utils/types/coworkingsResponse';
// import getoptionsFilterLocations from '@/utils/gets/getOptionFilterAndLocation';
import getAllCoworkings from '@/utils/gets/getCoworkingsAll';
import getCountries from '@/utils/api/geography/getCountries';
import getStates from '@/utils/api/geography/getStates';
import getCities from '@/utils/api/geography/getCities';

const useCoworkings = () => {
  const [Allcoworkings, setAllCoworkings] = useState<IResponseCoworking[]>([]);
  const [coworkings, setCoworkings] = useState<IResponseCoworking[]>([]);
  const [allCountries, setAllCountries] = useState([]);
  const [allStates, setAllStates] = useState<any[]>([]);
  const [allCities, setAllCities] = useState<any[]>([]);
  const [states, setStates] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  const [current, setCurrent] = useState({
    countryId: undefined,
    stateId: undefined,
    cityId: undefined,
  });
  const [cameraPropsNew, setCameraPropsNew] = useState({
    center: { lat: -17.797610035031738, lng: -63.52392568413111 },
    zoom: 5,
  });

  const getInitialData = async () => {
    const currentcoworkings = await getAllCoworkings();
    setAllCoworkings(currentcoworkings);
    setCoworkings(currentcoworkings);
    const allCountries = await getCountries();
    const allStates = await getStates();
    const allCities = await getCities();
    setAllCountries(allCountries);
    setAllStates(allStates);
    setAllCities(allCities);
  };

  useEffect(() => {
    getInitialData();
  }, []);

  const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    if (name === 'country') {
      if (value) {
        // Filter States
        const states = allStates.filter((state) => state.countryId === +value);
        setStates(states);
        setCurrent({ ...current, countryId: value });
        setCities([]);

        // Center Map
        const country = allCountries.find((country) => country.id === +value);
        setCameraPropsNew({
          center: { lat: Number(country?.lat), lng: Number(country?.long) },
          zoom: 5,
        });
      } else {
        setStates([]);
        setCities([]);
        setCameraPropsNew({
          center: { lat: -17.797610035031738, lng: -63.52392568413111 },
          zoom: 3,
        });
      }
    }
    if (name === 'state') {
      if (value) {
        // Filter cities
        const state = states.find((state) => state.id == value);
        const cities = allCities.filter((city) => city.stateId === +value);
        setCurrent({ ...current, stateId: value });
        setCities(cities);

        // Center Map
        setCameraPropsNew({
          center: { lat: Number(state?.lat), lng: Number(state?.long) },
          zoom: 7,
        });
      } else {
        setCities([]);
        const country = allCountries.find(
          (country) => country.id === +current.countryId,
        );
        setCameraPropsNew({
          center: { lat: Number(country?.lat), lng: Number(country?.long) },
          zoom: 5,
        });
      }
    }
    if (name === 'city') {
      if (value) {
        const city = cities.find((city) => city.id == value);
        setCurrent({ ...current, cityId: value });
        setCameraPropsNew({
          center: { lat: Number(city?.lat), lng: Number(city?.long) },
          zoom: 12,
        });
      } else {
        const state = allStates.find(
          (state) => state.id === +current.countryId,
        );
        setCameraPropsNew({
          center: { lat: Number(state?.lat), lng: Number(state?.long) },
          zoom: 7,
        });
      }
    }
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
    states,
    cities,
    handleChange,
    cameraPropsNew,
    FilterMap,
    allCountries,
    allStates,
    allCities,
  };
};
export default useCoworkings;
