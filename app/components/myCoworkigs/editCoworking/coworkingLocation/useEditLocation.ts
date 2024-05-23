"use client";
import { useEffect, useState } from 'react';
import GetAddressByParams from '@/utils/gets/apiNominatim/getByParams';
import GetAddressFree from '@/utils/gets/apiNominatim/getAadressFree';
import { useMyCoworkingContext } from '../../myCoworkingConstext';
import { geocodeAddress } from '@/utils/geocodeAdress';
const UseEditLocation = () => {
  const { setMyCoworking, Mycoworking } = useMyCoworkingContext();
  const [options, setOptions] = useState<any>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentName, setCurrentName] = useState<string>('');
  const [address, setAddress] = useState<IAddress>({});
  const [corder, setCorder] = useState({});

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

  useEffect(() => {
    setAddress({
      country: Mycoworking?.country,
      state: Mycoworking?.state,
      city: Mycoworking?.city,
      address: Mycoworking?.address,
    });
  }, []);
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
    if (name == 'country') {
      const addressquery = { [name]: value };
      setAddress(addressquery);
      const response = await GetAddressByParams({ address: addressquery });
      if (response.length == 0) {
        alert('no se encontraron resultados  buelva a ingresar un ' + name);
      } else if (response.length == 1) {
        const estandarName = response[0].name;
        setAddress({ [name]: estandarName });
      } else if (response.length > 1) {
        setCurrentName(name);
        const options = (response as ResponseItem[]).map((option) => ({
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
        const estandarName = response[0].name;
        setAddress({ country: address.country, [name]: estandarName });
      } else if (response.length > 1) {
        setCurrentName(name);
        const options = (response as ResponseItem[]).map((option) => ({
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
      if (response.length == 0) {
        alert('no se encontraron resultados  buelva a ingresar un ' + name);
      } else if (response.length == 1) {
        const estandarName = response[0].name;
        setAddress({
          country: address.country,
          state: address.state,
          [name]: estandarName,
        });
      } else if (response.length > 1) {
        setCurrentName(name);
        const options = (response as ResponseItem[]).map((option) => ({
          name: option.name,
          display_name: option.display_name,
        }));
        setOptions(options);
        setIsModalOpen(true);
      }
    } else if (name == 'address') {
      setAddress({ ...address, [name]: value });
      const freeAddress = `${value} ${address.city} ${address.state} ${address.country}`;
      const responseGeocode = await geocodeAddress(freeAddress);
      
      const response = await GetAddressFree({ address: { q: freeAddress } });

      if (responseGeocode.length == 0) {
        alert('no se encontraron resultados  buelva a ingresar un ' + name);
      } else if (response.length == 1) {
        console.log('log 1');
        console.log('geocode address', responseGeocode);
        console.log('log 2');

        // const corde = { lat: response[0].lat, long: response[0].lon };
        // setCorder(corde);
        // setMyCoworking({ ...Mycoworking, ...address, ...corde });
      } else if (responseGeocode.length > 1) {
        setCurrentName(name);
        const options = (response as ResponseItem[]).map((option) => ({
          name: option.name,
          display_name: option.display_name,
        }));
        setOptions(options);
        setIsModalOpen(true);
      }
    }
  };

  const handleCheck = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked ? e.target.value : '';
    setAddress({ ...address, [currentName]: newValue });
    if (currentName == 'address') {
      const freeAddress = `${newValue} ${address.city} ${address.state} ${address.country}`;
      const response = await GetAddressFree({ address: { q: freeAddress } });
      const corde = { lat: response[0].lat, long: response[0].lon };
      setMyCoworking({ ...Mycoworking, ...address, ...corde });
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
  };
};

export default UseEditLocation;
