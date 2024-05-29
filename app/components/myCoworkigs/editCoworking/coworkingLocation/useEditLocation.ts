'use client';
import { useEffect, useState } from 'react';
import GetAddressByParams from '@/utils/gets/apiNominatim/getByParams';
import GetAddressFree from '@/utils/gets/apiNominatim/getAadressFree';
import { useMyCoworkingContext } from '../../myCoworkingConstext';
import { geocodeAddress } from '@/utils/geocodeAdressAndReverse';
import getoptionsFilterLocations from '@/utils/gets/getOptionFilterAndLocation';
import normalizeString from '@/utils/normalize/normalizeString';
import postCountry from '@/utils/posts/Geography/postCountry';
import postState from '@/utils/posts/Geography/postState';
import postCity from '@/utils/posts/Geography/postCity';
interface ResponseItem {
  place_id?: number;
  licence?: string;
  osm_type?: string;
  osm_id?: number;
  lat?: string;
  lon?: string;
  class?: string;
  type?: string;
  place_rank?: number;
  importance?: number;
  addresstype?: string;
  name?: string;
  display_name?: string;
  boundingbox?: string[];
}
interface IAddress {
  country?: string;
  state?: string;
  city?: string;
  address?: string;
}

const UseEditLocation = () => {
  const { setMyCoworking, Mycoworking } = useMyCoworkingContext();
  const [options, setOptions] = useState<any>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentName, setCurrentName] = useState<string>('');
  const [address, setAddress] = useState<IAddress>({});
  const [corder, setCorder] = useState({});

  const [countries, setCountries] = useState<any[]>([]);
  const [states, setStates] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  const [filter, setFilter] = useState({ country: '', state: '', city: '' });
  const [cameraPropsNew, setCameraPropsNew] = useState({
    center: { lat: -17.797610035031738, lng: -63.52392568413111 },
    zoom: 3,
  });
  const [optionRender, setOptionRender] = useState('address');
  const [CountryId, setCountryId] = useState(0);
  const [StateId, setStateId] = useState(0);

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

  useEffect(() => {
    getOptions();
  }, [filter]);

  useEffect(() => {
    console.log(address);
  }, [address]);

  const handleChangeform = async (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    const newfilter = { country: '', state: '', city: '' };
    const newAdress = { country: '', state: '', city: '', address: '' };
    console.log(filter);
    let current = '';

    if (name === 'country') {
      if (value === '0') {
        setOptionRender('oterCountry');
      } else if (value) {
        setOptionRender('address');
        const country = countries.find(
          (country) => country.id === Number(value),
        );
        setCountryId(Number(value));
        current = country.name;
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
      newAdress.country = current;
      newAdress.state = '';
      newAdress.city = '';
      newAdress.address = '';

      newfilter.country = value;
      newfilter.state = '';
      newfilter.city = '';
      setCities([]);
      setStates([]);
    }
    if (name === 'state') {
      if (value === '0') {
        setOptionRender('oterState');
      } else if (value) {
        setOptionRender('address');
        const state = states.find((state) => state.id == value);
        setStateId(Number(value));
        current = state.name;
        setCameraPropsNew({
          center: { lat: Number(state?.lat), lng: Number(state?.long) },
          zoom: 7,
        });
      }

      newAdress.country = address.country;
      newAdress.state = current;
      newAdress.city = '';
      newAdress.address = '';

      newfilter.country = filter.country;
      newfilter.state = value;
      newfilter.city = '';
      setCities([]);
    }
    if (name === 'city') {
      if (value === '0') {
        setOptionRender('oterCity');
      } else if (value) {
        setOptionRender('address');
        const city = cities.find((city) => city.id == value);
        current = city.name;
        setCameraPropsNew({
          center: { lat: Number(city?.lat), lng: Number(city?.long) },
          zoom: 12,
        });
      }
      newAdress.country = address.country;
      newAdress.state = address.state;
      newAdress.city = current;
      newAdress.address = '';

      newfilter.country = filter.country;
      newfilter.state = filter.state;
      newfilter.city = value;
    }
    setAddress(newAdress);
    setFilter(newfilter);
    // setMyCoworking({ ...Mycoworking, ...newAdress });
  };

  useEffect(() => {
    setAddress({
      country: Mycoworking?.country,
      state: Mycoworking?.state,
      city: Mycoworking?.city,
      address: Mycoworking?.address,
    });
  }, [, Mycoworking]);

  useEffect(() => {
    console.log('este es mi coworking context', Mycoworking);
  }, [Mycoworking]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleBlur = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (value == '') {
      return;
    }
    if (name == 'country') {
      const addressquery = { [name]: value };
      setAddress(addressquery);

      const response = await GetAddressByParams({ address: addressquery });
      if (response.length == 0) {
        alert('no se encontraron resultados  buelva a ingresar un ' + name);
      } else if (response.length == 1) {
        const estandarName = response[0].name;
        const newCountry = {
          name: estandarName,
          lat: response[0].lat,
          long: response[0].lon,
        };
        setCameraPropsNew({
          center: {
            lat: Number(response[0].lat),
            lng: Number(response[0].lon),
          },
          zoom: 5,
        });
        const ResponsePostCountry = await postCountry({ newCountry });
        setCountryId(ResponsePostCountry.id);

        setAddress({ [name]: estandarName });
      } else if (response.length > 1) {
        setCurrentName(name);
        const options = (response as ResponseItem[]).map((option, index) => ({
          idex: index,
          name: option.name,
          display_name: option.display_name,
        }));
        setOptions(options);
        setIsModalOpen(true);
      }
    } else if (name == 'state') {
      const addressquery = { country: address.country, [name]: value };
      setAddress(addressquery);
      const response = await GetAddressByParams({ address: addressquery });
      if (response.length == 0) {
        alert('no se encontraron resultados  buelva a ingresar un ' + name);
      } else if (response.length == 1) {

        const newState = {
          name: response[0].name,
          lat: response[0].lat,
          long: response[0].lon,
          countryId: CountryId,
        };
        setCameraPropsNew({
          center: {
            lat: Number(response[0].lat),
            lng: Number(response[0].lon),
          },
          zoom: 7,
        });
        console.log(newState);
        
        const ResponsePostState = await postState({ newState });
        console.log(ResponsePostState);
        
        setStateId(ResponsePostState.id);
        

        const estandarName = response[0].name;

        setAddress({ country: address.country, [name]: estandarName });
      } else if (response.length > 1) {
        setCurrentName(name);
        const options = (response as ResponseItem[]).map((option, index) => ({
          idex: index,
          name: option.name,
          display_name: option.display_name,
        }));
        setOptions(options);
        setIsModalOpen(true);
      }
    } else if (name == 'city') {
      const addressquery = {
        country: address.country,
        state: address.state,
        [name]: value,
      };
      setAddress(addressquery);
      const response = await GetAddressByParams({ address: addressquery });
      console.log(response);

      if (response.length == 0) {
        alert('no se encontraron resultados  buelva a ingresar un ' + name);
      } else if (response.length == 1) {
        const newCity = {
          name: response[0].name,
          lat: response[0].lat,
          long: response[0].lon,
          stateId: StateId,
        }
        setCameraPropsNew({
          center: {
            lat: Number(response[0].lat),
            lng: Number(response[0].lon),
          },
          zoom: 12,
        });
        const ResponsePostCity = await postCity({ newCity });
        const estandarName = response[0].name;
        setAddress({
          country: address.country,
          state: address.state,
          [name]: estandarName,
        });
      } else if (response.length > 1) {
        setCurrentName(name);
        const options = (response as ResponseItem[]).map((option, index) => ({
          idex: index,
          name: option.name,
          display_name: option.display_name,
        }));
        setOptions(options);
        setIsModalOpen(true);
      }
    } else if (name == 'address') {
      setAddress({ ...address, [name]: value });
      const freeAddress = `${value} ${address.city} ${address.state} ${address.country}`;
      const responseGoogle = await geocodeAddress(freeAddress);
      console.log(freeAddress);

      console.log('imprimiendo desde coworkinglocation', responseGoogle);

      if (responseGoogle.length == 0) {
        alert('no se encontraron resultados  buelva a ingresar un ' + name);
      } else if (responseGoogle.length == 1) {
        const corde = {
          lat: String(responseGoogle[0].geometry.location.lat()),
          long: String(responseGoogle[0].geometry.location.lng()),
        };
        setAddress({
          ...address,
          address: responseGoogle[0].formatted_address,
        });
        setCorder(corde);
        setMyCoworking({
          ...Mycoworking,
          ...address,
          address: responseGoogle[0].formatted_address,
          ...corde,
        });
      } else if (responseGoogle.length > 1) {
        setCurrentName(name);
        const options = responseGoogle.map((option) => ({
          name: option.formatted_address,
        }));
        setOptions(options);
        setIsModalOpen(true);
      }
    }
  };
  const handleCheck = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked ? e.target.value : '';
    const updatedAddress = { ...address, [currentName]: newValue };
    const freeAddress = `${newValue} ${address.city} ${address.state} ${address.country}`;
    setAddress(updatedAddress);

    if (currentName === 'address' && newValue) {
      const freeAddress = `${newValue} ${address.city} ${address.state} ${address.country}`;
      const responseGoogle = await geocodeAddress(freeAddress);
      if (responseGoogle.length > 0) {
        const corde = {
          lat: String(responseGoogle[0].geometry.location.lat()),
          long: String(responseGoogle[0].geometry.location.lng()),
        };
        setAddress({
          ...address,
          address: responseGoogle[0].formatted_address,
        });
        setCorder(corde);
        setMyCoworking({
          ...Mycoworking,
          ...updatedAddress,
          address: responseGoogle[0].formatted_address,
          ...corde,
        });
      }
    }
  };

  return {
    address,
    handleChange,
    handleBlur,
    handleCheck,
    options,
    isModalOpen,
    setIsModalOpen,
    setOptions,
    currentName,
    setCurrentName,
    setCorder,
    cameraPropsNew,
    countries,
    states,
    cities,
    handleChangeform,
    optionRender,
  };
};

export default UseEditLocation;
