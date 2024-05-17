'use client';
import { useUserContext } from '../../context';
import GetCoworkingDetailForAdmin from '@/utils/gets/getCoworkingDetailForAdmisn';
import InfoUsersAdmins from '../MyCoworkingDetail/componentsDetail/users';
import InfoCoworking from '../MyCoworkingDetail/componentsDetail/infoContact';

import { useEffect, useState } from 'react';
import PutUpdateCoworking from '@/utils/puts/putUpdateCoworking';
import Modal from '../Modals/ModalNewUser';
import arrayFormNewUserCoworking from '@/utils/arraysforms/NewUserRecepCoworking';
import PostNewUserReceptCoworking from '@/utils/posts/postNewUserReceptCoworking';
import ImagesContent from './imagescontent';
import Swal from 'sweetalert2';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  const [newUserForm, setNewUserForm] = useState({
    name: '',
    lastname: '',
    phone: '',
    email: '',
    identification: '',
    position: '',
    role: 'coworking',
    status: 'active',
    coworkingId: id,
  });
  const getData = async () => {
    const coworkingData = await GetCoworkingDetailForAdmin({ id, token });
    setCoworking(coworkingData);
  };
  const handlechangeNewUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUserForm({ ...newUserForm, [name]: value });
    console.log(newUserForm);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;

    if (name === 'capacity') {
      setCoworking({ ...coworking, [name]: Number(value) });
      setNewInfo({ ...newInfo, [name]: Number(value) });
    } else {
      setCoworking({ ...coworking, [name]: value });
      setNewInfo({ ...newInfo, [name]: value });
    }

    console.log(newInfo);
  };

  const handleClick = async () => {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `No'No guardar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('guardado', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
        return;
      }
    });
    const response = await PutUpdateCoworking({ id, newInfo, token });

    getData();
    console.log(newInfo);

    console.log(response);
  };

  const handleClickNewUser = async (e: MouseEvent) => {
    e.preventDefault();
    const response = await PostNewUserReceptCoworking({ newUserForm, token });
    console.log(response);
    setIsModalOpen(false);
    getData();
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
                  value={coworking.address}
                  name="address"
                  placeholder="Dirección"
                />
              </div>
              <div className="flex">
                <input
                  onChange={handleChange}
                  className=" bg-gray-100"
                  type="text"
                  value={coworking.city}
                  name="city"
                  placeholder="Ciudad"
                />
                <input
                  onChange={handleChange}
                  className=" bg-gray-100"
                  type="text"
                  value={coworking.state}
                  name="state"
                  placeholder="Estado"
                />
                <input
                  onChange={handleChange}
                  className=" bg-gray-100"
                  type="text"
                  value={coworking.country}
                  placeholder="Pais"
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
                  value={coworking.open  }
                  name="open"
                  placeholder='Apertura'
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
                  value={coworking.close}
                  name="close"
                  placeholder='Cierre'
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
                  value={coworking.capacity}
                  name="capacity"
                  placeholder='Capacidad'
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
                  value={coworking.status}
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
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-4 block w-full rounded-lg border bg-gray-100 md:w-1/2"
              >
                Agregar Recepcionista
              </button>
              <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                {arrayFormNewUserCoworking.map((field) => (
                  <div key={field.name} className="flex flex-col">
                    <label
                      htmlFor={field.name}
                      className="mb-2 text-sm font-medium text-gray-700"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      value={(newUserForm as any)[field.name]} // TypeScript might need this cast
                      onChange={handlechangeNewUser}
                      className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ))}

                <button
                  className="rounded bg-red-600 px-4 py-2 text-white"
                  onClick={handleClickNewUser}
                >
                  Crear usuario
                </button>
              </Modal>

              <h2 className="text-xl font-semibold">Administradores</h2>
              {coworking.user.map((user) => (
                <InfoUsersAdmins key={user.id} user={user} />
              ))}
            </div>
          </div>
        </div>
        {/* Contenedor 2 */}
        <ImagesContent coworking={coworking} />
      </div>
    </div>
  );
}
