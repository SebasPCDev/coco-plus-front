'use client';
import { useEffect, useState } from 'react';
import GetAddressByParams from '@/utils/gets/apiNominatim/getByParams';
import GetAddressFree from '@/utils/gets/apiNominatim/getAadressFree';
import Modal from '../../Modals/ModalNewUser';
import { useMyCoworkingContext } from '../../myCoworkingConstext';
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

const EditCoworkingLocation = ({ coworking }: { coworking: any }) => {
  const { setMyCoworking, Mycoworking } = useMyCoworkingContext();
  const [options, setOptions] = useState<any>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentName, setCurrentName] = useState<string>('');
  const [address, setAddress] = useState<IAddress>({});
  const [corder, setCorder] = useState({});

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
      const response = await GetAddressFree({ address: { q: freeAddress } });
      if (response.length == 0) {
        alert('no se encontraron resultados  buelva a ingresar un ' + name);
      } else if (response.length == 1) {
        const corde = { lat: response[0].lat, long: response[0].lon };
        setCorder(corde);
        setMyCoworking({ ...Mycoworking, ...address, ...corde });
      } else if (response.length > 1) {
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


  const arrayLocation = [
    {
      name: 'country',
      type: 'text',
      placeholder: 'Country',
    },
    {
      name: 'state',
      type: 'text',
      placeholder: 'State',
    },
    {
      name: 'city',
      type: 'text',
      placeholder: 'City',
    },
    {
      name: 'address',
      type: 'text',
      placeholder: 'Address',
    },
  ];

  return (
    <div className="col-span-2 rounded-lg border p-4 shadow-sm md:col-span-1">
      <h2 className="text-xl font-semibold">Address</h2>
      <div className="grid grid-cols-3 ">
        {arrayLocation.map((location) => (
          <input
            key={location.name}
            className={
              location.name == 'address'
                ? 'col-span-3  bg-gray-100'
                : ' bg-gray-100'
            }
            type={location.type}
            value={address?.[location.name] || ''}
            name={location.name}
            placeholder={location.placeholder}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        ))}
      </div>

      <div className="flex"></div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="mb-4 text-xl font-bold">Seleccionar Opciones</h2>
        <div className="space-y-2">
          {options.map((option) => (
            <div key={option.name} className="flex items-center">
              <input
                type="checkbox"
                id={option.name}
                name={option.name}
                value={option.name}
                checked={address[currentName] === option.name}
                onChange={handleCheck}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <label htmlFor={option.name} className="label-form">
                {option.display_name}
              </label>
            </div>
          ))}
        </div>
        <button
          onClick={() => setIsModalOpen(false)}
          className="mt-4 rounded-md bg-custom-primary px-4 py-2 font-semibold text-white hover:bg-blue-700"
        >
          Aceptar
        </button>
      </Modal>
    </div>
  );
};

export default EditCoworkingLocation;
