'use client';
import { useEffect, useState } from 'react';
import GetAddressByParams from '@/utils/gets/apiNominatim/getByParams';
import GetAddressFree from '@/utils/gets/apiNominatim/getAadressFree';
import { useMyCoworkingContext } from '../../myCoworkingConstext';
import { geocodeAddress } from '@/utils/geocodeAdressAndReverse';
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
    
  };
};

export default UseEditLocation;
