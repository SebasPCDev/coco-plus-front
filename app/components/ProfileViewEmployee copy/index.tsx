'use client';
import React, { useEffect, useState } from 'react';
import Cookie from 'js-cookie';
import { Card } from '@/app/ui/dashboard/cards';
import { getDataUserEmployee } from './getDataUserEmployee';
import putDataUserEmployee from './putDataUserEmployee';
import Swal from 'sweetalert2';

export const ProfileViewEmployee = () => {
  // CONTENIDO DE INFO PERSONAL
  const [userData, setUserData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  // ACTUALIZACION DE CONTENIDO DE FORMULARIO
  const [name, setName] = useState<any>('');
  const [lastname, setLastname] = useState<any>('');
  const [email, setEmail] = useState<any>('');
  const [phone, setPhone] = useState<any>('');
  const [position, setPosition] = useState<any>('');
  const [identification, setIdentification] = useState<any>('');
  const [errors, setErrors] = useState<any>(null);
  const [success, setSuccess] = useState<any>(false);

  // extra---
  const lastCowork: any = 20;

  // SETEO Y ENVIO DE INFORMACION DE DE CONTENIDO (logica de put de datos personales)
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const token: any = Cookie.get('token');
    const user: any = JSON.parse(Cookie.get('user') as string);

    const id: any = user.id;

    if (!token) {
      setErrors('No se encontró el token');
      return;
    }
    const newData: any = {
      name,
      lastname,
      email,
      phone,
      position,
      identification,
    };

    try {
      for (const propiedad in newData) {
        if (newData[propiedad].trim() === '') {
          delete newData[propiedad];
        }
      }
      if (Object.keys(newData).length === 0) {
        Swal.fire({
          title: 'Debes ingresar al menos un campo para actualizar tus datos',
          icon: 'warning',
        });
        return;
      }
      const dataUpdate: any = await putDataUserEmployee(token, newData, id);
      if (dataUpdate) {
        Swal.fire({
          title: '¿Seguro que quieres actualizar tus datos?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#222B2D',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, actualizar!',
        }).then((result: any) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: 'Datos actualizados!',
              icon: 'success',
            });
            setSuccess(true);
            setErrors(null);

            setTimeout(() => {
              window.location.reload();
            }, 1500);
          }
        });
      }
    } catch (errors: any) {
      setErrors(errors.message || 'Error desconocido');
      setSuccess(false);
    }
  };

  //ACTUALIZACION DE CONTENIDO
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token: any = Cookie.get('token');
        if (token) {
          const data: any = await getDataUserEmployee(token);
          setUserData(data);
        } else {
          setError('No se encontró el token');
        }
      } catch (error: any) {
        setError(error.message || 'Error desconocido');
      }
    };

    fetchUserData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return (
      <div className="flex w-full flex-col">
        <section className="relative justify-between pb-5 pt-40">
          <div className="absolute left-0 top-0 z-0 h-60 w-full rounded-lg bg-gray-300"></div>
          <div className="mx-auto w-full max-w-7xl md:px-8">
            <div className="relative z-10 mb-5 flex items-center justify-center sm:justify-start">
              <div className="h-40 w-40 rounded-full border-4 border-solid border-white bg-gray-300"></div>
            </div>
            <div className="mb-5 flex flex-col items-center justify-center max-sm:gap-5 sm:flex-row sm:justify-between">
              <div className="block">
                <div className="flex items-center gap-4 py-5 max-sm:flex-wrap max-sm:justify-center">
                  <a
                    href="javascript:;"
                    className="h-10 w-40 rounded-full bg-gray-300 px-6 py-3 font-semibold leading-6  text-gray-700 transition-all duration-500 hover:bg-stone-200 hover:text-gray-900"
                  >
                    {' '}
                  </a>
                  <a
                    href="javascript:;"
                    className="h-10 w-40 rounded-full bg-gray-300 px-6 py-3 font-semibold leading-6  text-gray-700 transition-all duration-500 hover:bg-stone-200 hover:text-gray-900"
                  >
                    {' '}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <main className="flex w-full flex-col">
      <section className="relative justify-between pb-5 pt-40">
        <div>
          <div className="w-full justify-start">
            <div className="relative z-10 mb-5 flex items-center justify-center sm:justify-start">
              {/* <img
                src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                alt="user-avatar-image"
                className=" w-48 rounded-full border-4 border-solid border-white"
              /> */}
            </div>

            <div className="mb-10 flex flex-col items-center justify-center max-sm:gap-5 sm:flex-row sm:justify-evenly">
              <div className="block">
                <h3 className="mb-1 text-[30px] font-bold text-gray-900 max-sm:text-center">
                  {`${userData.name} ${userData.lastname}`}
                </h3>

                <h2 className=" font-semibold leading-7 text-gray-900">
                  <b>Datos personales</b>
                </h2>
                <div className="flex flex-col items-start gap-4 py-5 max-sm:flex-wrap max-sm:justify-center">
                  <a
                    href="javascript:;"
                    className="rounded-lg bg-custom-tertiary px-6 py-3 font-semibold leading-6  text-gray-700 transition-all duration-500 hover:bg-custom-primary hover:text-gray-900"
                  >
                    Telefono: {userData.phone}
                  </a>
                  <a
                    href="javascript:;"
                    className="rounded-lg bg-custom-tertiary px-6 py-3 font-semibold leading-6  text-gray-700 transition-all duration-500 hover:bg-custom-primary hover:text-gray-900"
                  >
                    Email: {userData.email}
                  </a>
                </div>
                <p className=" font-normal leading-7 text-gray-800 max-sm:text-center">
                  <b>Nº de identificacion: </b> {userData.identification}
                  <br className="hidden sm:block" />
                  <b>Cargo: </b> {userData.position}
                  <br className="hidden sm:block" />
                  <b>Rol: </b>{' '}
                  {userData.role === 'employee' ? 'Empleado' : 'Verificar'}{' '}
                  {/* !!REVISAR */}
                  <br className="hidden sm:block" />
                </p>
              </div>
              <div className="mb-5 flex flex-col items-center justify-center max-sm:gap-5 sm:flex-row sm:justify-between">
                <div className="block">
                  <h2 className=" text-[20px] text-gray-900">
                    <b>Datos de empresa</b>
                  </h2>
                  <p className=" font-normal leading-7 text-gray-800 max-sm:text-center">
                    <b>Nombre de la empresa: </b>{' '}
                    {userData.employee.company.name}
                    <br className="hidden sm:block" />
                    <b>Email: </b> {userData.employee.company.email}
                    <br className="hidden sm:block" />
                    <b>Teléfono: </b> {userData.employee.company.phone}
                    <br className="hidden sm:block" />
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto w-[60rem]">
              <div className="rounded-2xl bg-custom-primary p-5">
                <h2 className=" text-[20px] font-semibold leading-7 text-gray-900">
                  Información
                </h2>
                <p className="mt-5 leading-6 text-gray-600">
                  Tus pases totales asignados, tus pases disponibles, y los
                  últimos coworkings que visitaste
                </p>

                <div className="mt-5 flex flex-row justify-center gap-4 p-1">
                  <Card
                    title="Pases Totales"
                    value={userData.employee.passes}
                    type="pending"
                  />
                  <Card
                    title="Pases disponibles"
                    value={userData.employee.passesAvailable}
                    type="invoices"
                  />
                  <Card
                    title="Últimos Coworkings"
                    value={lastCowork}
                    type="customers"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="mt-10 space-y-12 ">
            <div className="border-b border-gray-900/10 pb-12 ">
              <h2 className=" text-[20px] font-semibold text-gray-900">
                Editar información
              </h2>
              <p className="mt-1  leading-6 text-gray-600">
                Edita los campos y actualiza algunos datos de tu perfil
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-2 sm:col-start-1">
                  <label className="block  font-medium leading-6 text-gray-900">
                    Nombre:
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder={userData.name}
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="sm: block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-secondary sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block  font-medium leading-6 text-gray-900">
                    Apellido:
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder={userData.lastname}
                      type="text"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      className="sm: block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-secondary sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label className="block  font-medium leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder={userData.email}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="sm: block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-secondary sm:leading-6"
                    />
                  </div>
                  <br />
                  <label className="block  font-medium leading-6 text-gray-900">
                    Teléfono
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder={userData.phone}
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="sm: block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-secondary sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label className="block  font-medium leading-6 text-gray-900">
                    Posición:
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder={userData.position}
                      type="text"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      className="sm: block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-secondary sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block  font-medium leading-6 text-gray-900">
                    Nº de identificación
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder={userData.identification}
                      type="text"
                      value={identification}
                      onChange={(e) => setIdentification(e.target.value)}
                      className="sm: block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-secondary sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10 mt-6 flex items-center justify-start gap-x-6">
            <button
              type="submit"
              className="flex h-10 items-center rounded-lg bg-custom-secondary px-4  font-medium text-white transition-colors hover:bg-custom-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
            >
              Guardar
            </button>
          </div>

          {error && <div className="mt-4 text-red-500">{error}</div>}
          {success && (
            <div className="mt-4 text-green-500">
              Datos actualizados con éxito
            </div>
          )}
        </form>
      </div>
    </main>
  );
};
