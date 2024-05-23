'use client';
import { useEffect, useState } from 'react';
import Cookie from 'js-cookie';
import Swal from 'sweetalert2';
import GetCoworkingDetail from '@/utils/gets/getCoworkingDetail';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import useCoworkingsForm from '../requests/coworkingsForm/useCoworkingsForm';
import { putDataCoworking } from '@/app/lib/actions';
import { useRouter } from 'next/navigation';

export const EditCoworkSuperAdmin = ({ id }: { id: string }) => {
  const token = Cookie.get('token');
  const router = useRouter();
  const router = useRouter();

  const { generateTimeOptions } = useCoworkingsForm();
  const [newData, setNewData] = useState({
    name: '',
    phone: '',
    email: '',
    open: '',
    close: '',
    address: '',
    country: '',
    state: '',
    city: '',
    capacity: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const currentData = await GetCoworkingDetail(id);

      if (currentData) {
        setNewData({
          name: currentData.name,
          phone: currentData.phone,
          email: currentData.email,
          open: currentData.open.slice(0, 5),
          close: currentData.close.slice(0, 5),
          address: currentData.address,
          country: currentData.country,
          state: currentData.state,
          city: currentData.city,
          capacity: currentData.capacity,
        });
      }
    };
    fetchData();
  }, []);

  const handleChangeTime = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = event.target;
    console.log(value, name);
    setNewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewData((prevData: any) => ({
      ...prevData,
      [name]: name === 'capacity' ? Number(value) : value,
    }));
  };

  const handleChangePhone = (name: string, value: string) => {
    setNewData({
      ...newData,
      [name]: value,
    });
  };
  const handleCancel = (e: any) => {
    e.preventDefault();
    router.back();
  };

  const handleClick = async (event: any) => {
    event.preventDefault();

    const modifiedData = {};
    for (const key in newData) {
      if (newData[key] !== '' && newData[key] !== 0) {
        modifiedData[key] = newData[key];
      }
    }

    Swal.fire({
      title: '¿Estás seguro de querer actualizar este coworking?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#222B2D',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Actualizar',
    }).then(async (result) => {
      if (result.isConfirmed && token) {
        try {
          await putDataCoworking({ token, modifiedData, id });
          Swal.fire('Datos actualizados exitosamente', '', 'success');
        } catch (error) {
          console.error('Error al actualizar los datos del coworking:', error);
          Swal.fire('Error al actualizar los datos del coworking', '', 'error');
        }
      }
    });
  };

  const handleCancel = () => {
    router.push('/dashboard/superadmin/coworkings');
  };

  return (
    <div className="mx-auto max-w-5xl rounded-lg bg-white p-8 shadow-lg">
      <form>
        <h1 className="col-span-2 mb-8 text-center text-4xl font-bold">
          Información Coworking
        </h1>
        <div className="flex flex-col justify-center gap-6 md:grid md:grid-cols-2 xl:grid-cols-3">
          <div className="flex flex-col">
            <label className="label-form">Nombre:</label>
            <input
              name="name"
              type="text"
              className="input-form"
              onChange={handleInputChange}
              value={newData.name}
            />
          </div>
          <div className="flex flex-col">
            <label className="label-form" htmlFor="phone">
              Teléfono:
            </label>
            <PhoneInput
              defaultCountry="ar"
              name="phone"
              value={newData.phone}
              onChange={(phone) => handleChangePhone('phone', phone)}
            />
          </div>
          <div className="flex flex-col">
            <label className="label-form">Email:</label>
            <input
              type="email"
              name="email"
              className="input-form"
              onChange={handleInputChange}
              value={newData.email}
            />
          </div>
          <div className="flex flex-col">
            <label className="label-form">Hora de Apertura:</label>
            <select
              className="input-form"
              onChange={handleChangeTime}
              name="open"
            >
              <option>{newData.open.slice(0, 5)}</option>
              {generateTimeOptions().map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="label-form">Hora de Cierre:</label>
            <select
              className="input-form"
              onChange={handleChangeTime}
              name="close"
            >
              <option>{newData.close.slice(0, 5)}</option>
              {generateTimeOptions().map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="label-form">País:</label>
            <input
              name="country"
              type="text"
              className="input-form"
              onChange={handleInputChange}
              value={newData.country}
            />
          </div>
          <div className="flex flex-col">
            <label className="label-form">País:</label>
            <input
              name="country"
              type="text"
              className="input-form"
              onChange={handleInputChange}
              value={newData.country}
            />
          </div>
          <div className="flex flex-col">
            <label className="label-form">Estado / Provincia:</label>
            <input
              name="state"
              type="text"
              className="input-form"
              onChange={handleInputChange}
              value={newData.state}
            />
          </div>
          <div className="flex flex-col">
            <label className="label-form">Ciudad:</label>

            <input
              type="text"
              name="city"
              className="input-form"
              onChange={handleInputChange}
              value={newData.city}
            />
          </div>
          <div className="flex flex-col">
            <label className="label-form">Capacidad:</label>
            <input
              type="number"
              name="capacity"
              className="input-form"
              onChange={handleInputChange}
              value={newData.capacity}
            />
          </div>
          <div className="col-span-2 flex flex-col">
            <label className="label-form">Dirección:</label>
            <input
              type="text"
              name="address"
              className="input-form"
              onChange={handleInputChange}
              value={newData.address}
            />
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-5 md:justify-between">
          <button onClick={handleCancel} className="btn btn-cancel">
            Cancelar
          </button>
          <button className="btn btn-confirm" onClick={handleClick}>
            Modificar perfil
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCoworkSuperAdmin;
