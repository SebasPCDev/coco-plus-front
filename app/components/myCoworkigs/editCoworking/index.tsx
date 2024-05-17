'use client';
import { useUserContext } from '../../context';
import GetCoworkingDetailForAdmin from '@/utils/gets/getCoworkingDetailForAdmisn';
import InfoUsersAdmins from '../MyCoworkingDetail/componentsDetail/users';
import InfoCoworking from '../MyCoworkingDetail/componentsDetail/infoContact';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import PutUpdateCoworking from '@/utils/puts/putUpdateCoworking';

interface User {
  id: string;
  name: string;
  lastname: string;
  phone: string;
  email: string;
  identification: string;
  position: string;
  recoveryToken: string | null;
  activationDate: string | null;
  role: string;
  status: string;
}

interface Image {
  id: string;
  secure_url: string;
}

interface Coworking {
  id: string;
  name: string;
  phone: string;
  email: string;
  open: string;
  close: string;
  address: string;
  country: string | null;
  state: string | null;
  city: string | null;
  lat: number | null;
  long: number | null;
  capacity: number;
  message: string;
  status: string;
  thumbnail: string | null;
  user: User[];
  images: Image[];
}
type NewInfo = Omit<Coworking, 'id' | 'user' | 'images' | 'thumbnail'>;

export default function MyCoworkingDetailEdit({ id }: { id: string }) {
  const { token } = useUserContext();
  const [newInfo, setNewInfo] = useState({});

  const [coworking, setCoworking] = useState<Coworking>({
    id: '',
    name: '',
    phone: '',
    email: '',
    open: '',
    close: '',
    address: '',
    country: null,
    state: null,
    city: null,
    lat: null,
    long: null,
    capacity: 0,
    message: '',
    status: '',
    thumbnail: null,
    user: [],
    images: [],
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;

    if (name === 'capacity') {
      setCoworking({ ...coworking, [name]: parseInt(value) });
      setNewInfo({ ...newInfo, [name]: parseInt(value) });
    } else {
      setCoworking({ ...coworking, [name]: value });
      setNewInfo({ ...newInfo, [name]: value });
    }

    console.log(newInfo);
  };

  const handleClick = async () => {
    const response = await PutUpdateCoworking({ id, newInfo, token });
    console.log(newInfo);

    console.log(response);
  };

  const getData = async () => {
    const coworkingData = await GetCoworkingDetailForAdmin({ id, token });
    setCoworking(coworkingData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <input
        onChange={handleChange}
        className="  mb-4 bg-gray-100 text-center text-4xl font-bold"
        type="text"
        value={coworking.name || 'Nombre del Coworking'}
        name="name"
      />
      <div className="flex flex-col md:flex-row">
        {/* Contenedor 1 */}
        <div className="mt-4 max-h-[80vh] w-full overflow-y-auto rounded-lg bg-white p-4 shadow-lg md:mt-0 md:w-2/3">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className=" col-span-2 rounded-lg border  p-4 shadow-sm md:col-span-1">
              <h2 className="text-xl font-semibold">Contact Information</h2>
              <div className="flex">
                <p>
                  <strong>Phone:</strong>
                </p>
                <input
                  onChange={handleChange}
                  className=" bg-gray-100"
                  type="text"
                  value={coworking.phone}
                  name="phone"
                />
              </div>
              <div className="flex">
                <p>
                  <strong>Email:</strong>
                </p>
                <input
                  onChange={handleChange}
                  className=" bg-gray-100"
                  type="text"
                  value={coworking.email}
                  name="email"
                />
              </div>
            </div>
            <div className="col-span-2 rounded-lg border p-4 shadow-sm md:col-span-1">
              <h2 className="text-xl font-semibold">Address</h2>
              <div className="flex">
                <input
                  onChange={handleChange}
                  className=" bg-gray-100"
                  type="text"
                  value={coworking.address || 'Dirección'}
                  name="address"
                />
              </div>
              <div className="flex">
                <input
                  onChange={handleChange}
                  className=" bg-gray-100"
                  type="text"
                  value={coworking.city || 'Ciudad'}
                  name="city"
                />
                <input
                  onChange={handleChange}
                  className=" bg-gray-100"
                  type="text"
                  value={coworking.state || 'Provincia'}
                  name="state"
                />
                <input
                  onChange={handleChange}
                  className=" bg-gray-100"
                  type="text"
                  value={coworking.country || 'Pais'}
                  name="country"
                />
              </div>
            </div>
            <div className="col-span-2 rounded-lg border p-4 shadow-sm md:col-span-1">
              <h2 className="text-xl font-semibold">Operating Hours</h2>
              <div className="flex">
                <p>
                  <strong>Open:</strong>
                </p>
                <input
                  onChange={handleChange}
                  className=" bg-gray-100"
                  type="text"
                  value={coworking.open || 'Horario de apertura'}
                  name="open"
                />
              </div>
              <div className="flex">
                <p>
                  <strong>Close:</strong>
                </p>
                <input
                  onChange={handleChange}
                  className=" bg-gray-100"
                  type="text"
                  value={coworking.close || 'Horario de cierre'}
                  name="close"
                />
              </div>
            </div>

            <div className="col-span-2 rounded-lg border p-4 shadow-sm md:col-span-1">
              <h2 className="text-xl font-semibold">Capacity & Status</h2>
              <div className="flex">
                <p>
                  <strong>Capacity:</strong>
                </p>
                <input
                  onChange={handleChange}
                  className=" bg-gray-100"
                  type="text"
                  value={coworking.capacity || 'Capacidad'}
                  name="capacity"
                />
              </div>
              <div className="flex">
                <p>
                  <strong>Status:</strong>
                </p>
                <input
                  onChange={handleChange}
                  className=" bg-gray-100"
                  type="text"
                  value={coworking.status || 'Estatus'}
                  name="status"
                />
              </div>
            </div>
            <button
              onClick={handleClick}
              className="mt-4 block w-full rounded-lg border bg-gray-100 md:w-1/2"
            >
              Actualizar Info
            </button>

            <div className="col-span-2 rounded-lg border p-4 shadow-sm">
              <button className="mt-4 block w-full rounded-lg border bg-gray-100 md:w-1/2">
                Agregar Recepcionista
              </button>
              <h2 className="text-xl font-semibold">Administradores</h2>
              {coworking.user.map((user) => (
                <InfoUsersAdmins key={user.id} user={user} />
              ))}
            </div>
          </div>
        </div>
        {/* Contenedor 2 */}
        <div className="max-h-[80vh] w-full overflow-y-auto rounded-lg bg-white p-4 shadow-lg md:w-1/3">
          <h2 className="mb-2 text-xl font-semibold">Imagen de Portada</h2>
          <button className="mt-4 block w-full rounded-lg border bg-gray-100">
            {coworking.thumbnail ? 'Cambiar Imagen' : 'Agregar Imagen'}
          </button>
          {coworking.thumbnail && (
            <Image
              src={coworking.thumbnail}
              alt={coworking.name || 'Coworking'}
              width={500}
              height={500}
              className="rounded-lg shadow-sm"
            />
          )}

          <h2 className="my-4 text-xl font-semibold">Imágenes Secundarias</h2>
          <div className="flex flex-col space-y-4">
            <button className="mt-4 rounded-lg border bg-gray-100">
              Agregar Imágenes
            </button>
            {coworking.images.map((image) => (
              <Image
                key={image.id}
                src={image.secure_url}
                alt="Coworking space"
                className="rounded-lg shadow-sm"
                width={500}
                height={500}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
